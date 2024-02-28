import "./App.css";
import useReducer from "./useReducer";

function reducer(state, action) {
  if (action.type === "incremented_step") {
    return {
      step: state.step + 1,
    };
  }
  if (action.type === "decrement_step") {
    return {
      step: state.step - 1,
    };
  }
  throw Error("Unknown action.");
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    step: 1,
  });
  // const [state, dispatch] = useReducer(
  //   reducer,
  //   {
  //     step: 1,
  //   },
  //   (arg) => arg
  // ); You can either test this usage of useReducer by providing a stateInitializer as third arg
  return (
    <div className="container">
      <div className="pages">
        <div
          style={{
            borderColor: state.step >= 1 ? "rgb(70, 92, 216)" : "gray",
            color: state.step >= 1 ? "rgb(70, 92, 216)" : "gray",
          }}
        >
          1
        </div>
        <span
          style={{
            backgroundColor: state.step >= 2 ? "rgb(70, 92, 216)" : "gray",
          }}
        ></span>
        <div
          style={{
            borderColor: state.step >= 2 ? "rgb(70, 92, 216)" : "gray",
            color: state.step >= 2 ? "rgb(70, 92, 216)" : "gray",
          }}
        >
          2
        </div>
        <span
          style={{
            backgroundColor: state.step >= 3 ? "rgb(70, 92, 216)" : "gray",
          }}
        ></span>
        <div
          style={{
            borderColor: state.step >= 3 ? "rgb(70, 92, 216)" : "gray",
            color: state.step >= 3 ? "rgb(70, 92, 216)" : "gray",
          }}
        >
          3
        </div>
        <span
          style={{
            backgroundColor: state.step === 4 ? "rgb(70, 92, 216)" : "gray",
          }}
        ></span>
        <div
          style={{
            borderColor: state.step === 4 ? "rgb(70, 92, 216)" : "gray",
            color: state.step === 4 ? "rgb(70, 92, 216)" : "gray",
          }}
        >
          4
        </div>
      </div>
      <div className="btns">
        <button
          data-testid="prevBtn"
          className="prevBtn"
          disabled={state.step === 1}
          onClick={() => {
            dispatch({ type: "decrement_step" });
          }}
          style={{
            backgroundColor: state.step !== 1 ? "rgb(70, 92, 216)" : "gray",
          }}
        >
          Prev
        </button>
        <button
          data-testid="nextBtn"
          disabled={state.step === 4}
          onClick={() => {
            dispatch({ type: "incremented_step" });
          }}
          style={{
            backgroundColor: state.step !== 4 ? "rgb(70, 92, 216)" : "gray",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
