import { faker } from "@faker-js/faker";
import { USER_CONFIG } from "../config/user.config";
import type { ILocation, IUserGenerator } from "../types";

export const userGenerator: IUserGenerator = {
	generateUserName(): string {
		try {
			return faker.person.fullName() || USER_CONFIG.DEFAULT_NAME;
		} catch {
			return USER_CONFIG.DEFAULT_NAME;
		}
	},

	generateUserLocation(): ILocation {
		try {
			return {
				lat: +(faker.location.latitude() || 0),
				lng: +(faker.location.longitude() || 0),
			};
		} catch {
			return USER_CONFIG.DEFAULT_LOCATION;
		}
	},
};
