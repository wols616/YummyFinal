import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import usuarioRoutes from './routes/usuarioRoutes.js'
import recetaRoutes from './routes/recetaRoutes.js'
import ingredienteRoutes from './routes/ingredienteRoutes.js'
import pasoRoutes from './routes/PasoRoutes.js'
import recetaIngredienteRoutes from './routes/recetaIngredienteRoutes.js'
import favoritosRoutes from './routes/favoritosRoutes.js'
import recetaUsuarioRoutes from './routes/recetaUsuariosRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/usuarios', usuarioRoutes)
app.use('/recetas', recetaRoutes)
app.use('/ingredientes', ingredienteRoutes)
app.use('/pasos', pasoRoutes)
app.use('/recetaIngredientes', recetaIngredienteRoutes)
app.use('/favoritos', favoritosRoutes)
app.use('/recetaUsuarios', recetaUsuarioRoutes)
//Conexión a la base de datos
try {
    await db.authenticate()
    console.log('Conexión exitosa a la base de datos')
} catch (error) {
    console.log(`Conexión NO exitosa a la base de datos: ${error}`)
}


// app.get('/', (req, res)=>{
//     res.send('Hola mundo')
// })

app.listen(8000, ()=> {
    console.log('Server corriendo en http://localhost:8000/')
})