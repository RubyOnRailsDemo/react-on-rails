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
      <div key={index}>Hello {item.name}!</div>
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
