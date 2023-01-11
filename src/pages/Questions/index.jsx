import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "../../components/Questioncard"

import fetchApi from "../../services/quizapi";
import createQuery from "../../services/quizapi/utility";


export default function Questions() {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');
    const limit = searchParams.get('limit') ? searchParams.get('limit') : '10';
    const difficulty = searchParams.get('difficulty') ? searchParams.get('difficulty') : 'easy';
    const [questionsData, setQuestionsData] = useState({isLoading: true});
    useEffect(()=>{
         if (category && category !== 'null') {
            fetchApi(createQuery(category, difficulty, limit))
            .then(res =>res.json())
            .then(data => {
                setQuestionsData({questions:data, isLoading: false});
            })
        }
    }, [category, limit, difficulty]);
    if(questionsData.isLoading) {
        return (<div>
            Loading
        </div>)
    }
    if(questionsData.questions.error) {
        return (<div>{questionsData.questions.error}</div>)
    }
    return (<div>
        {category && category !== 'null' ?
                <div>
                  <QuestionCard data={questionsData.questions} />
                </div> :
            <div>Please check the query</div>}
        </div>
    )
}