/* React & Gatsby stuff */
import React from "react";
import FloatingSnackBar from "./snack-bars/floating";

export default class Sender {
  type: string;
  layoutFunctions: any;

  constructor(type: string, layoutFunctions: any) {
    this.type = type
    this.layoutFunctions = layoutFunctions
  };

  send({ isSuccess, isError }) {
    this.layoutFunctions.handleNatification(
      <FloatingSnackBar
        key={Math.floor(Math.random() * 999999)}
        duration={3333}
        isSuccess={isSuccess}
        isError={isError}
      />
    );
  };
};
