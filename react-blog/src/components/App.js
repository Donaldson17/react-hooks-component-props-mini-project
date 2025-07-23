import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  const blogName = "My Personal Blog";
  const aboutText = "This is a blog about my personal experiences and thoughts.";
  const aboutImage = "https://via.placeholder.com/215";

  return (
    <div>
      <Header name={blogName} />
      <About image={aboutImage} about={aboutText} />
      <ArticleList articles={blogData} />
    </div>
  );
}

export default App;