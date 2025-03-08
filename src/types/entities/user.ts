import { ApiPaginatedQuery } from "@/types/api-response";

interface IStreamer {
	pointsBalance: number;
	pointsForWatching: number;
	pointsForQuiz: number;
	pointsForPoll: number;
	pointsForMinigame: number;
	requiredWatchTime: number;
}

interface IStreamChannel {
	id: number;
	channelId: string;
	channelName: string;
	title: string;
	thumbnailUrl: string;
	isLive: boolean;
	platformId: number;
	gameId: number;
	createdAt: string;
	updatedAt: string;
	lastLiveAt: string;
}

export interface IUser {
	id: number;
	displayName: string;
	profileImageUrl: string;
	email: string | null;
	country: string | null;
	pointsBalance: number;
	credits: number;
	isStreamerMode: boolean;
	streamer: IStreamer;
	streamChannels: IStreamChannel[];
}


export interface IUserQuery extends ApiPaginatedQuery {
	search?: string;
	onlyStreamers?: boolean;
}