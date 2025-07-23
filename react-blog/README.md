# React Blog

This project is a personal blog site built using React. It serves as a demonstration of component-based architecture, prop usage, and rendering lists of data in a React application.

## Project Structure

The project consists of the following main components:

- **src/components/App.js**: The main component that imports and renders the Header, About, ArticleList, and blog data. It manages the state and passes necessary props to child components.

- **src/components/Header.js**: A functional component that displays the blog's name in a header element. It receives the blog name as a prop.

- **src/components/About.js**: A component that provides information about the blog. It includes an image and a description, both passed as props. A default placeholder image is used if no image is provided.

- **src/components/ArticleList.js**: This component renders a list of articles. It maps over an array of article data passed as props and renders an Article component for each item.

- **src/components/Article.js**: A component that displays individual article details, including the title, date, and preview text. It also includes a feature to show the estimated reading time with appropriate emojis.

- **src/data/blog.js**: Contains the data for the blog posts, structured as an array of objects, each representing an article with properties like title, date, preview, and reading time.

- **src/index.js**: The entry point of the application that renders the App component into the DOM.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd react-blog
npm install
```

## Usage

To run the application, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.