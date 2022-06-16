import React, { useState, useCallback } from 'react'

const QuestionnaireContext = React.createContext({
    getQuestionnaire: (id) => { },
    questionnaire: {},
    status: ""
});

export const QuestionnaireContextProvider = (props) => {
    const [questionnaire, setQuestionnaire] = useState(null);
    const [status, setStatus] = useState("fetching");

    const getQuestionnaireHandler = useCallback(
        async function (id) {
            const response = await fetch(`http://localhost:3001/questionnaires/${id}`);
            if (response.ok) {
                const data = await response.json();
                setQuestionnaire(data);
                setStatus("done");
            };
        },
        [setQuestionnaire]
    );

    const contextValue = {
        getQuestionnaire: getQuestionnaireHandler,
        questionnaire: questionnaire,
        status: status
    };

    return (
        <QuestionnaireContext.Provider value={contextValue}>
            {props.children}
        </QuestionnaireContext.Provider>
    )
}

export default QuestionnaireContext;