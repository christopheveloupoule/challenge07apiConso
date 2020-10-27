import React, { Component } from "react";
import QuoteCard from "./QuoteCard";
import "./QuoteAPI.css";

const initialQuote = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
};

class QuoteAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: initialQuote.image,
      newQuote: initialQuote.quote,
      character: initialQuote.character,
      favorite: false,
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote = (event) => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(function (response) {
        const quoteFromAPI = response.json();
        return quoteFromAPI;
      })
      .then(
        function (quoteFromAPI) {
          this.setState({
            imageURL: quoteFromAPI[0].image,
            newQuote: quoteFromAPI[0].quote,
            character: quoteFromAPI[0].character,
            favorite: false,
          });
        }.bind(this)
      );
  };

  // on a transféré cette fonction ici depuis QuoteCard.js, et on l'intègre au composant QuoteCard
  // comme prop onClick
  mouseClickFav = (event) => {
    if (this.state.favorite === false) {
      this.setState({ favorite: true });
    } else {
      this.setState({ favorite: false });
    }
  };

  render() {
    return (
      <div className="quote-api">
        <QuoteCard
          image={this.state.imageURL}
          quote={this.state.newQuote}
          character={this.state.character}
          favorite={this.state.favorite}
          onClick={this.mouseClickFav}
        />
        <button onClick={this.getNewQuote}>
          Click me for a new pretty smart quote !
        </button>
      </div>
    );
  }
}

export default QuoteAPI;
