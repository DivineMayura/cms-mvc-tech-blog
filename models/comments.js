const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            // Should I add a validation for this?
            // validate: 
        },
        blog_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: "blog",
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            // allowNull: false
            references: {
                model: "user",
                key: "id"
            }
        },
        commenter: {
            type: DataTypes.STRING,

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;