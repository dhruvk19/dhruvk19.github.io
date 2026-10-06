// dhruvk19.com v3: small progressive enhancements. The page works without JS.

(function () {
    // Keep the footer year current
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Header border once the page scrolls
    var header = document.querySelector('.site-header');
    function onScroll() {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    initThemeToggle();

    var supportsIO = 'IntersectionObserver' in window;

    // Fade sections in as they enter the viewport
    var reveals = document.querySelectorAll('.reveal');
    if (supportsIO) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px' });
        reveals.forEach(function (el) { revealObserver.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }

    initScrollspy();

    // Project filters
    var filters = document.querySelectorAll('.filter');
    var cards = document.querySelectorAll('.project-grid .card');
    filters.forEach(function (button) {
        button.addEventListener('click', function () {
            var tag = button.dataset.filter;
            filters.forEach(function (b) {
                var active = b === button;
                b.classList.toggle('is-active', active);
                b.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            cards.forEach(function (card) {
                var tags = card.dataset.tags.split(' ');
                var show = tag === 'all' || tags.indexOf(tag) !== -1;
                card.hidden = !show;
                if (show) card.classList.add('is-visible');
            });
        });
    });

    // Light/dark toggle. The inline script in <head> applies the initial theme;
    // this remembers the visitor's choice.
    function initThemeToggle() {
        var button = document.querySelector('.theme-toggle');
        if (!button) return;
        var root = document.documentElement;
        var meta = document.querySelector('meta[name="theme-color"]');

        function apply(theme) {
            root.dataset.theme = theme;
            var next = theme === 'light' ? 'dark' : 'light';
            button.setAttribute('aria-label', 'Switch to ' + next + ' mode');
            button.title = 'Switch to ' + next + ' mode';
            if (meta) meta.content = theme === 'light' ? '#faf9f6' : '#121212';
        }

        apply(root.dataset.theme === 'light' ? 'light' : 'dark');

        button.addEventListener('click', function () {
            var theme = root.dataset.theme === 'light' ? 'dark' : 'light';
            apply(theme);
            try { localStorage.setItem('theme', theme); } catch (e) {}
        });
    }

    // Scrollspy: highlights the nav link for the section being read, with a
    // sliding indicator. Handles short sections and the bottom of the page,
    // stays put while a nav click is smooth-scrolling, keeps the URL hash in
    // sync, and scrolls the mobile nav so the active link is visible.
    function initScrollspy() {
        var list = document.querySelector('.nav-links');
        var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
        if (!list || !links.length) return;

        var items = links.map(function (link) {
            return { link: link, section: document.getElementById(link.getAttribute('href').slice(1)) };
        }).filter(function (item) { return item.section; });

        var current = null;
        var lockedUntilIdle = false;
        var idleTimer = null;
        var ticking = false;
        var hasScrolled = false;

        // The section whose top has passed a line ~35% down the viewport wins.
        // At the very bottom of the page the last section wins, even if short.
        function sectionInView() {
            var doc = document.documentElement;
            if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
                return items[items.length - 1];
            }
            var line = window.innerHeight * 0.35;
            var found = null;
            items.forEach(function (item) {
                if (item.section.getBoundingClientRect().top <= line) found = item;
            });
            return found;
        }

        function moveIndicator(item) {
            if (!item) {
                list.style.setProperty('--ind-o', '0');
                return;
            }
            var link = item.link;
            list.style.setProperty('--ind-x', link.offsetLeft + 'px');
            list.style.setProperty('--ind-w', link.offsetWidth + 'px');
            // Reference the variable (not its value) so the color follows theme changes
            list.style.setProperty('--ind-color', 'var(--' + link.dataset.accent + ')');
            list.style.setProperty('--ind-o', '1');
        }

        // On small screens the link row scrolls sideways; keep the active link visible
        function revealInNav(link) {
            if (list.scrollWidth <= list.clientWidth) return;
            var left = link.offsetLeft;
            var right = left + link.offsetWidth;
            if (left < list.scrollLeft || right > list.scrollLeft + list.clientWidth - 24) {
                list.scrollTo({ left: Math.max(0, left - 16), behavior: 'smooth' });
            }
        }

        function setCurrent(item) {
            if (item === current) return;
            if (current) {
                current.link.classList.remove('is-current');
                current.link.removeAttribute('aria-current');
            }
            current = item;
            moveIndicator(item);
            if (item) {
                item.link.classList.add('is-current');
                item.link.setAttribute('aria-current', 'location');
                revealInNav(item.link);
            }
            // Keep the address bar in sync without adding history entries or jumping
            var url = item ? '#' + item.section.id : location.pathname + location.search;
            // (only after scrolling starts, so a landing URL like /#projects is never cleared)
            if (hasScrolled && history.replaceState && location.hash !== (item ? '#' + item.section.id : '')) {
                history.replaceState(null, '', url);
            }
        }

        function update() {
            ticking = false;
            if (!lockedUntilIdle) setCurrent(sectionInView());
        }

        window.addEventListener('scroll', function () {
            hasScrolled = true;
            // While a nav click is smooth-scrolling, wait until scrolling stops
            if (lockedUntilIdle) {
                clearTimeout(idleTimer);
                idleTimer = setTimeout(function () {
                    lockedUntilIdle = false;
                    update();
                }, 150);
                return;
            }
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        }, { passive: true });

        // Clicking a nav link highlights it immediately instead of flickering
        // through every section on the way there
        items.forEach(function (item) {
            item.link.addEventListener('click', function () {
                setCurrent(item);
                lockedUntilIdle = true;
                clearTimeout(idleTimer);
                idleTimer = setTimeout(function () {
                    lockedUntilIdle = false;
                    update();
                }, 1200);
            });
        });

        // Clicking the name returns to the top with nothing highlighted
        var brand = document.querySelector('.nav-brand');
        if (brand) {
            brand.addEventListener('click', function () {
                setCurrent(null);
            });
        }

        // Link widths change on resize and once web fonts finish loading
        window.addEventListener('resize', function () { moveIndicator(current); });
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () { moveIndicator(current); });
        }

        update();
    }
})();
