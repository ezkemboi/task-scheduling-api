import { Personnel, Tasks } from "../models";

/**
 * drop any tables existing
 * and create new including any fields added
 */

Personnel.sync({ alter: true, force: true })
  .then(() => {
    console.log("Successfully created personnel tables");
  })
  .catch(err => {
    console.log(`An error occurred while creating tables ${err}`);
  });

Tasks.sync({ alter: true, force: true })
  .then(() => {
    console.log("Successfully created Tasks tables");
  })
  .catch(err => {
    console.log(`An error occurred while creating tables ${err}`);
  });
