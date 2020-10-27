import React from "react";
import QuoteCard from "./components/QuoteCard";

import axios from "axios";

const simpsonsQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: simpsonsQuote
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }

  getSimpsons() {
    // Send the request
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        this.setState({
          simpsons: data[0]
        });
      });
  }

  render() {
    return (
      <div>
        
        <QuoteCard simpsons={this.state.simpsons} />
        <button type="button" onClick={this.getSimpsons}>
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
