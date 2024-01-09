import "@builder.io/qwik/qwikloader.js";
import { component$, render, useSignal } from "@builder.io/qwik";

export const App = component$(() => {
  const styles = [
    {},
    { backgroundColor: "lightblue", background: "pink" },
    { background: "pink", backgroundColor: "lightblue" },
  ];

  const selection = useSignal(0);

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
          ...styles[selection.value],
        }}
      />
      {styles.map((style, i) => (
        <label key={i}>
          <input
            type="radio"
            checked={selection.value === i}
            onChange$={(e) => {
              if (e.target.checked) {
                selection.value = i;
              }
            }}
          />{" "}
          <code>{JSON.stringify(style)}</code>
        </label>
      ))}
    </div>
  );
});

render(document.getElementById("host"), <App />);
