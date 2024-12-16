import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICRO_SERVICE_DOMAIN!,
  apiKey: process.env.MICRO_API_KEY!,
});
