import {  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Button, } from "./styles"

function Home() {

  return (

    <Container>
      <TopBackground>
        <img src="" alt="" />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>
          <div>

            <div>
              <InputLabel>
                Nome <span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do usuário" />
            </div>

            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>
              <Input type="number" placeholder="Idade" />
            </div>

            <div>
              <InputLabel>
                E-mail<span>*</span>
              </InputLabel>
              <Input type="email" placeholder="E-mail" />
            </div>


          </div>
        </ContainerInputs>

        <Button type="submit">Cadastrar Usuário</Button>
      </Form>


    </Container>
  )
}
export default Home
