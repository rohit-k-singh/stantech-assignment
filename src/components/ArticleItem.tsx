import React from "react";
import { TArticle } from "../utils/types";
import { CalendarIcon, GlobeIcon, HeartIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  id: number;
  article: TArticle;
};
const getSentimentColor = (sentiment: string) => {
  switch (sentiment.toLowerCase()) {
    case "positive":
      return "bg-green-100 text-green-800";
    case "negative":
      return "bg-red-100 text-red-800";
    case "neutral":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  } catch (e) {
    return "Invalid Date";
  }
};

const ArticleItem = ({ article, id }: Props) => {
  const {
    source,
    link,
    title,
    sentiment,
    authors,
    publishDate,
    language,
    confidence,
  } = article;
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-xl">
      <div className="bg-indigo-600 text-white px-3 py-1 text-sm font-medium tracking-wider uppercase">
        {source}
      </div>

      <div className="p-6 h-full flex flex-col">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-200 mb-2">
            {title}
          </h3>
        </a>
        <div className="grid grid-cols-2 mt-auto gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <UsersIcon size={16} className="mr-2" />
            <span className="truncate">{authors || "NA"}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon size={16} className="mr-2" />
            <span>{formatDate(publishDate)}</span>
          </div>
          <div className="flex items-center">
            <GlobeIcon size={16} className="mr-2" />
            <span className="capitalize">{language}</span>
          </div>
          <div className="flex items-center">
            <HeartIcon size={16} className="mr-2" />
            <span>
              <span
                className={`inline-flex capitalize items-center px-2 py-0.5 rounded-full text-xs font-medium ${getSentimentColor(
                  sentiment
                )}`}
              >
                {sentiment} ({(Number(confidence) * 100).toFixed(0)}%)
              </span>
            </span>
          </div>
        </div>

        <div className="mt-4">
          <Link
            href={"/details?id=" + id}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Read Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
