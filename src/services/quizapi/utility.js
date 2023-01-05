export default function createQuery(category, difficulty, limit, tags) {
    return `&category=${category}&limit=${limit}&difficulty=${difficulty}&tags=${tags}`;
}