import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/slices/articleSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setSearch(value));
  };
  const isDetailsPage = useMemo(() => {
    if (!pathName) return false;
    return pathName.includes("details");
  }, [pathName]);
  return (
    <div className="px-10 border-b border-b-black/10 py-5 flex w-full sm:flex-row flex-col justify-between items-center">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold text-indigo-600">Finance News</h1>
      </Link>
      {!isDetailsPage && (
        <div className="border border-indigo-300 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="Search for articles"
            className=" p-2  w-60 outline-none"
            onChange={handleSearch}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
