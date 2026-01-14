import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";

dbConnection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
