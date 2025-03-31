"use client";
import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";

type Props = { id: number };

const ArticleDetails = ({ id }: Props) => {
  const { articles } = useSelector((state: RootState) => state.articleState);
  const article = articles.find((_, index) => index === +id);
  if (!article) {
    return <div>Article not found</div>;
  }
  return <div>{JSON.stringify(article)}</div>;
};

export default ArticleDetails;
