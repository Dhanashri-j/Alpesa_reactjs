# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

--

## Styling, Flags and Project Notes (Alpesa customizations)

- **Single source of truth for styles:** Shared layout, typography, buttons, header/footer, and flag utility classes live in `src/styles/common.css`. Page-specific CSS should only contain overrides or unique component styles.
- **Removed empty per-page CSS files:** `About.css`, `Services.css`, `Testimonials.css`, and `LegalServices.css` were consolidated into `common.css` and deleted to avoid duplication.
- **How to add page-specific styles:** Create a small CSS file (for example `MyPage.css`) and import it in the page component only when needed. Prefer class names scoped to the page (e.g., `.mypage-hero`) to avoid global collisions.

### Flags

- Flag images are stored in `public/flags/` as SVGs. The code will attempt to load `<key>.svg` and fall back to `<key>.png` if the SVG is missing or fails to load. Use short filenames (e.g., `ie.svg` for Ireland) — `StudyDestinations` already maps logical country keys to filenames when necessary.

### Project structure suggestions (small, SEO-friendly React app)

- Keep routing simple and use hash-based navigation (current approach) or a lightweight router like `react-router` for cleaner URLs and SEO-friendly server-side rendering or prerendering if required.
- Folder layout recommendation:
	- `src/components/` — reusable UI components (Header, Footer, Modal, Flag, Card)
	- `src/pages/` — page-level components (Home, Services, Contact, StudyDestinations)
	- `src/styles/` — `common.css` and any page/component-specific CSS
	- `public/flags/` — SVG/PNG flags

### SEO and performance tips

- Add meta tags (title, description, og:*) per page. For SPAs, consider prerendering or SSR if SEO is critical.
- Keep images optimized (SVG preferred for flags). Use compressed PNGs for fallback only when necessary.
- Move sensitive keys (EmailJS service/template IDs) to environment variables before public deployment.

If you'd like, I can now (A) delete any remaining small per-page CSS files you confirm, (B) migrate `Header.css` and `Footer.css` fully into `common.css`, or (C) refactor folder structure (`src/components` / `src/pages`) and move files accordingly. Which should I do next?
