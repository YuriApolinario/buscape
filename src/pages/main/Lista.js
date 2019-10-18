import React, { Component } from "react";
import "./styles.css";

import data from "./data";

class Lista extends Component {
  render() {
    return (
      <div >
        {data.items.map((items, i) => {
          return (
            <div className="product-list">
              <div>
                <article key={items.product.id}>
                  <div className="row">
                    <div className="col-6 col-sm-4">
                      <img src={items.product.images}  alt={items.product.images}/>
                      
                    </div>
                    <div className="col-4 col-sm-8">
                      <strong>{items.product.name}</strong>
                      <hr></hr>
                      <br />
                      <div className="row">
                        <p
                          style={{
                            letterSpacing: "-2px",
                            fontSize: "15px",
                            margin: "14px",
                            padding: "-15px",
                            color: "#2ad60c"
                          }}
                        >
                          {items.product.price.installments}x
                        </p>
                        <p
                          style={{
                            letterSpacing: "-2px",
                            color: "#2ad60c",
                            fontSize: "20px",
                            margin: "11px",
                            padding: "2px"
                          }}
                        >
                          R$
                        </p>
                        <h4
                          style={{
                            letterSpacing: "-2px",
                            margin: "-30px",
                            padding: "26px"
                          }}
                        >
                          {items.product.price.installmentValue}
                        </h4>
                        <div className="col">
                            <a style={{ color:"white" }}> Adicione ao carrinho ></a>
                        </div>
                      </div>

                      <div className="row">
                        <p
                          style={{
                            letterSpacing: "-2px",
                            color: "gray",
                            fontSize: "10px",
                            margin: "2px"
                          }}
                        >
                          ou
                        </p>
                        <p
                          style={{
                            color: "#2ad60c",
                            fontSize: "10px",
                            margin: "2px",
                            padding: "-3px"
                          }}
                        >
                          R$
                        </p>
                        <h6>{items.product.price.value}</h6>
                        <p
                          style={{
                            color: "gray",
                            fontSize: "10px",
                            margin: "2px"
                          }}
                        >
                          à vista
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Lista;
