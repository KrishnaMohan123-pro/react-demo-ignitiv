import { Typography } from '@material-ui/core';
import { useState } from 'react';
import SidebarOption from '../SidebarOption';

import './index.css'

const quizApiParams = require('../../../utility/quizApiParams.json');
export default function SidebarQuestions() {
    const [showMore, setShowMore] = useState({options1: false, options2: false});
    const { difficulty } = quizApiParams;
    const numberOfQuestion = [];
    for(let i = 10; i < 40; i+=5){
        numberOfQuestion.push(i);
    }
    return <div className="side-bar-contents">
        <div className='options'>
        <Typography variant='h6'>Difficulty</Typography>
        {difficulty.map((item, index) => <SidebarOption key={index} value={item} />)}
        </div>
        <div className='options'>
        <Typography variant='h6'>Number of Questions</Typography>
        {numberOfQuestion.map((item, index) => {
            if(showMore.options2) {
                return <SidebarOption key={index} value={item} />
            } else if (index < 5) {
                return <SidebarOption key={index} value={item} />
            } else {
                return null;
            }
        })}
        </div>
    </div>
}