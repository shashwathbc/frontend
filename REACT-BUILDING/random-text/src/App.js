import "./App.css";
import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0,amount))
}

  return (
    <section className="section-center">
      <h1>Pring Random Text </h1>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" min={0} max={10} value={count} onChange={(e) => (setCount(e.target.value))} />
        <button>Generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item , index) => {
            return (
              <p key={index}>{item}</p>
            )
          })
        }
      </article>
    </section>
  );
}

export default App;
