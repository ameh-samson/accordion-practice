import { useState } from "react";

const Question = ({ title, info }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsVisible(!isVisible)}>
          {!isVisible ? "+" : "-"}
        </button>
      </header>
      {isVisible ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
