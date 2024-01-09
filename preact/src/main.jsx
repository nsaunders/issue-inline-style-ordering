import { render } from "preact";
import { useState } from "preact/hooks";

const styles = [
  {},
  { backgroundColor: "lightblue", background: "pink" },
  { background: "pink", backgroundColor: "lightblue" },
];

export function App() {
  const [selection, setSelection] = useState(0);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateAreas: "'d a' 'd b' 'd c'",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          gridArea: "d",
          boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.2)",
          ...styles[selection],
        }}
      />
      {styles.map((style, i) => (
        <label key={i}>
          <input
            type="radio"
            checked={selection === i}
            onChange={(e) => {
              e.target.checked && setSelection(i);
            }}
          />{" "}
          <code>{JSON.stringify(style)}</code>
        </label>
      ))}
    </div>
  );
}

render(<App />, document.getElementById("host"));
