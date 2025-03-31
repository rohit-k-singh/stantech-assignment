import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ArticleItem from "./ArticleItem";

const ArticleList = () => {
  const { articles, isLoadingArticles } = useSelector(
    (state: RootState) => state.articleState
  );
  if (isLoadingArticles) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {articles
        ?.filter((article) => article.content.length !== 0)
        .map((article) => {
          return <ArticleItem article={article} key={article.link} />;
        })}
    </div>
  );
};

export default ArticleList;
