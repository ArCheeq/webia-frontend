import { CONFIG } from "@/constants/config";
import { EndpointBuilder } from "@/lib";
import { getStore } from "@/store";

EndpointBuilder.setBaseUrl(CONFIG.servers.api);

EndpointBuilder.setInterceptors((instance) => {
	instance.interceptors.request.use((request) => {
		const auth = getStore().auth;
		if (!auth.authKey || !auth.isAuthorized) return request;

		request.headers['x-api-key'] = auth.authKey;
		return request;
	}, (error) => Promise.reject(error));

    instance.interceptors.response.use((response) => response, (error) => {
		const originalRequest = error.config;

		if (error?.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const auth = getStore().auth;
			try {
				if (!auth.authKey || !auth.isAuthorized) return Promise.reject(error);

				instance.defaults.headers.common['x-api-key'] = auth.authKey;
				return instance(originalRequest);
			} catch (refreshError) {
				auth.setAuthorized(false);
				auth.setAuthKey('');

				return Promise.reject(refreshError);
			}
		}

		if (error?.response?.status === 401 && originalRequest._retry) {
			const auth = getStore().auth;

			auth.setAuthorized(false);
			auth.setAuthKey('');
		}

		return Promise.reject(error);
	});
});