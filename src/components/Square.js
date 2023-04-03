import React from "react"

const Square = ({ square, index, handleGamePlay }) => {
  const handelClick = () => {
    handleGamePlay(index)
  }

  return (
    <>
      <div className="square" onClick={handelClick}>
        {square}
      </div>
    </>
  )
}
export default Square
