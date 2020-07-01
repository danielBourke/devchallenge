import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingScreen = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader size={150} color={"#123abc"} loading={true} />
    </div>
  );
};

export default LoadingScreen;
