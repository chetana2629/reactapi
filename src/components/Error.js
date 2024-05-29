import React from "react";
import Image from "./Image";
import ErrorBoundary from "../ErrorBoundary";

export default function Error() {
  return (
    <div className="container">
      <h1>Error Boundry Example</h1>
      <div className="row">
        <div className="col-4">
          <Image p1="https://t4.ftcdn.net/jpg/07/08/47/75/240_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg"></Image>
        </div>
        <div className="col-4">
          <Image p1="https://t3.ftcdn.net/jpg/06/02/27/90/240_F_602279087_o70ZoNTtfHa6josc9nS8VnBtPTdPf2y2.jpg"></Image>
        </div>
        <div className="col-4">
            <ErrorBoundary>
            <Image p1=""></Image>
            </ErrorBoundary>
         
        </div>
      </div>
    </div>
  );
}
