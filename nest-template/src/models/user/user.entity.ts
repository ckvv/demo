import {
  Sequelize,
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from '@sequelize/core';
import { Attribute } from '@sequelize/core/decorators-legacy';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Attribute(DataTypes.STRING)
  declare username: string | null;

  @Attribute(DataTypes.DATE)
  declare birthday: Date | null;
}