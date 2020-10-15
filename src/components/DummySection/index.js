import React from "react"

const DummySection = props => {
  console.log(props)
  return <div id={props.id !== "" ? props.id : null}></div>
}
export default DummySection
