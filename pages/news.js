import React, { useEffect, useState } from "react";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";

const NewsFeed = () => {
  const [articless, setArticles] = useState(null);

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://newsapi.org/v2/everything?q=nft&apiKey=1721a75ae72543d7b8caf7432a01d5fa",
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const first15Articles = articless?.slice(0, 8);

  const getDate = (date) => {
    return date.slice(0, 10);
  };
  return (
    <>
      <Navbar title="CRYFTS" />
      <div className="news-feed">
        {first15Articles?.map((article, _index) => (
          <div  key={_index}>
            <img
              src={article.urlToImage}
              alt="img"
              style={{ width: "300px", height: "240px" }}
            />
            <div>
              <div>
                <h3>{article.title}</h3>
                <a href={article.url}>
                  <p>{article.description}</p>
                </a>
              </div>
              <div className="name-time">
                <div
                  className="name-logo"
                  style={{
                    // height: "22px",
                    // width: "50px",
                    // borderRadius: "8px",
                    color: "#8d1212",
                    fontWeight: "bold",
                    marginRight: "4px"
                  }}
                >
                  CRYFTS
                </div>
                <span>Published at {getDate(article.publishedAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default NewsFeed;
