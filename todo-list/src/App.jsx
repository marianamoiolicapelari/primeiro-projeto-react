import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Container, ToDoList, Input, Button, ListItem } from './styles.js'

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueNoBotao() {
    setList([...list, { id: uuid(), task: inputTask }])

  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueNoBotao}>Adicionar</Button>

        <ul>
          {list.map(item => (
            <ListItem>
              <FcCheckmark />
              <li key={item.id}>{item.task}</li>
              <FcEmptyTrash />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
