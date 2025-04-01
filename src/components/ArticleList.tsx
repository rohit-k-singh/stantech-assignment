import ArticleItem from "./ArticleItem";
import Loader from "./Loader";
import useReduxStore from "../hooks/useReduxStore";

const ArticleList = () => {
  const { isLoadingArticles, filteredArticles } = useReduxStore();

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
      {filteredArticles.map((article, index) => {
        return <ArticleItem id={index} article={article} key={article.link} />;
      })}
    </div>
  );
};

export default ArticleList;
