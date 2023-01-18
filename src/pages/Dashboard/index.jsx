 import { useState, useEffect} from 'react'

import UserData from "../../components/UserData";
import ResultData from "../../components/ResultData";
import { getUser } from '../../services/firebase';
import userId from '../../utility/getUserIdFromCookie';
export default function Dashboard() {
  const url = window.location.href.split('/')[3];
  const [results, setResults] = useState({ isLoading:true});
  const Id = userId;
  useEffect(() => {
    getUser(Id).then(res =>
      {
        setResults({});
        const arr = [];
        res.forEach(r =>{
          arr.push(r.data());
        })
        setResults({isLoading: false, data: arr})
    });
  }, [Id, url]);
  if(url === 'dashboard'){
    return (
      <>
      <UserData userDetails={results}/>
      </>
    )
  }else if(url === 'dashboard#Result'){
    return (
      <>
      <ResultData data={results} />
      </>
    )
  }
}
