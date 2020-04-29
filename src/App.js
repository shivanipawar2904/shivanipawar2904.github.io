import React from "react";
import Text from "./Text";

import "./App.css";
import Sound from "react-sound";
import kazdy_rano from "./kazdy_rano.mp3";

class App extends React.Component {
  state = {
    status: "PLAYING"
  };

  
  handleMusic = e => {
    if (this.state.status === "PLAYING") {
      return;
    } else {
      this.setState({
        status: "PAUSED"
      });
    }
  };

  render() {
    return (
      <div className="App">
        {<button onClick={this.handleMusic}>Play/Stop</button>}
        <Text />
        <Sound url={kazdy_rano} playStatus={Sound.status.PLAYING} />
      </div>
    );
  }
}

export default App;
