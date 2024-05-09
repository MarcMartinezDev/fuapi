import app from "./server/app.js";
import { connect } from "./server/database.js";
import "dotenv/config.js";

connect();
app.listen(process.env.PORT,  () => {
  console.log("Server on port", process.env.PORT);
});
