import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/slices/articleSlice";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useDispatch();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setSearch(value));
  };
  return (
    <div className="px-10 pt-5 flex w-full sm:flex-row flex-col justify-between items-center">
      <h1 className="text-3xl font-bold text-indigo-600">Finance News</h1>
      <div className="border border-indigo-300 rounded-xl flex items-center">
        <input
          type="text"
          placeholder="Search for articles"
          className=" p-2  w-60 outline-none"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
