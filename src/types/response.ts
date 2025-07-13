export type ResponseDto<T> = {
  message: string;
  data: T[];
  is_success: boolean;
  response_code: number;
};

export type BaseResponse = {
  id: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  total:number;
  pageSize: number;
};
