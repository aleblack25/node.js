import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Button,
} from "./styles"

import UserImage from './assets/users.png'

function Home() {

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
            <Input type="text" placeholder="Nome do usuário" />
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade" />
          </div>


        </ContainerInputs>

        <div style={{width: '100%'}}>
          <InputLabel  >
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail" />
        </div>

        <Button type="submit">Cadastrar Usuário</Button>
      </Form>


    </Container>
  )
}
export default Home
