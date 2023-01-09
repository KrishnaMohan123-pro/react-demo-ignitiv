import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "../../components/Questioncard"

import fetchApi from "../../services/quizapi";
import createQuery from "../../services/quizapi/utility";

const QuestionsContext = createContext();

export default function Questions() {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category')
    const [questionsData, setQuestionsData] = useState({isLoading: true});
    useEffect(()=>{
        fetchApi(createQuery(category))
        .then(res =>res.json())
        .then(data => {
            setQuestionsData({questions:data, isLoading: false});
        });
    }, [category])
    return (<div>
        {questionsData.isLoading ? <div>Loading</div>: <div>
            <h1>Questions</h1>
            <QuestionCard data={questionsData.questions} />
            </div>}
        </div>
    )
}