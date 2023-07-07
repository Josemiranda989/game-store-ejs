const fs = require('fs');
const path = require('path');
const gamesPath = path.join(__dirname, '../data/games.json')

const mainController = {
  
  index: (req, res) => {    
    const games = JSON.parse(fs.readFileSync(gamesPath, "utf8"));
    res.render("index", {
      games
    });
  },
};

module.exports = mainController;