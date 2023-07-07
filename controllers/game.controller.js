const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const gamesFilePath = path.join(__dirname, "../data/games.json");

const mainController = {
  getCreateForm: (req, res) => {
    res.render("games/create");
  },

  postCreateForm: (req, res) => {
    const games = JSON.parse(fs.readFileSync(gamesFilePath, "utf8"));
    newGame = {
      id: uuidv4(),
      title: req.body.title,
      genre: req.body.genre,
      thumbnail: req.file
        ? `/img/${req.file.filename}`
        : "/img/default-game.jpg",
    };
    games.push(newGame);
    fs.writeFileSync(gamesFilePath, JSON.stringify(games, null, " "));
    res.redirect("/");
  },

  getDetail: (req, res) => {
    const games = JSON.parse(fs.readFileSync(gamesFilePath, "utf8"));
    let game = games.find((game) => game.id == req.params.id);
    if (game) {
      res.render("games/detail", { game });
    } else {
      res.send(`
            <div style="text-align: center; padding-top:30px">
            <h1>Pagina no encontrada</h1>
            <img style="width:40%;" src="/img/default-game.jpg">
            </div>
            `);
    }
  },

  getUpdateForm: (req, res) => {
    const games = JSON.parse(fs.readFileSync(gamesFilePath, "utf8"));
    let game = games.find((game) => game.id == req.params.id);

    if (game) {
      res.render("games/update", { game });
    } else {
      res.send(`
              <div style="text-align: center; padding-top:30px">
              <h1>El producto no existe</h1>
              <img style="width:40%;" src="/img/default-game.jpg">
              </div>
              `);
    }
  },
  
  putUpdateForm: (req, res) => {
    const games = JSON.parse(fs.readFileSync(gamesFilePath, "utf8"));
    const game = games.find((juego) => juego.id == req.params.id);
    if (game) {
      game.title = req.body.title;
      game.thumbnail = req.file
        ? `/img/${req.file.filename}`
        : game.thumbnail;
      game.genre = req.body.genre;
      fs.writeFileSync(gamesFilePath, JSON.stringify(games, null, " "));
      res.redirect("/");
    } else {
      res.send(`
        <div style="text-align: center; padding-top:30px">
        <h1>El producto no existe</h1>
        <img style="width:40%;" src="/img/default-game.jpg">
        </div>
        `);
    }
  },
};

module.exports = mainController;
