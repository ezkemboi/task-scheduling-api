import Sequelize, { Model } from "sequelize";
import sequelize from "../config";

export default class Tasks extends Model { }

Tasks.init({
  customerFirstName: Sequelize.STRING,
  customerLastName: Sequelize.STRING,
  personnelFirstName: Sequelize.STRING,
  personnelLastName: Sequelize.STRING,
  customePhoneNo: Sequelize.STRING,
  agentId: Sequelize.STRING,
  assigned: Sequelize.DATE,
  inProgress: Sequelize.DATE,
  completed: Sequelize.DATE,
  deferred: Sequelize.BOOLEAN,
  status: Sequelize.STRING,
  location: Sequelize.STRING,
  gender: Sequelize.STRING,
  age: Sequelize.NUMBER,
  accessCode: Sequelize.NUMBER,
  splashPage: Sequelize.NUMBER,
  mpesa: Sequelize.NUMBER,
  autoPlay: Sequelize.NUMBER,
  comments: Sequelize.STRING,
  registration: Sequelize.STRING,
},
  {
    sequelize,
    modelName: "Tasks"
  }
)
