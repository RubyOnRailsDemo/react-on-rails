// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Hello = (props) => (
  <>
    <div>Hello Team!</div>
    {props.data.map((item, index) => (
      <div key={index}>Hello {item.name} Welcome! <br />  
      <div style="width: 80px;height: 42px;  display: flex;">
  <div style="display: flex; flex-direction: row; align-items: center; 
  justify-content: space-evenly; gap: 2px; width: 10px; height: 10px;
   border-radius: 50%; transform: rotate(45deg); overflow: hidden; background-color: rgb(249, 180, 158);">
  <span style="width: 2px; height: 10px; background-color: rgb(242, 105, 62);"></span>
  <span style="width: 2px; height: 10px; background-color: rgb(242, 105, 62);"></span>
  <span style="width: 2px; height: 10px; background-color: rgb(242, 105, 62);"></span></div>
  <div style="width: 60px; font-size: 10px;padding-left: 6px;">No shows /<br> Same-day<br> cancellations</div>
</div>  Visit Again {item.name}. <br /> </div> 
      
    ))}
    <div>Thank you all!</div>
  </>
);

const data = [
  {
    name: "David Abraham",
  },
  {
    name: " John Jack",
  },
  {
    name: "John Abhraham",
  },
  {
    name: "David Rathode",
  },
  {
    name: "David  Malik",
  },
  {
    name: "Jack Julie",
  },
  {
    name: "John Abhraham Kanos",
  },
  {
    name: "David Rathode Mike",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Hello data={data} />,
    document.body.appendChild(document.getElementById("app"))
  );
});
