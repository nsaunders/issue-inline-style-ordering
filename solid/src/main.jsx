import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const styles = [
  {},
  { "background-color": "lightblue", background: "pink" },
  { background: "pink", "background-color": "lightblue" },
];

function App() {
  const [selection, setSelection] = createSignal(0);
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "auto 1fr",
        "grid-template-areas": "'d a' 'd b' 'd c'",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          "grid-area": "d",
          "box-shadow": "inset 0 0 0 1px rgba(0, 0, 0, 0.2)",
          ...styles[selection()],
        }}
      />
      <For each={styles}>
        {(style, i) => (
          <label>
            <input
              type="radio"
              checked={selection() === i() ? "checked" : ""}
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  setSelection(i);
                }
              }}
            />
            <code>{JSON.stringify(style)}</code>
          </label>
        )}
      </For>
    </div>
  );
}

const dispose = render(App, document.getElementById("host"));

if (import.meta.hot) {
  import.meta.hot.dispose(dispose);
}
