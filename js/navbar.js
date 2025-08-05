
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {

  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {

    document.querySelector('.nav').classList.add('show');
  } else {

    document.querySelector('.nav').classList.remove('show');
  }


  prevScrollPos = currentScrollPos;
});

