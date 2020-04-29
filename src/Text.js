import React, { Component } from "react";
import fox from "./images/fox.gif";
import rainbow from "./images/rainbow.gif";
import knight from "./images/knight.gif";
import pizza from "./images/pizza.gif";
import heart from "./images/heart.gif";

import h1 from "./images/h1.jpg";
import a1 from "./images/a1.jpg";
import p1 from "./images/p1.jpg";
import p2 from "./images/p2.jpg";
import y1 from "./images/y1.jpg";

import b from "./images/b.jpg";
import i from "./images/i.jpg";
import r from "./images/r.jpg";
import t from "./images/t.jpg";
import h2 from "./images/h2.jpg";
import d from "./images/d.jpg";
import a2 from "./images/a2.jpg";
import y2 from "./images/y2.jpg";



export class Text extends Component {
  render() {
    return (
      <div className="container">
        <ul className="circles">
          <li className="heart" />
          <li className="heart" />
          <li className="heart" />
          <li className="heart" />
          <li className="heart" />
          <li className="heart" />
          <li className="heart" />
          <li className="heart" />
          <li className="heart" />
          <li className="heart" />
        </ul>
        <div className="mainText">
         
           
            <img src={fox} />
            <img style={{ marginLeft: "5px" }} src={heart} />
         
           
         
            
            <img className="gif" src={knight} />
         
            <img className="gif" style={{ paddingRight: "5px" }} src={pizza} />
            <img style={{ marginLeft: "5px" }} src={heart} />
          
            {" "}
            <img src={rainbow} />
         
          <p>Happy birthday to dearest Shivani/Vahini!</p>
          <h4 style={{ margin: 0, marginBottom: "100px" }}>
          
            
           
            <img className="gif" src={h1}  width={180} height={320} mode='fit'/>
            <img className="gif" src={a1}  width={180} height={320} mode='fit'/>
            <img className="gif" src={p1}  width={180} height={320} mode='fit'/>
            <img className="gif" src={p2}  width={180} height={320} mode='fit'/>
            <img className="gif" src={y1}  width={180} height={320} mode='fit'/>
            <img className="gif" src={b}  width={180} height={320} mode='fit'/>
            <img className="gif" src={i}  width={180} height={320} mode='fit'/>
            <img className="gif" src={r}  width={180} height={320} mode='fit'/>
            <img className="gif" src={t}  width={180} height={320} mode='fit'/>
            <img className="gif" src={h2}  width={180} height={320} mode='fit'/>
            <img className="gif" src={d}  width={200} height={320} mode='fit'/>
            <img className="gif" src={a2}  width={200} height={320} mode='fit'/>
            <img className="gif" src={y2}  width={200} height={320} mode='fit'/>
          </h4>
        </div>
      </div>
    );
  }
}

export default Text;
