import { Personnel } from "../models";

/**
 * drop any tables existing
 * and create new including any fields added
 */
export default Personnel.sync({ alter: true, force: true })
  .then(() => {
    console.log("Successfully created personnel tables");
  })
  .catch(err => {
    console.log(`An error occurred while creating tables ${err}`);
  });
