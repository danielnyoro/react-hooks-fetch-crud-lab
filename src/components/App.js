import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    setPage("List"); // Switch to list view after adding
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleUpdateCorrectIndex = (id, correctIndex) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, correctIndex } : question
      )
    );
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          setQuestions={setQuestions}
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateCorrectIndex={handleUpdateCorrectIndex}
        />
      )}
    </main>
  );
}

export default App;
