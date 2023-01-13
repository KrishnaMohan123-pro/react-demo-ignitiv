// import React from 'react'

import UserData from "../../components/UserData";
import ResultData from "../../components/ResultData";

export default function Dashboard() {
  const url = window.location.href.split('/')[3];

  if(url === 'dashboard'){
    return (
      <>
      <UserData />
      </>
    )
  }else if(url === 'dashboard#Result'){
    return (
      <>
      <ResultData />
      </>
    )
  }
  
}
