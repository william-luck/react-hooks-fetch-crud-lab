import React from "react"
import QuestionItem from "./QuestionItem";

function QuestionList( {questions, setDeleted, deletedStatus}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      
      <ul>{questions.map((question) => { // Displaying each individual question, passing down just each object. Destructured in item component. 
       return <QuestionItem key={question.id} question={question} setDeleted={setDeleted} deletedStatus={deletedStatus} />
      })}
        </ul>
    </section>
  );
}

export default QuestionList;
