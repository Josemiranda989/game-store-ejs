const fs = require('fs');
const path = require('path');
const gamesPath = path.join(__dirname, '../data/games.json')
const db = require('../database/models')

const mainController = {
  
  index: async (req, res) => {
    const games = JSON.parse(fs.readFileSync(gamesPath, "utf8"));
     res.render("index", {
       games
     });
  },
  getGamesAPI: async (req, res) => {    
    const gamesDB = await db.Game.findAll({
      attributes: ['title', 'thumbnail'],
      include: {
        association: 'genre',
        attributes: ['name']
      }
    });
    res.json(gamesDB)
  },
  postGamesAPI: async (req, res) => {
    const response = await db.Game.create(
      {
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        game_url: req.body.game_url,
        genre: {
          name: req.body.name
        }
      }, { include: 'genre' }
    )
    res.json(response)
  }
};

module.exports = mainController;