import { useEffect, useState } from 'react'
import './App.css'
import Ticket from './components/Ticket';

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array.slice(0, 5)
}

const createTicket = (num) => {
  const ticketObject = {
    bNums: shuffle(Array.from({ length: num }, (_, i) => 1 + i)),
    iNums: shuffle(Array.from({ length: num }, (_, i) => num + 1 + i)),
    nNums: shuffle(Array.from({ length: num }, (_, i) => num * 2 + 1 + i)),
    gNums: shuffle(Array.from({ length: num }, (_, i) => num * 3 + 1 + i)),
    oNums: shuffle(Array.from({ length: num }, (_, i) => num * 4 + 1 + i)),
  }

  return ticketObject
}

const App = () => {
  const [amount, setAmount] = useState(15)
  const [ticket, setTicket] = useState(null)
  const [timeCreated, setTimeCreated] = useState(new Date().toString())

  useEffect(() => {
    setTicket(createTicket(amount))
    setTimeCreated(new Date().toString())
  }, [amount])
  
  if(!ticket) {
    return <>Loading...</>
  }

  return (
    <>
      <div>
        <button onClick={() => {setAmount(15)}} >15</button>
        <button onClick={() => {setAmount(20)}} >20</button>
        <button onClick={() => {setAmount(25)}} >25</button>
      </div>
      <Ticket ticket={ticket} />
      Luotu: {timeCreated}
    </>
  )
}

export default App
