import { EndpointBuilder } from '@/lib';
import { ApiResponse, ApiResponseList } from '@/types/api-response';
import { ISettings } from '@/types/entities/settings';
import { IUser, IUserQuery } from '@/types/entities/user';
import { IWaitlist, IWaitlistQuery } from '@/types/entities/waitlist';

export const endpoints = {
    GetSettings: () => EndpointBuilder.fromConfig<ApiResponse<ISettings>>({
        method: 'GET',
        route: '/admin/settings',
    }),
    ChangeSettings: (data: Partial<ISettings>) => EndpointBuilder.fromConfig<ApiResponse<{ result: true }>>({
		method: 'PATCH',
		route: '/admin/settings',
		body: data,
	}),
    GetUsers: (query?: IUserQuery) => EndpointBuilder.fromConfig<ApiResponseList<IUser>>({
		method: 'GET',
		route: '/admin/users',
		params: {
			skip: 0,
			limit: 10,
			...query,
		},
	}),
    EditStreamer: (streamerId: number, data: Pick<IUser['streamer'], 'pointsBalance'>) => EndpointBuilder.fromConfig<ApiResponse<{ result: true }>>({
		method: 'PATCH',
		route: `/admin/users/${streamerId}/streamer`,
		body: data,
	}),
    GetWaitlists: (query?: IWaitlistQuery) => EndpointBuilder.fromConfig<ApiResponseList<IWaitlist>>({
		method: 'GET',
		route: '/admin/waitlists',
		params: {
			skip: 0,
			limit: 10,
			...query,
		},
	}),
    ApproveWaitlist: (waitlistId: number) => EndpointBuilder.fromConfig<ApiResponse<{ result: true }>>({
		method: 'POST',
		route: `/admin/waitlists/${waitlistId}/approve`,
	}),
} as const;
