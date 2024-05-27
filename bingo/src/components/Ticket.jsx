import { useEffect, useState } from "react"
import Row from "./Row"
import PropTypes from "prop-types"

const setRowNumbers = (obj, num) => {
  const bNumber = obj.bNums[num]
  const iNumber = obj.iNums[num]
  const nNumber = obj.nNums[num]
  const gNumber = obj.gNums[num]
  const oNumber = obj.oNums[num]
  
  return [bNumber, iNumber, nNumber, gNumber, oNumber]
}

const createRows = (obj) => {
  const rowArray = [
    {id: 0, numbers: setRowNumbers(obj, 0)},
    {id: 1, numbers: setRowNumbers(obj, 1)},
    {id: 2, numbers: setRowNumbers(obj, 2)},
    {id: 3, numbers: setRowNumbers(obj, 3)},
    {id: 4, numbers: setRowNumbers(obj, 4)},
]

  return rowArray
}

const includesAll = (arr, values) => values.every(v => arr.includes(v))

const includesBingo = (nums, obj, rowArray) => {
  let found = false
  // eslint-disable-next-line no-unused-vars
  for(const [key, value] of Object.entries(obj)) { 
    includesAll(nums, value)
    ? found = true
    : null
  }
  
  rowArray.map(arr => {
    const foundRow = includesAll(nums, arr.numbers)
    if(foundRow) {
      found = true
    }
  })
  const topLeftToBottomRight = includesAll(nums, [obj.bNums[0], obj.iNums[1], obj.nNums[2], obj.gNums[3], obj.oNums[4]])
  const topRightToBottomLeft = includesAll(nums, [obj.bNums[4], obj.iNums[3], obj.nNums[2], obj.gNums[1], obj.oNums[0]])
  if(topLeftToBottomRight || topRightToBottomLeft) {
    found = true
  }
  
  return found
}

const Ticket = (props) => {
  const [rows, setRows] = useState(null)
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [bingo, setBingo] = useState(false)

  useEffect(() => {
    if(props.ticket) {
      setRows(createRows(props.ticket))
      setSelectedNumbers([])
    }
  }, [props.ticket])

  useEffect(() => {
    if(rows) {
      setBingo(includesBingo(selectedNumbers, props.ticket, rows))
    }
  }, [selectedNumbers, props.ticket, rows])

  const addRemoveNumber = (num) => {
    selectedNumbers.includes(num)
    ? setSelectedNumbers(selectedNumbers.filter(n => n !== num))
    : setSelectedNumbers(selectedNumbers.concat(num))
  }
  
  if(rows === null) {
    return <div>Loading...</div>
  }
  // console.log(selectedNumbers)
  return (
    <div>
      <table>
        <thead>
          {
            bingo
            ? <tr style={{backgroundColor: 'green'}}>
                <th>B</th><th>I</th><th>N</th><th>G</th><th>O</th>
              </tr>
            : <tr>
                <th>B</th><th>I</th><th>N</th><th>G</th><th>O</th>
              </tr>
          }
        </thead>
        <tbody>
          { 
            rows.map(row => {
              return (
                <Row key={row.id} row={row.numbers} addRemoveNumber={addRemoveNumber} />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.object
}

export default Ticket