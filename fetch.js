const getQuiz = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple');
    const data = await response.json();
    console.log(data);
    return data;
};