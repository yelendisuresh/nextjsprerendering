import React from "react";

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1> Showing news for {category}</h1>
      {articles.map(article => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p> {article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const {
    params: { category },
    req,
    res,
    query,
  } = context;
  console.log("category", context.req.headers.cookie);
  console.log("qurry", query);
  res.setHeader("set-Cookie", ["name=Suresh"]);
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  console.log(`Pre-rendering News Articles for category ${category}`);
  return {
    props: {
      articles: data,
      category,
    },
  };
}
