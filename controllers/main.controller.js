const fs = require('fs');
const path = require('path');

const gamesFilePath = path.join(__dirname, '../data/games.json');
const gamesJSON = fs.readFileSync(gamesFilePath, 'utf8');
const games = JSON.parse(gamesJSON)

const mainController = {
  index: (req, res) => {    
    res.render("index", {
      games
    });
  },
};

module.exports = mainController;