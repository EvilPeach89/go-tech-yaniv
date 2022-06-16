import { Card } from "react-bootstrap"
import QuestionChoice from "./question-types/Question-choice";
import QuestionText from "./question-types/Question-text";

const QuestionsForm = ({ questions }) => {
    console.log(questions);

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
        <Card className="white-bg">
            {renderQuestions()}
        </Card>
    )
}

export default QuestionsForm;