import React, { useState } from 'react'
import "../App.css"

export default function Child(props) {
  const [isDeleteMoused, setDeleteMouseOver] = useState(false);
  const [isStarMoused, setStarMouseOver] = useState(false);
  const handleDeleteMouseOver = () => {
    setDeleteMouseOver(true)
  }
  const handleStarMouseOver = () => {

    (isStarMoused === false) ? (setStarMouseOver(true)) : (setStarMouseOver(false))

  }
  const handleMouseDown = () => {
    setDeleteMouseOver(false);
  }
  console.log("getting array:" + props.usersData[0].first_name);
  const handleOnclickTrash = (event) => {
    event.target.value = props.id;
    console.log("trash id:" + event.target.value);
    
  }
  // console.log("trash id:" + props.id);
  // console.log("child is:" + props.usersData)
  return (
    <>
      <td className="btn"><i className="fa fa-trash" onClick={handleOnclickTrash} onMouseOver={handleDeleteMouseOver} style={{ color: (isDeleteMoused) ? "red" : "" }} onMouseOut={handleMouseDown}></i></td>
      <td className="btn"><i className="fa fa-star" onClick={handleStarMouseOver} style={{ color: (isStarMoused) ? "yellow" : "" }}></i></td>
    </>
  )
}
