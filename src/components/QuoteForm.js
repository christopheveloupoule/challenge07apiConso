import React from "react";
import "./QuoteForm.css";

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: "Homer Simpson",
      lengthClass: "length-ok"
    };
    this.handleChange = this.handleChange.bind(this);
    this.leftCharsLength = this.leftCharsLength.bind(this);
  }

  handleChange = event => {
    const input = event.target;
    if (input.value.length <= MAX_LENGTH - 1) {
      this.setState({ character: input.value, lengthClass: "length-ok" });
    } else if (input.value.length === MAX_LENGTH) {
      this.setState({
        character: input.value,
        lengthClass: "length-maximum-reached"
      });
    } else {
      this.setState({
        character: input.value.slice(0, 30),
        lengthClass: "length-maximum-reached"
      });
    }
    console.log("NAME:", input.name, "VALUE:", input.value);
  };

  leftCharsLength = () => {
    return MAX_LENGTH - this.state.character.length;
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <>
        <form className="QuoteForm" onSubmit={this.handleSubmit}>
          <label htmlFor="character">Character:</label>
          <input
            id="name"
            name="character"
            type="text"
            value={this.state.character}
            className={this.state.lengthClass}
            onChange={this.handleChange}
          />
          <p className="remaining-characters">
            {this.leftCharsLength()} remaining characters
          </p>
          <p>
            You typed <span className="bold">{this.state.character}</span>
          </p>
        </form>
      </>
    );
  }
}

export default QuoteForm;
