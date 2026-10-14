import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Button,
} from "./styles";
import { useRef } from "react";

import UserImage from "../assets/users.png";

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  function registerNewUser() {
    console.log (inputName)
  }

  return (

    <Container>
      <TopBackground>
        <img src={UserImage} alt="image-usuarios" />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>

          <div >
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade" ref={inputAge} />
          </div>


        </ContainerInputs>

        <div style={{width: '100%'}}>
          <InputLabel  >
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>


    </Container>
  )
}
export default Home
