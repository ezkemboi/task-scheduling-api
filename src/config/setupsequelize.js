import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

const sequelize = new Sequelize(dbUrl);

sequelize.authenticate();

export default sequelize;
