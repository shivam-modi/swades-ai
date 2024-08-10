import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

// Define the attributes for the Post model
interface PostAttributes {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public content!: string;
  public authorId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'posts',
  timestamps: true, // Automatically manage createdAt and updatedAt
});

export default Post;
