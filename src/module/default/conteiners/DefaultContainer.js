import axios from "axios";
import React from "react";
import Default from "../components/default/index";
class ConteinerDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countPlusMinus: 1,
      counterMultiDivide: 1,
      data: false,
      words: "",
    };
  }

  increment = (x) => {
    this.setState({
      countPlusMinus: this.state.countPlusMinus + x,
    });
  };
  decrement = (x) => {
    this.setState({
      countPlusMinus: this.state.countPlusMinus - x,
    });
  };

  multiply = (x) => {
    this.setState({
      counterMultiDivide: this.state.counterMultiDivide * x,
    });
  };
  divide = (x) => {
    this.setState({
      counterMultiDivide: this.state.counterMultiDivide / x,
    });
  };
  showBoxMinusPlus = () => {
    this.setState({
      data: true,
    });
  };
  showBoxMultiDivide = () => {
    this.setState({
      data: false,
    });
  };
  getRandomWords = () => {
    axios
      .get(
        "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
      )
      .then((response) => {
        this.setState({
          words: response.data[0].word,
        });
      });
  };
  render() {
    return (
      <div>
        <Default
          increment={this.increment}
          decrement={this.decrement}
          multiply={this.multiply}
          divide={this.divide}
          countPlusMinus={this.state.countPlusMinus}
          counterMultiDivide={this.state.counterMultiDivide}
          showBoxMinusPlus={this.showBoxMinusPlus}
          showBoxMultiDivide={this.showBoxMultiDivide}
          data={this.state.data}
        />
        <button onClick={this.getRandomWords}>Get Words</button>
        <span>{this.state.words}</span>
      </div>
    );
  }
}

export default ConteinerDefault;
