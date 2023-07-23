import React, { Component } from "react";
import "./Newsletter.css";

export default class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false,
    };
  }

  handleChange(value) {
    this.setState({
      email: value,
      error: false,
    });
  }

  handleSubmit() {
    const { email } = this.state;
    const error =
      !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
        email
      );

    if (error) {
      this.setState({ error });
    } else {
      console.log(email);
    }
  }

  render() {
    const { email, error } = this.state;

    return (
      <div className="App">
        <section>
          <h1>Newsletter form with React</h1>
          <p>How to handle single field and a button with pure React.</p>

          <div>
            <input
              className={error ? "error" : ""}
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                this.handleChange(e.target.value);
              }}
            />
            <button
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </section>
      </div>
    );
  }
}
