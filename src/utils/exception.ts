import { HTTP_STATUS_CODE } from "../constant";
import { HttpException } from "../exceptions/http.exception";
import { logError } from "./logger";

export const exceptionFilter = (req: Request, error: Error) => {
  logError("Error processing request:", error);

  const { pathname } = new URL(req.url);

  const statusCode =
    error instanceof HttpException
      ? error.statusCode
      : HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;

  const message =
    error instanceof HttpException
      ? error.getResponse()
      : "Internal Server Error";

  const response = {
    statusCode,
    message,
    timestamp: new Date().toISOString(),
    path: pathname,
  };

  return new Response(JSON.stringify(response), {
    status: response.statusCode,
    headers: { "Content-Type": "application/json" },
  });
};
