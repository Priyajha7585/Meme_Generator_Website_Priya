import React from "react";
import { Link } from "react-router-dom";
import Meme2 from "./Meme2";
// import MemeResult from "./MemeResult";
import './Style.css';


export default class Meme1 extends React.Component {
  constructor() {
    super();
    this.state = {
      ids: "",
      username: "Priya_Jha",
      password: "Sambhavi7585@",
      topText: "",
      bottomText: "",
      url: "",
      show: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  afterButtonClick = () => {
    const data = {
      template_id: this.state.ids,
      username: this.state.username,
      password: this.state.password,
      text0: this.state.topText,
      text1: this.state.bottomText
      
    };
    this.setState({
        show: true
    });

    fetch("https://api.imgflip.com/caption_image?", {
      method: "POST",
      body: new URLSearchParams(data)
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          url: json.data.url
        });
        console.log(this.state.url);
      });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form>
          <h1>Enter your details:</h1>

          <input
            type="text"
            id="ids"
            name="ids"
            className="input1"
            placeholder="Enter Template_Id"
            onChange={this.handleChange}
          />
          <br /><br />

          <input
            type="text"
            id="topText"
            name="topText"
            className="input1"
            placeholder="Enter topText"
            onChange={this.handleChange}
          />
          <br /><br />

          <input
            type="text"
            id="bottomText"
            name="bottomText"
            className="input1"
            placeholder="Enter bottomText"
            onChange={this.handleChange}
          />
          <br /><br />

          <button type="button" className="btn1" onClick={this.afterButtonClick}>
            Click Now
          </button>
          <img />
        </form>
        <div>{this.state.show && <Meme2 url={this.state.url}/>}</div>
        
      </div>
    );
  }
}