"use strict";

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      title: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      game_url: DataTypes.STRING,
    },
    {
      tableName: "games",
    }
  );

  Game.associate = function (models) {
    // Juego tiene un genero
    Game.hasOne(models.Genre, { as: "genre", foreignKey: "game_id" });
  };

  return Game;
};
