import { Typography } from '@material-ui/core';
import { useState } from 'react';
import SidebarOption from '../SidebarOption';
import { useSearchParams } from 'react-router-dom';

import './index.css'

const quizApiParams = require('../../../utility/quizApiParams.json');
export default function SidebarQuestions() {
    const [searchParams, setSearchParams] = useSearchParams();
    const difficultyParam = searchParams.get('difficulty') ? searchParams.get('difficulty') : 'easy';
    const limitParam = searchParams.get('limit') ? searchParams.get('limit') : '10';
    const [showMore, setShowMore] = useState({options1: false, options2: false});
    const { difficulty } = quizApiParams;
    const numberOfQuestion = [];
    for(let i = 10; i < 20; i+=2){
        numberOfQuestion.push(i.toString());
    }
    return <div className="side-bar-contents">
        <div className='options'>
        <Typography variant='h6'>Difficulty</Typography>
        {difficulty.map((item, index) => <SidebarOption key={index} value={item} selected={item.toLowerCase() === difficultyParam.toLowerCase()} type='difficulty' />)}
        </div>
        <div className='options'>
        <Typography variant='h6'>Number of Questions</Typography>
        {numberOfQuestion.map((item, index) => {
            if(showMore.options2) {
                return <SidebarOption key={index} value={item} selected={item.toLowerCase() === limitParam.toLowerCase()} type='limit' />
            } else if (index < 5) {
                return <SidebarOption key={index} value={item} selected={item.toLowerCase() === limitParam.toLowerCase()} type='limit' />
            } else {
                return null;
            }
        })}
        </div>
    </div>
}