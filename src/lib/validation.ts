import { z } from "zod";

export const email_schema = z
  .string()
  .min(1, {
    message: "ایمیل اجباری است.",
  })
  .email({
    message: "تایپ ایمیل اشتباه است.",
  });

export const password_schema = z
  .string()
  .min(1, {
    message: "رمز عبور اجباری است.",
  })
  .min(8, {
    message: "رمز عبور حداق 8 کاراکتر باشد.",
  });

export const strong_password_schema = z
  .string()
  .min(1, { message: "رمز اجباری است." })
  .min(8, { message: "رمز حداق 8 کاراکتر باشد." })
  .refine((val) => /[a-zA-Z]/.test(val) && /\d/.test(val), {
    message: "رمز حداقل باید شامل یه عدد و حرف باشد",
  });

export const username_schema = z.string().min(2, { message: "نام کاربری بیشتر از 2 کاراکتر باشد" });
export const name_schema = z.string().min(2, { message: "نام کاربری بیشتر از 2 کاراکتر باشد" });
export const fullname_schema = z.string().min(2, { message: "نام کاربری بیشتر از 2 کاراکتر باشد" });
export const mobile_schema = z.number().min(2, { message: "نام کاربری بیشتر از 2 کاراکتر باشد" });
