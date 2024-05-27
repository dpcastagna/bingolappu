import Num from "./Num"

interface RowProps {
  row: number[];
  addRemoveNumber: (num: number) => void;
}

const Row = (props: RowProps) => {

  if(!props.row) {
    return <tr><td>?</td></tr>
  }

  return (
    <tr>
      {
        props.row.map((element, index) => {
          // console.log(element, index)
          return (
            <Num key={index} num={element} addRemoveNumber={props.addRemoveNumber} />
          )}
        )
      }
    </tr>
  )
}

export default Row