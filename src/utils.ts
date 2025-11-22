import type { ILocation } from "./types";

export const validateLocation = (location: ILocation): boolean => {
	try {
		return (
			Math.abs(location.lat) <= 90 &&
			Math.abs(location.lng) <= 180 &&
			!Number.isNaN(location.lat) &&
			!Number.isNaN(location.lng)
		);
	} catch {
		throw new Error("Invalid location coordinates");
	}
};

export const validateName = (name: string): void => {
	if (!name) {
		throw new Error("Name cannot be empty");
	}
};

export const validateNameLength = (name: string, maxLength: number): void => {
	if (name.length > maxLength) {
		throw new Error(`Name cannot be longer than ${maxLength} characters`);
	}
};

export const validateCatchPhrase = (catchPhrase: string): void => {
	if (!catchPhrase) {
		throw new Error("Catch phrase cannot be empty");
	}
};
