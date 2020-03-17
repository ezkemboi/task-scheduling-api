import Sequelize, { Model } from "sequelize";
import sequelize from "../config";

export default class Tasks extends Model {}

Tasks.init(
  {
    customerFirstName: Sequelize.STRING,
    customerLastName: Sequelize.STRING,
    personnelFirstName: Sequelize.STRING,
    personnelLastName: Sequelize.STRING,
    customePhoneNo: Sequelize.STRING,
    agentId: Sequelize.STRING,
    assigned: Sequelize.DATE,
    inProgress: Sequelize.DATE,
    completed: Sequelize.BOOLEAN,
    deferred: Sequelize.DATE,
    status: Sequelize.STRING,
    location: Sequelize.STRING,
    gender: Sequelize.STRING,
    age: Sequelize.INTEGER,
    accessCode: Sequelize.INTEGER,
    splashPage: Sequelize.INTEGER,
    mpesa: Sequelize.INTEGER,
    autoPlay: Sequelize.INTEGER,
    comments: Sequelize.STRING,
    registration: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "Tasks"
  }
);
