
import { useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import QuestionnaireHeader from "./components/Questionnaire-header";
import QuestionsForm from "./components/Questions-form";
import QuestionnaireContext from "./store/questionnaire-context";

const getRandomId = () => Math.floor((Math.random() * 3) + 1);

const App = () => {
  const questionnaireCtx = useContext(QuestionnaireContext);
  const { questionnaire, getQuestionnaire, status } = questionnaireCtx;

  useEffect(() => {
    getQuestionnaire(getRandomId())
  }, [getQuestionnaire]);

  if (status === "fetching") {
    return (
      <main className="wrapper center">
        <Spinner className="center" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </main>
    )
  }

  return (
    <main className="wrapper">
      <QuestionnaireHeader header={questionnaire['header']} subHeader={questionnaire['sub-header']} />
      <QuestionsForm questions={questionnaire.questions} />
    </main>
  );
}

export default App;
