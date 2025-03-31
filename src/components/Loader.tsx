import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-pulse">
      <Loader2 size={64} className="animate-spin text-indigo-600" />
      <p className="text-xl text-indigo-800">Loading</p>
    </div>
  );
};

export default Loader;
