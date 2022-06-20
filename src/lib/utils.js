export const isQuestionLocked = ({ questionStatus, questionId }) => {
    return questionStatus[questionId] === 2;
};

export const isQuestionOn = ({ questionStatus, questionId }) => {
    return questionStatus[questionId] === 1;
};

export const isQuestionOff = ({ questionStatus, questionId }) => {
    return questionStatus[questionId] === 0;
};

export const isOptionalQuestions = (questions, questionStatus) => {
    return !questions.filter(({ questionId }) => {
        return isQuestionLocked({ questionStatus, questionId });
    }).length;
};
