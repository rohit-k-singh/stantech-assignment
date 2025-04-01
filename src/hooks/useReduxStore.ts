import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const useReduxStore = () => {
  const { articles, searchKey, isLoadingArticles } = useSelector(
    (state: RootState) => state.articleState
  );
  const filteredArticles = useMemo(() => {
    return searchKey.length > 0
      ? articles.filter((article) =>
          article.title.toLowerCase().includes(searchKey.toLowerCase())
        )
      : articles;
  }, [searchKey, articles]);

  const getArticleByIndex = (index: number) => {
    return articles[index] ?? undefined;
  };

  return { isLoadingArticles, articles, filteredArticles, getArticleByIndex };
};

export default useReduxStore;
