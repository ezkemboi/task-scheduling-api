import { Personnel } from "../models";

export default Personnel.drop()
  .then(() => {
    console.log("Successfully dropped tables");
  })
  .catch(err => {
    console.log(`An error occurred while dropping tables ${err}`);
  });
