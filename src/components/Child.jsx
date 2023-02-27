import React, { useState } from 'react'
import "../App.css"

export default function Child({rowId,index,sendRemoveList,sendStarList}) {
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
  
  return (
    <>
      <td className="btn"><i className="fa fa-trash" onClick={()=> {sendRemoveList(rowId,index)  }} 
      onMouseOver={handleDeleteMouseOver} style={{ color: (isDeleteMoused) ? "red" : "" }} onMouseOut={handleMouseDown}></i></td>
      <td className="btn"><i className="fa fa-star" onClick={() => {sendStarList(rowId,index);handleStarMouseOver()}} 
      style={{ color: (isStarMoused) ? "yellow" : "" }}></i></td>
    </>
  )
}
