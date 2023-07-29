import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'
const app: Application = express()
app.use(cors())
//body parser
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.get('/', (req: Request, res: Any) => {
  res.send('Hello World!')
})

export default app
