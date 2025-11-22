import { COMPANY_CONFIG } from "../config/company.config";
import type { ICompanyValidator, ILocation } from "../types";
import {
	validateCatchPhrase,
	validateLocation,
	validateName,
	validateNameLength,
} from "../utils";

export const companyValidator: ICompanyValidator = {
	validateCompanyName(companyName: string): void {
		validateName(companyName);
		validateNameLength(companyName, COMPANY_CONFIG.MAX_NAME_LENGTH);
	},
	validateCatchPhrase(catchPhrase: string): void {
		validateCatchPhrase(catchPhrase);
	},
	validateCompanyLocation(location: ILocation): void {
		validateLocation(location);
	},
};
