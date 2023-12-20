import React from "react";

const NewsBox = ({ urlToImage, title, desc, url }) => {
  const imgSrc = urlToImage ? urlToImage : "news.jpg";
  return (
    <div className="card bg-dark text-light shadow ">
      <img src={imgSrc} alt="news" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 45)}</h5>
        <p className="card-text">
          {desc
            ? desc.slice(0, 90) + "..."
            : "Description not available for this news article. Please visit the source for more information."}
        </p>
        <a href={url} target="_blank">
          Read Article
        </a>
      </div>
    </div>
  );
};

export default NewsBox;
