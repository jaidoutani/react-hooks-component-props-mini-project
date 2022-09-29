import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  const articleArr = posts.map((data) => {
    //console.log(data)
    return (
      <Article
        key={data.id}
        title={data.title}
        date={data.date}
        preview={data.preview}
      />
    );
  });

  return <main>{articleArr}</main>;
};

export default ArticleList;
