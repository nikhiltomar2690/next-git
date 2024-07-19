import React from "react";
import Repo from "@/app/components/Repo";
const RepoPage = ({ params }) => {
  return (
    <div className="card">
      <Repo name={params.name} />
    </div>
  );
};

export default RepoPage;
