import type { ILocation } from "../types";

export const USER_CONFIG = {
	MAX_NAME_LENGTH: 50,
	DEFAULT_NAME: "Unknown User",
	DEFAULT_LOCATION: { lat: 0, lng: 0 } as ILocation,
} as const;
