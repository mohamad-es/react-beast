import { z } from "zod";

export const username = z.string().min(2, { message: "Username must be at least 2 characters." });
export const age = z
  .number({ invalid_type_error: "Age is required" })
  .min(18, { message: "You must be at least 18 years old." });
export const city = z.string({ required_error: "Please select a city" });
export const language = z.string({ required_error: "Please select a language." });
