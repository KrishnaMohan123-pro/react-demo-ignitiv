import React from 'react'
import './index.css'
import { Link, useSearchParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
const quizApiParams = require("../../../../utility/quizApiParams.json");

export default function QuickLinks() {
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = searchParams.get('limit') ? searchParams.get('limit') : '10';
    const difficulty = searchParams.get('difficulty') ? searchParams.get('difficulty') : 'easy';
    function gotoTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }
  return (
    <div className='QuickLinksSection'>
      <h3>Quick Links</h3>
        <Grid container spacing={3}>
            {quizApiParams.categories.map((item, index) => {
                return <Grid item xs={12} key={index}><Link to={'/questions?category=' + item + '&limit=' + limit + '&difficulty=' + difficulty} key={index} className="nav-items" onClick={gotoTop}>{item}</Link></Grid>
            })}
        </Grid>
    </div>
  )
}
