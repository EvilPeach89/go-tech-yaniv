import { Card } from "react-bootstrap";

const QuestionnaireHeader = ({ header, subHeader }) => {
    console.log(header);
    console.log(subHeader);
    return (
        <Card className="white-bg card-header">
            <Card.Title>{header}</Card.Title>
            <Card.Subtitle>{subHeader}</Card.Subtitle>
            <Card.Text className="required">* Required</Card.Text>
        </Card>
    )
}

export default QuestionnaireHeader;