import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>FAQ</h3>
        <section className="info">
          {data.map(({ title, info, id }) => {
            return <SingleQuestion title={title} info={info} key={id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
