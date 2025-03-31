"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { setArticle, setIsLoadingArticles } from "../store/slices/articleSlice";
import ArticleList from "../components/ArticleList";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(setIsLoadingArticles(true));
      const res = await axiosInstance.get("articles/extended");
      const data = res.data.articles;
      dispatch(setArticle(data));
    })();
  }, []);
  return (
    <main className="px-10 py-5">
      <ArticleList />
    </main>
  );
};

export default Home;
