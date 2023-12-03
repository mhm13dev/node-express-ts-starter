// Should be the first thing to run
import { loadEnv } from "src/config";
loadEnv();
// ====================================
import app from "src/app";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.error("🔥 uncaughtException");
  console.error(err);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.error("🔥 SIGTERM");
  server.close(() => {
    console.log("Process terminated");
  });
});

process.on("SIGINT", () => {
  console.error("🔥 SIGINT");
  server.close(() => {
    console.log("Process interrupted");
  });
});

process.on("unhandledRejection", (err) => {
  console.error("🔥 unhandledRejection");
  console.error(err);
  server.close(() => process.exit(1));
});
