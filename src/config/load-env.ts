import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import dotEnvExpand from "dotenv-expand";

/**
 * Load environment variables from .env files
 *
 * Order of precedence
 *
 * ```
 * .env.development.local, .env.production.local, .env.test.local
 * .env.development, .env.production, .env.test
 * .env.local
 * .env
 * ```
 */
export const loadEnv = () => {
  const projectRoot = path.resolve(__dirname, "../..");

  // Load environment specific local env file
  const envSpecificLocalEnvPath = path.join(
    projectRoot,
    `.env.${process.env.NODE_ENV || "development"}.local`
  );
  if (fs.existsSync(envSpecificLocalEnvPath)) {
    dotEnvExpand.expand(
      dotenv.config({
        path: envSpecificLocalEnvPath,
      })
    );
  }

  // Load environment specific env file
  const envSpecificEnvPath = path.join(
    projectRoot,
    `.env.${process.env.NODE_ENV || "development"}`
  );
  if (fs.existsSync(envSpecificEnvPath)) {
    dotEnvExpand.expand(
      dotenv.config({
        path: envSpecificEnvPath,
      })
    );
  }

  // Load base local env file
  const baseLocalEnvPath = path.join(projectRoot, `.env.local`);
  if (baseLocalEnvPath) {
    dotEnvExpand.expand(
      dotenv.config({
        path: baseLocalEnvPath,
      })
    );
  }

  // Load base env file
  const baseEnvPath = path.join(projectRoot, ".env");
  if (fs.existsSync(baseEnvPath)) {
    dotEnvExpand.expand(
      dotenv.config({
        path: baseEnvPath,
      })
    );
  }
};
