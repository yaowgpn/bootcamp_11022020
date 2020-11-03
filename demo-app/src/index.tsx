import React from "react";
import { render } from "react-dom";

import { Color } from "./models/colors";

import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";

const colorList: Color[] = [
  { id: 1, name: "red", hexcode: "FF0000" },
  { id: 2, name: "blue", hexcode: "0000FF" },
  { id: 3, name: "white", hexcode: "FFFFFF" },
  { id: 4, name: "green", hexcode: "00FF00" },
  { id: 5, name: "brown", hexcode: "A52A2A" },
  { id: 6, name: "aqua", hexcode: "00FFFF" },
];

render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList, headerText: 'Color Tool }) */}
    <ColorTool colors={colorList} headerText="Color Tool" />
    <ColorTool colors={colorList} headerText="Color Tool" />
    <CarTool />
  </>,
  // "#root" - CSS selector - used to find an element with an id of 'root'
  document.querySelector("#root")
);
