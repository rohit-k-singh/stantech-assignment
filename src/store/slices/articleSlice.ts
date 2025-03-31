import { TArticle, TArticleState } from "@/src/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: TArticleState = {
  isLoadingArticles: false,
  articles: [],
  searchKey: "",
};
export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticle: (state, { payload }: PayloadAction<TArticle[]>) => {
      state.articles = payload;
      state.isLoadingArticles = false;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.searchKey = payload;
    },
    setIsLoadingArticles: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingArticles = payload;
    },
  },
});
export const { setArticle, setIsLoadingArticles, setSearch } =
  articleSlice.actions;

export default articleSlice.reducer;
