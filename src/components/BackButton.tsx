import React from "react";
import Router from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackButton = () => {
  return (
    <button onClick={() => Router.back()}>
      <ArrowBackIcon className="arrow" />
    </button>
  );
};
