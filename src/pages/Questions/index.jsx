import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "../../components/Questioncard"

import fetchApi from "../../services/quizapi";
import createQuery from "../../services/quizapi/utility";

import isLoggedIn from "../../utility/userLoginStatus";

export default function Questions() {
    const [searchParams, setSearchParams] = useSearchParams();
    const isUserLoggedInCookie = document.cookie
                            .split('; ')
                            .filter(c => c.includes('isUserLoggedIn'));
    const isUserLoggedIn = isUserLoggedInCookie.length > 0 ? isUserLoggedInCookie[0].split('=')[1] : 'false';
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
    }, [category, limit, difficulty, isUserLoggedIn]);
    if(!isLoggedIn) {
        return <div>
            Please Login first
        </div>
    }
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