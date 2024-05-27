import { useState, useEffect } from "react"

interface NumProps {
  num: number;
  addRemoveNumber: (num: number) => void;
}

const Num = (props: NumProps) => {
  const [numberFound, setNumberFound] = useState<boolean>(false)

  useEffect(() => {
    setNumberFound(false)
  }, [props.num])
  
  const clicked = () => {
    setNumberFound(!numberFound)
    props.addRemoveNumber(props.num)
  }
  
  if(!props.num) {
    return <td>?</td>
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

export default Num