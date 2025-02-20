import { HTTP_STATUS_CODE } from "../constant";
import { HttpException } from "../exceptions/http.exception";
import { appRoutes } from "./app.route";

export function appRouter(req: Request) {
  const { pathname } = new URL(req.url);

  if (pathname === "/") {
    return "Template Bun";
  }

  if (pathname.startsWith("/api/app")) {
    return appRoutes(req);
  }

  throw new HttpException("Path not found", HTTP_STATUS_CODE.NOT_FOUND);
}
