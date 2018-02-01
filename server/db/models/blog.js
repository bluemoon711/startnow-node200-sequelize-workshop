'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    authorId: {type: DataTypes.INTEGER, allowNull: true },
    title: {type: DataTypes.STRING, allowNull: false},
    authorId: {type: DataTypes.INTEGER, allowNull: true},
    article: {type: DataTypes.TEXT, allowNull: false},
    featured: {type: DataTypes.BOOLEAN, allowNull: false},
    published: {type: DataTypes.DATE, allowNull: true}
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Blog;
};