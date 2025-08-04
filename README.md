# Alex Rivers Portfolio

A modern, component-based portfolio website with smooth page transitions and URL routing.

## Structure

```
├── index.html              # Main HTML file
├── css/                    # Stylesheets
│   ├── main.css           # Base styles and global variables
│   ├── header.css         # Header and navigation styles
│   ├── pages.css          # Page system and individual page styles
│   ├── components.css     # Reusable component styles
│   └── responsive.css     # Mobile and tablet styles
├── js/
│   └── app.js            # Main JavaScript application
├── components/            # Page components
│   ├── home.html         # Home page component
│   ├── projects.html     # Projects page component
│   ├── experience.html   # Experience page component
│   ├── about.html        # About page component
│   └── resume.html       # Resume page component
└── .htaccess             # Apache configuration for routing
```

## Features

- **Component-based architecture**: Each page is a separate HTML component
- **Smooth transitions**: Left/right slide animations between pages
- **URL routing**: Direct links to subpages (e.g., `/projects`, `/about`)
- **Responsive design**: Mobile-friendly layout
- **Dynamic loading**: Components are loaded on-demand
- **Browser history**: Back/forward buttons work correctly

## How it works

1. **Initial load**: The app loads the home page component
2. **Navigation**: Clicking navigation links loads new components dynamically
3. **URL updates**: The URL changes to reflect the current page
4. **Transitions**: Smooth slide animations between pages
5. **History**: Browser back/forward buttons work seamlessly

## Setup

1. Upload all files to your web server
2. Ensure your server supports `.htaccess` files (Apache)
3. For other servers, configure URL rewriting to serve `index.html` for all routes

## Customization

- **Add new pages**: Create a new component in `components/` and add it to the `pageOrder` array in `js/app.js`
- **Modify styles**: Edit the CSS files in the `css/` directory
- **Update content**: Edit the HTML files in the `components/` directory

## Browser Support

- Modern browsers with ES6+ support
- Requires fetch API for component loading
- Graceful fallback for older browsers 