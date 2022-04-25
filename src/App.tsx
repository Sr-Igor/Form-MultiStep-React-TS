import * as C from './App.style'
import { BodyLeft } from './components/BodyLeft'
import { BodyRight } from './components/BodyRight'

function App() {
  return(
    <C.Container>
      <C.Header>
        <C.Title>Cadastro de Desenvolvedor</C.Title>
        <C.Subtitle>Faça seu cadastro e concorra a vagas de emprego</C.Subtitle>
      </C.Header>
      <C.Body>
        <BodyLeft />
        <BodyRight />
      </C.Body>
    </C.Container>
  )
}

export default App
