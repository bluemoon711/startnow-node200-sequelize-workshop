'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: { type: DataTypes.STRING, allowNull:false},
    lastName: { type: DataTypes.STRING, allowNull:false},
    email: { type: DataTypes.STRING, allowNull:false}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Author.hasMany(models.Blog, {
          as: 'BlogPosts'
        })
      }
    }
  });
  return Author;
};