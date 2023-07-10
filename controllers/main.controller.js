const fs = require('fs');
const path = require('path');
const gamesPath = path.join(__dirname, '../data/games.json')
const db = require('../database/models')

const mainController = {
  
  index: async(req, res) => {    
    const games = JSON.parse(fs.readFileSync(gamesPath, "utf8"));
    const gamesDB = await db.Game.findAll({
      attributes: ['title', 'thumbnail'],
      include: {
        association: 'genre',
        attributes: ['name']
      }
    });
    res.json(gamesDB)
   /*  console.log(gamesDB);
    res.render("index", {
      games
    }); */
  },
};

module.exports = mainController;