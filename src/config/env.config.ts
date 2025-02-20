const requiredEnvVars = ["BASIC_AUTH_USERNAME", "BASIC_AUTH_PASSWORD"];

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

export const ENV = {
  PORT: process.env.PORT! || "3000",
  BASIC_AUTH_USERNAME: process.env.BASIC_AUTH_USERNAME!,
  BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD!,
};
