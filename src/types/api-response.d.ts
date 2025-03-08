export type ApiResponse<T = any> = T;
export type ApiResponseList<T> = {
    count: number;
    items: T[];
};

export type ApiPaginatedQuery = {
	skip: number;
	limit: number;
};