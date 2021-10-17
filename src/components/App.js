import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  const result = function (x) {
    return <Note key={x.key} title={x.title} content={x.content} />;
  };

  return (
    <div>
      <Header />
      <div>{notes.map(result)}</div>
      <Footer />
    </div>
  );
}

export default App;
