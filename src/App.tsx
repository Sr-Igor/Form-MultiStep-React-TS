import * as C from './App.style'
import { BodyLeft } from './components/BodyLeft'
import { BodyRight } from './components/BodyRight'
import { FormProvider } from './contexts/Contexts'

function App() {
  return(
    <FormProvider>
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
    </FormProvider>
  )
}

export default App
