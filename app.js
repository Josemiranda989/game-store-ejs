const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3000 

const mainRoutes = require('./routes/main.routes')
const gameRoutes = require('./routes/games.routes')
const userRoutes = require('./routes/user.routes')

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
    console.log(`Server is listening in http://localhost:${port} 😵‍💫`)
});

