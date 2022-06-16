import { Button, Form, Stack } from "react-bootstrap";
import QuestionChoice from "./question-types/Question-choice";
import QuestionText from "./question-types/Question-text";

const QuestionsForm = ({ questions }) => {
    const submitHandler = (event) => {
        event.preventDefault();
        event.stopPropogation();
        /*
            react-bootstrap catches all the required inputs.
            for more specific validation I can check all the inputs from the event passed and apply custom changes
            as specified here: https://react-bootstrap.netlify.app/forms/validation/
         */
    }

    const renderQuestions = () => {
        return questions.map((question) => {
            if (question.type === "text") {
                return (
                    <QuestionText key={question.id} question={question} />
                )
            }
            if (question.type === "choice" || question.type === "fancy-choice") {
                return (
                    <QuestionChoice key={question.id} question={question} />
                )
            }
            return null;
        })
    }

    return (
        <Form onSubmit={submitHandler}>
            <Stack gap={3}>
                {renderQuestions()}
            </Stack>
            <Button as="input" type="submit" className="submit-btn" value="Submit"/>
        </Form>
    )
};

export default QuestionsForm;