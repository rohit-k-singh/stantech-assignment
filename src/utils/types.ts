export type TArticle = {
  link: string;
  source: string;
  title: string;
  summary: string;
  authors: string;
  publishDate: string;
  content: string;
  language: string;
  sentiment: string;
  confidence: string;
};
export type TArticleState = {
  isLoadingArticles: boolean;
  articles: Array<TArticle>;
  searchKey: string;
};
