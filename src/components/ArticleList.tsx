import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ArticleItem from "./ArticleItem";
import Loader from "./Loader";

const ArticleList = () => {
  const { searchKey, isLoadingArticles, articles } = useSelector(
    (state: RootState) => state.articleState
  );
  const filteredArticles = useMemo(() => {
    return searchKey.length > 0
      ? articles.filter((article) =>
          article.title.toLowerCase().includes(searchKey.toLowerCase())
        )
      : articles;
  }, [searchKey, articles]);
  if (isLoadingArticles) {
    return <Loader />;
  }
  if (filteredArticles.length === 0) {
    return (
      <h2 className="text-center text-2xl font-bold text-indigo-600">
        No articles found
      </h2>
    );
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
