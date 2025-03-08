import { ApiPaginatedQuery } from "@/types/api-response";

export interface IWaitlist {
	id: number;
	email: string;
	discord: string;
	streamsPerWeek: number;
	hasTwitch: boolean;
	hasYoutube: boolean;
	hasFacebook: boolean;
	othersPlatforms: boolean;
	isStreamer: boolean;
	createdAt: string;
	updatedAt: string;
	approvedAt: string;
	user: IWaitlistUser;
}

interface IWaitlistUser {
	id: number;
	displayName: string;
	profileImageUrl: string;
	email: string;
	country: string;
	pointsBalance: number;
	credits: number;
	isStreamerMode: boolean;
}

export interface IWaitlistQuery extends ApiPaginatedQuery {
	search?: string;
}