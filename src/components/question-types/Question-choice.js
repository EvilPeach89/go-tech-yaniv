import { Card, Form, InputGroup } from "react-bootstrap";

const QuestionChoice = ({question}) => {
    const showRequired = question.required ? <span className="asterisk"> *</span> : null;
    const isFancy = question.type === "fancy-choice";

    return (
        <Card body className="white-bg">
            <Form.Group controlId={question.id}>
                <Form.Label>{question.content}{showRequired}</Form.Label>
                {question.answers.map(option => {
                    return (
                        <Form.Check 
                            required={question.required}
                            type='radio'
                            key={option}
                            name={question.id}
                            label={option}
                            id={option}
                        />
                    )
                })}
                {isFancy ?
                    <InputGroup>
                        <Form.Check 
                                required={question.required}
                                type='radio'
                                name={question.id}
                                label='Other: '
                                id={'other'}
                        />
                        <Form.Control type="text"/>
                    </InputGroup>
                    : 
                    null
                }
            </Form.Group>
        </Card>
    )
}

export default QuestionChoice;