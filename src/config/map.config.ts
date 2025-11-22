import type { ILocation } from "../types";

export const MAP_CONFIG = {
	DEFAULT_ZOOM: 3,
	MAX_ZOOM: 18,
	MIN_ZOOM: 1,
	DEFAULT_CENTER: { lat: 40.7128, lng: -74.006 } as ILocation,
	MAP_ID: "map",
	RESTRICTION: {
		latLngBounds: {
			north: 85,
			south: -85,
			west: -180,
			east: 180,
		},
		strictBounds: true,
	},
} as const;
