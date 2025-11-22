import type { ILocation } from "../types";

export const COMPANY_CONFIG = {
	MAX_NAME_LENGTH: 100,
	DEFAULT_NAME: "Unknown Company",
	DEFAULT_CATCH_PHRASE: "Innovative solutions",
	DEFAULT_LOCATION: { lat: 0, lng: 0 } as ILocation,
} as const;
