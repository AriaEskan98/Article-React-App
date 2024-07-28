# React Vite Application

This is a React application built with Vite. The application includes a home page with a button to navigate to the main app page, which displays an article and comments.

## Features

- Home page with a navigation button to the main app.
- Main app displays an article and comments.
- Fetch and display more comments on button click.
- Styled with Tailwind CSS.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Steps

1. **Clone the repository:**

    ```bash
    git clone  https://github.com/AriaEskan98/Article-React-App.git
    cd my-vite-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```
this should run the server and give you a link like this: http://localhost:5173

## Usage

1. Open your browser and navigate to the 'link/app.html' for example => `http://localhost:5173/app.html`, which will display the main application.


## Project Structure

- `app.html`: The main application page.
- `src/`: Contains the React components and main entry files.
  - `main.jsx`: Entry file for the home page.
  - `mainApp.jsx`: Entry file for the main application page.
  - `components/`: Directory containing the React components.
    - `Application.jsx`: Main application component which has the two components of Article and Comments.

- `index.css`: Tailwind CSS configuration and global styles.

## Components

### Application Component

This component renders the article and comments. It includes a button to fetch and display additional comments.

### Article Component

This component renders the article details including the author, date, and content.

### Comments Component

This component renders the list of comments. It sorts comments from newest to oldest.

## Tailwind CSS

Tailwind CSS is used for styling the application. Ensure the Tailwind configuration includes the paths to your HTML and JSX files.
