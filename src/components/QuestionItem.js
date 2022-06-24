import React from "react";

function QuestionItem({ question, setDeleted, deletedStatus }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => console.log("item deleted"))
      .then(() => setDeleted(!deletedStatus))
  }

  function handleCorrectAnswerChange(event) {
    console.log("I have been changed, unfortunately")

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correctIndex: parseInt(event.target.value),
      })
    })
      .then(response => response.json())
      .then(() => console.log(event.target.value, 'correct index now'))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleCorrectAnswerChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
