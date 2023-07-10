"use strict";

module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
    {
      name: DataTypes.STRING,
    },
    {
      tableName: "genre",
    }
  );

  Genre.associate = function (models) {
    Genre.belongsTo(models.Game, { as: "genre", foreignKey: "game_id" });
  };

  return Genre;
};
