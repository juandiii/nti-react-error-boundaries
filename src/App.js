import * as React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    if (number === 5) {
      throw new Error("Lo sentimos. Ha presentado un error. intente de nuevo");
    } else {
      return (
        <>
          <div className="App">
            <h1>NTI Error Boundaries</h1>
          </div>
          <span>Por favor dar click al número.</span>

          <h2
            onClick={() => {
              this.setState((prevState) => ({
                number: Number(prevState.number) + 1,
              }));
            }}
          >
            {number}
          </h2>
        </>
      );
    }
  }
}

export default App;
