import React from 'react'

import QuestionCard from "../../components/Questioncard"
import data from "../../data/data.json"



export default function Questions() {
    return (
        <div>
            <h1>Questions</h1>
            <QuestionCard data={data} />
        </div>
    )
}