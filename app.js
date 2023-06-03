const express = require("express");
const path = require("path");
const morgan = require("morgan");

const port = process.env.PORT || 3000 

const mainRoutes = require('./routes/main.routes')
const gameRoutes = require('./routes/games.routes')
const userRoutes = require('./routes/user.routes')

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
// use res.render to load up an ejs view file

app.use(mainRoutes)
app.use('/games', gameRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`Server is listening in http://localhost:${port} 😵‍💫`)
});

