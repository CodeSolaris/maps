import { USER_CONFIG } from "../config/user.config";
import type { ILocation, IUserValidator } from "../types";
import { validateLocation, validateName, validateNameLength } from "../utils";

export const userValidator: IUserValidator = {
	validateUserName(userName: string): void {
		validateName(userName);
		validateNameLength(userName, USER_CONFIG.MAX_NAME_LENGTH);
	},

	validateUserLocation(location: ILocation): void {
		validateLocation(location);
	},
};
