import Sequelize, { Model } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../config";

export default class Personnel extends Model {}

Personnel.init(
  {
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate: personnel => {
        // encypt password before creation
        const salt = bcrypt.genSaltSync(8);
        // eslint-disable-next-line no-param-reassign
        personnel.password = bcrypt.hashSync(personnel.password, salt);
      }
    },
    // call sequelize instance
    sequelize,
    modelName: "Personnel"
  }
);
