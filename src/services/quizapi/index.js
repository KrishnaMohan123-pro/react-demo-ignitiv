import config from './config';

const QuizApi_Base_Url = 'https://quizapi.io/api/v1/questions'
// query to be passed as & separated params
export default async function fetchApi(
    query,
    payload = {},
    method = 'get',
    headers = {}
) {
    let path = `${QuizApi_Base_Url}?apiKey=${config.quizApi.apiKey}${query}`;
    const headerObject = {
        'Content-Type': 'application-json',
        ...headers
    }
    const request = {
        headers: headerObject,
        method: method.toLocaleLowerCase()
    }
    try {
        return fetch(path, request)
    } catch (e) {
        const stringError = e && e.toString && e.toString();
        const type =
            stringError === "TypeError: Network request failed" ?
            "networkError" :
            "unknown";
        const error = {
            text: stringError,
            type,
        };
        throw error;
    }
}