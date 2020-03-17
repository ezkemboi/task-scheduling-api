import { Personnel, Tasks } from "../models";

Personnel.drop()
  .then(() => {
    console.log("Successfully dropped tables");
  })
  .catch(err => {
    console.log(`An error occurred while dropping tables ${err}`);
  });

Tasks.drop()
  .then(() => {
    console.log("Successfully dropped tables");
  })
  .catch(err => {
    console.log(`An error occurred while dropping tables ${err}`);
  });
