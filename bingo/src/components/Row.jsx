import Num from "./Num"
import PropTypes from "prop-types"

const Row = (props) => {

  // console.log(props)

  return (
    <>
      <tr>
        {
          props.row.map(element => {
            return (
              <Num key={element} num={element} addRemoveNumber={props.addRemoveNumber} />
            )
          })
        }
      </tr>
    </>
  )
}

Row.propTypes = {
  row: PropTypes.array,
  addRemoveNumber: PropTypes.func
}

export default Row