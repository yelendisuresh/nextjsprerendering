import React from "react";

const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <h1>List Of news Articles</h1>
      {articles.map(article => {
        return (
          <div key={article.id}>
            {" "}
            <h2>
              {article.id} {article.title} {article.category}
            </h2>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  console.log("Pre-rendering NewsArticleList");
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
