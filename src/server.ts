import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import {memoriesRoutes} from './routes/memories'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'
import { uploadRoutes } from './routes/upload'
import multipart from '@fastify/multipart'
import Static from '@fastify/static'
import { resolve } from 'path'

const app  = fastify()

app.register(multipart)

app.register(Static , {
  root: resolve(__dirname , '../uploads'),
  prefix: '/uploads'
})

app.register(cors, {
  origin:true, // trocar 

})

app.register(jwt, {
  secret:'spacetime', // trocar 

})

app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)

app.listen({
  port: 3333,
  host:'0.0.0.0',

}).then(() => {
  console.log("server  is running")
})