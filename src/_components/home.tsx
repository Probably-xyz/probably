import React from "react";
import { FavGrid, MyGrid } from "./startups";
import { ubuntu } from "~/lib/fonts";

export const Favorites = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-2xl"> Favorites </h1>
      <FavGrid />
    </div>
  );
};

export const MyStartups = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h1 style={ubuntu.style} className="text-2xl">
        {" "}
        My startups{" "}
      </h1>
      <MyGrid />
    </div>
  );
};

export const RecentActivity = () => {
  return (
    <div className="flex flex-col space-y-5 pt-24">
      <h1 style={ubuntu.style} className="text-2xl">
        {" "}
        Recent activity{" "}
      </h1>
    </div>
  );
};
