import express from 'express'
import cors from 'cors'
import path from 'path'

import routes from './routes'

const app = express()

// app.use(cors({
//     origin: 'www'
// }))
app.use(cors())
app.use(express.json())
app.use(routes)

// rota para arquivos estaticos (publicos, acessando a rota "http://localhost:3333/uploads/NOME_DO_ARQUIVO")
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333)