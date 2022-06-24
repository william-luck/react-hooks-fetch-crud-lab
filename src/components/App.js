import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  const [deletedStatus, setDeleted] = useState(false)

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(src => setQuestions(src))

  }, [deletedStatus]) // NICE JOB ADDING THIS DEPENDENCY SON. WILL RE-RENDER BECAUSE THIS HAS BEEN UPDATED. EMPTY DEPENDENCY ARRAY ONLY RENDERS IT ONCE.
  // This also works when deleting the question, because  

  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleQuestionAdd={setQuestions} questions={questions}/> : <QuestionList questions={questions} setDeleted={setDeleted} deletedStatus={deletedStatus}/>}
    </main>
  );
}

export default App;
