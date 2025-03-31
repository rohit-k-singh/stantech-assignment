import ArticleDetails from "@/src/components/ArticleDetails";
import React from "react";

type Props = {
  searchParams: any;
};

const DetailsPage = async (props: Props) => {
  const pp = await props.searchParams;
  const indexOfArticle = pp.link;
  return (
    <main>
      <ArticleDetails id={indexOfArticle} />
    </main>
  );
};

export default DetailsPage;
