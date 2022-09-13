import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }])


  function inputMudou(event) {
    console.log(event.target.value)
    setList([{ id: uuid(), task: event.target.value }])

    console.log(list)
  }

  function cliqueNoBotao() {
    console.log("Cliquei no botão!")
  }

  return (
    <div>
      <input onChange={inputMudou} placeholder="Digite o que tenha para fazer..." />
      <button onClick={cliqueNoBotao}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
