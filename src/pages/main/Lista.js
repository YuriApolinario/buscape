import React, { Component } from "react";


import "./styles.css";

export default class Main extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("/data/data.json").then(function(data){
        console.log(data);
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="product-list">
        {this.state.data.map(data => (
          <article key={data.id}>
            <strong>{data.name}</strong>
            
            <a href="#"> Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}
