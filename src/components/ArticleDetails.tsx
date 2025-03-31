"use client";
import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Link from "next/link";

type Props = { id: number };

const ArticleDetails = ({ id }: Props) => {
  const { articles } = useSelector((state: RootState) => state.articleState);
  const article = articles.find((_, index) => index === +id);
  if (!article) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-center text-2xl font-bold text-indigo-600">
          Article not found
        </h2>
        <Link
          className="bg-indigo-600 text-white  px-2 text-center py-2 rounded font-bold mt-5"
          href={"/"}
        >
          Go to Home Page
        </Link>
      </div>
    );
  }
  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold font-mono">{article.title}</h1>
      <h2
        dangerouslySetInnerHTML={{ __html: article.summary }}
        className="text-gray-500 mt-5 font-bold font-mono"
      />
      <div className="">
        <p className="font-bold text-gray-800 mt-5 text-xl">Content:</p>
        <p dangerouslySetInnerHTML={{ __html: article.content }}></p>
      </div>
      <Link
        className="bg-indigo-600 text-white block text-center py-2 rounded-xl font-bold mt-5"
        href={article.link}
        target="_blank"
      >
        Read Full Article
      </Link>
    </div>
  );
};

export default ArticleDetails;
