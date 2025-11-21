import React from "react";
import type { NextPage } from "next";
import axios from "axios";

const Status: NextPage = () => {

  const statusReq = axios.get("/api/v1/status")
  return (<div>{JSON.stringify(statusReq)}<div/>);
};

export default Status;
