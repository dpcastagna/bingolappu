import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Num = (props) => {
  // console.log(props.num)
  const [numberFound, setNumberFound] = useState(false)

  useEffect(() => {
    setNumberFound(false)
  }, [props.num])

  const clicked = () => {
    setNumberFound(!numberFound)
    props.addRemoveNumber(props.num)
  }
  
  return (
    <>
      {
        numberFound
        ? <td key={props.num} onClick={clicked} style={{backgroundColor: 'green', borderRadius: 100}}><s>{props.num}</s></td>
        : <td key={props.num} onClick={clicked}>{props.num}</td>
      }
    </>
  )
}

Num.propTypes = {
  num: PropTypes.number,
  addRemoveNumber: PropTypes.func
}

export default Num