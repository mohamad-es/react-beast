import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createFormData(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>,
  form?: FormData,
  parentKey?: string
): FormData {
  const formData = form || new FormData();

  Object.entries(data).forEach(([key, value]) => {
    const fullKey = parentKey ? `${parentKey}[${key}]` : key;

    if (value instanceof File || value instanceof Blob) {
      formData.append(fullKey, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          createFormData(item, formData, `${fullKey}[${index}]`);
        } else {
          formData.append(`${fullKey}[${index}]`, item);
        }
      });
    } else if (value !== null && typeof value === "object") {
      createFormData(value, formData, fullKey);
    } else if (value !== undefined && value !== null) {
      formData.append(fullKey, String(value));
    }
  });

  return formData;
}
