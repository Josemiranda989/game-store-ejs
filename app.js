const express = require("express");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { sequelize } = require("./database/models/index")

const app = express();

const port = process.env.PORT || 3000 

/* routes */
const mainRoutes = require('./routes/main.routes')
const gameRoutes = require('./routes/games.routes')
const userRoutes = require('./routes/user.routes');
const { Sequelize } = require("sequelize");

/* setup forms */
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));

/* Ejs engine */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Static folder */
app.use(express.static(path.join(__dirname, "public")));
/* Middlewares */
app.use(morgan("dev"));

/* Routes */
app.use(mainRoutes)
app.use('/games', gameRoutes)
app.use('/users', userRoutes)

/* listen */
app.listen(port, () => {
    console.log(`Servidor activo en http://localhost:${port} 😵‍💫`)

    sequelize.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión con la DB");
    })
});

