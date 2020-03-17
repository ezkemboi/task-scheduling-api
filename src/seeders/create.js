import { Tasks } from "../models";
import data from "./tasks";

function seedTasks() {
  Tasks.bulkCreate(data, { returning: true });
}

// invoke seeder function
seedTasks();
