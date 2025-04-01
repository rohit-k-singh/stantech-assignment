import ArticleDetails from "@/src/screens/ArticleDetails";
import React from "react";

type Props = {
  searchParams: any;
};

const DetailsPage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const indexOfArticle = searchParams.id;
  return (
    <main>
      <ArticleDetails id={indexOfArticle} />
    </main>
  );
};

export default DetailsPage;
