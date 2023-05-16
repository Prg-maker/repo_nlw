import fastify from 'fastify'

const app = fastify()


app.get('/hello', ()=>{
  return 'hello word'
})

app.listen({
  port: 3333,

}).then(() => {
  console.log("server  is running")
})

