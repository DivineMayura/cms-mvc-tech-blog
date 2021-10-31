
// I don't think I need this.


// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class UserComment extends Model {}

// UserComment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       }
//     },
//     comment_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'comment',
//         key: 'id',
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'blog_comment',
//   }
// );


// module.exports = UserComment;