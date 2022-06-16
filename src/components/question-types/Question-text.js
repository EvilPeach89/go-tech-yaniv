import { Card, Form } from "react-bootstrap";

const QuestionText = ({question}) => {
    const showRequired = question.required ? <span className="asterisk"> *</span> : null;

    return (
        <Card body className="white-bg">
            <Form.Group controlId={question.id}>
                <Form.Label>{question.content}{showRequired}</Form.Label>
                <Form.Control required={question.required} type="text" placeholder="Your answer" />
            </Form.Group>
        </Card>
    )
}

export default QuestionText;