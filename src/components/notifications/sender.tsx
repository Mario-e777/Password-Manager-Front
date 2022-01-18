/* React & Gatsby stuff */
import React from "react";
import FloatingSnackBar from "./snack-bars/floating";

export default class Sender {
  type: string;
  functions: any;

  constructor(type: string, functions: any) {
    this.type = type
    this.functions = functions
  };

  send({ isSuccess, isError }) {
    this.functions.handleNatification(
      <FloatingSnackBar
        key={Math.floor(Math.random() * 999999)}
        duration={3333}
        isSuccess={isSuccess}
        isError={isError}
      />
    );
  };
};
