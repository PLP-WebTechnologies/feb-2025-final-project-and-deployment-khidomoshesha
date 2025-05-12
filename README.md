# Final Project and Deployment
# Project: Unlocking the Magic of CSS! Website

## Description

This project is a simple multi-page website designed to showcase information about CSS (Cascading Style Sheets). It includes a homepage, an "Art of Styling" page explaining CSS concepts, a "Creative Services" page, and a functional "Contact Us" page with form validation. The website also features a light/dark theme toggle for user preference.

## Live Demo

This website is hosted on Netlify. You can view the live version here:

**(https://kidocsstech.netlify.app)**

## Features

* **Multi-Page Structure:** Includes Home, About (The Art of Styling), Services, and Contact pages.
* **Consistent Navigation:** Easy-to-use navigation bar present on all pages.
* **CSS Information:** Provides basic information about what CSS is and its importance (About page).
* **Service Listing:** Outlines potential CSS-related services (Services page).
* **Contact Form:**
    * Allows users to input their Name, Email, Subject, and Message.
    * Client-side validation for required fields (Name, Email, Message).
    * Email format validation.
    * User feedback on form submission (success/error messages).
    * Visual feedback for invalid fields (red border).
    * *(Note: The form currently prevents actual submission and only simulates success/failure for demonstration purposes).*
* **Light/Dark Theme Toggle:**
    * Users can switch between light and dark color schemes using a toggle button (☀️/🌙).
    * The chosen theme is saved in `localStorage` and persists across sessions.
* **CSS Animations:** Subtle animations (fade-in, slide-in, zoom-in, bounce) are used on elements, particularly on the Home and About pages, to enhance user experience.
* **Dynamic Content:** The copyright year in the footer is automatically updated using JavaScript.
* **Responsive Design:** Basic responsiveness included, ensuring the navigation stacks vertically on smaller screens (max-width: 768px).

## Technologies Used

* **HTML5:** For structuring the web pages.
* **CSS3:** For styling the website, including:
    * Layout (Flexbox for navigation)
    * Color Schemes (Light and Dark modes)
    * Typography (Google Fonts - Poppins)
    * Animations (`@keyframes`, `animation` properties)
    * Responsive Design (`@media` queries)
* **JavaScript (Vanilla):** For:
    * Theme toggling and persistence (`localStorage`).
    * Contact form validation and feedback.
    * Dynamically updating the footer year.
    * DOM manipulation.

## Project Structure
Okay, great! I have the JavaScript code (script.js) now.

This script handles several key functionalities:

Theme Toggling: Allows users to switch between a light and dark theme using the sun/moon button.
Theme Persistence: Remembers the user's theme choice (dark or light) using localStorage, so the preference persists across page loads and sessions.
Dynamic Footer Year: Automatically updates the copyright year in the footer to the current year.
Contact Form Validation:
Prevents the default form submission.
Validates that the Name, Email, and Message fields are not empty.
Validates the Email field for a correct format using a regular expression.
Provides visual feedback by changing input border colors on error.
Displays specific error messages for email format issues.
Shows success or error messages below the form after submission attempt.
Clears the form upon successful (simulated) submission.
Now that I have all the HTML, CSS, and JavaScript code, I can create the README file for you.

Here is a draft for your README.md:

Markdown

# Project: Unlocking the Magic of CSS! Website

## Description

This project is a simple multi-page website designed to showcase information about CSS (Cascading Style Sheets). It includes a homepage, an "Art of Styling" page explaining CSS concepts, a "Creative Services" page, and a functional "Contact Us" page with form validation. The website also features a light/dark theme toggle for user preference.

## Features

* **Multi-Page Structure:** Includes Home, About (The Art of Styling), Services, and Contact pages.
* **Consistent Navigation:** Easy-to-use navigation bar present on all pages.
* **CSS Information:** Provides basic information about what CSS is and its importance (About page).
* **Service Listing:** Outlines potential CSS-related services (Services page).
* **Contact Form:**
    * Allows users to input their Name, Email, Subject, and Message.
    * Client-side validation for required fields (Name, Email, Message).
    * Email format validation.
    * User feedback on form submission (success/error messages).
    * Visual feedback for invalid fields (red border).
    * *(Note: The form currently prevents actual submission and only simulates success/failure for demonstration purposes).*
* **Light/Dark Theme Toggle:**
    * Users can switch between light and dark color schemes using a toggle button (☀️/🌙).
    * The chosen theme is saved in `localStorage` and persists across sessions.
* **CSS Animations:** Subtle animations (fade-in, slide-in, zoom-in, bounce) are used on elements, particularly on the Home and About pages, to enhance user experience.
* **Dynamic Content:** The copyright year in the footer is automatically updated using JavaScript.
* **Responsive Design:** Basic responsiveness included, ensuring the navigation stacks vertically on smaller screens (max-width: 768px).

## Technologies Used

* **HTML5:** For structuring the web pages.
* **CSS3:** For styling the website, including:
    * Layout (Flexbox for navigation)
    * Color Schemes (Light and Dark modes)
    * Typography (Google Fonts - Poppins)
    * Animations (`@keyframes`, `animation` properties)
    * Responsive Design (`@media` queries)
* **JavaScript (Vanilla):** For:
    * Theme toggling and persistence (`localStorage`).
    * Contact form validation and feedback.
    * Dynamically updating the footer year.
    * DOM manipulation.

## Project Structure

/
├── index.html             # Home page
├── about.html             # About CSS page
├── services.html          # Services page
├── contact.html           # Contact page
├── style.css              # Stylesheet for all pages
├── script.js              # JavaScript for interactivity and validation
└── images/
└── cute_cat.jpg       # Image used on the home page

*(Note: Ensure you have an `images` folder with the `cute_cat.jpg` file or update the path/filename accordingly.)*

## Setup and Usage

1.  **Clone or Download:** Get the project files onto your local machine.
2.  **File Structure:** Ensure the files (`index.html`, `about.html`, `services.html`, `contact.html`, `style.css`, `script.js`) and the `images` folder (containing `cute_cat.jpg`) are in the same directory as shown in the Project Structure.
3.  **Open in Browser:** Open any of the `.html` files (e.g., `index.html`) directly in your web browser (like Chrome, Firefox, Edge).

No special build steps or server is required to view the basic website functionality as it relies only on client-side HTML, CSS, and JavaScript. The contact form validation will work, but it will not actually send an email without backend integration.

## Author

**Mamokete Moshesha**