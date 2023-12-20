import React, { useEffect, useState } from "react";
import NewsBox from "./NewsBox";

const NewsContainer = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=id&category=${category}&pageSize=9&page=${page}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    const res = await fetch(url);
    const data = await res.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchNews();
  }, [category, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="my-5">
      <h1 className="text-center my-5 text-dark">Trending Topic</h1>
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center gap-5">
        {articles.map((article, index) => (
          <NewsBox
            key={index}
            urlToImage={article.urlToImage}
            title={article.title}
            desc={article.description}
            url={article.url}
          />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn btn-dark m-2"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          className="btn btn-dark m-2"
          onClick={() => handlePageChange(page + 1)}
        >
          Next Page
        </button>
      </div>
    </section>
  );
};

export default NewsContainer;
