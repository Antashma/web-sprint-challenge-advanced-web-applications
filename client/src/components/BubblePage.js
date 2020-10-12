import React, { useState, useEffect } from "react";
import { getColorData } from "../api/getColorData";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColorData()
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => console.error('Could not fetch color data: ', err))
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
