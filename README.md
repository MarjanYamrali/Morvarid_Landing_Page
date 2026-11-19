# MORVARID Landing Page

A complete bilingual luxury e-commerce landing page for the fictional fashion and beauty boutique **MORVARID**.

Brand tagline: **Beauty in Every Detail.**

This is a frontend development assignment built with semantic HTML5, CSS3, and vanilla JavaScript. There is no backend, database, or build step. The project is ready for GitHub Pages.

## Project description

MORVARID is presented as a modern luxury online boutique for:

- Women's fashion
- Bags
- Shoes
- Jewelry and accessories
- Beauty and cosmetics

The site supports English (LTR) and Persian/Farsi (RTL), light and dark themes, a working cart, wishlist, product filters, a quick-view modal, and client-side form validation.

## Technologies used

- HTML5
- CSS3 (Flexbox, Grid, custom properties, media queries)
- Vanilla JavaScript
- Google Fonts: Cormorant Garamond, Jost, Vazirmatn

No React, Vue, Angular, Bootstrap, Tailwind, or jQuery.

## Main features

- Responsive header with logo, navigation, language switcher, theme toggle, cart, and mobile hamburger menu
- Editorial hero section with call-to-action buttons
- Category cards for Fashion, Bags, Shoes, Jewelry, and Beauty
- 12 featured products with images, names, prices, category labels, Add to Cart, Quick View, and Wishlist
- Working category filters
- Product Quick View modal
- Live shopping cart drawer with quantity controls and item count
- Dark / light mode saved in `localStorage`
- English / Persian language switcher without page reload, also saved in `localStorage`
- RTL layout, `lang="fa"`, and Vazirmatn for Persian
- About, Why Choose Us, sample testimonials, newsletter, contact, and footer
- Newsletter and contact form validation with success and error messages
- Frontend-only demonstration notes so it is clear that no emails or payments are processed

## Folder structure

```text
morvarid-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md
```

## Running locally

1. Download or clone this folder.
2. Open `index.html` in a modern browser.

For a local server (recommended):

```bash
cd morvarid-landing-page
python -m http.server 8080
```

Then visit `http://localhost:8080`.

If Python is not installed, you can also use:

```bash
npx serve .
```

## GitHub Pages deployment

1. Create a GitHub repository.
2. Upload the contents of `morvarid-landing-page/` (or the folder itself).
3. In the repository, open **Settings → Pages**.
4. Set the source to the `main` branch.
5. If `index.html` is in the repository root, Pages will serve it automatically.
6. If the files stay inside `morvarid-landing-page/`, set the Pages root to that folder or move the files to the repository root.

The project uses relative paths (`css/style.css`, `js/script.js`, `images/...`) so it works on GitHub Pages without a build process.

## How to test

1. Resize the browser to check mobile, tablet, and desktop layouts.
2. Open the hamburger menu on a small screen.
3. Switch EN / FA and confirm every label, button, form, and product text changes. Persian should become RTL.
4. Refresh the page: the selected language should remain.
5. Toggle dark / light mode and refresh: the theme should remain.
6. Use category cards and filter pills to filter products.
7. Open Quick View, add a product to cart, and check the counter.
8. Toggle wishlist hearts.
9. Submit the newsletter and contact forms empty, with an invalid email, and with valid data.

## Notes

- MORVARID is a fictional brand created for this assignment.
- Testimonials are clearly marked as sample / demo content.
- Newsletter and contact forms only validate in the browser. They do not send email.
- Product images are stored locally in the `images` folder.
