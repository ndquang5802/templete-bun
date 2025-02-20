import { HTTP_STATUS_CODE } from "../constant";
import { exceptionFilter } from "./exception";

export const transformInterceptor = (
  handler: (req: Request) => Promise<Response>
) => {
  return async (req: Request) => {
    try {
      const response = await handler(req);
      return new Response(
        JSON.stringify({
          sucess: true,
          data: response,
          timestamp: new Date().toISOString(),
        }),
        {
          status: HTTP_STATUS_CODE.OK,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error: any) {
      return exceptionFilter(req, error);
    }
  };
};
