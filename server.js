import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.get('/usuarios', (req, res) => {
         console.log(req)

    res.send("Olá, rota acessada com sucesso")
})

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json({message:"Usuário craido com sucesso"})
})


app.listen(3000)