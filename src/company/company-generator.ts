import { faker } from "@faker-js/faker";
import { COMPANY_CONFIG } from "../config/company.config";
import type { ICompanyGenerator, ILocation } from "../types";

export const companyGenerator: ICompanyGenerator = {
	generateCompanyName(): string {
		try {
			return faker.company.name() || COMPANY_CONFIG.DEFAULT_NAME;
		} catch {
			return COMPANY_CONFIG.DEFAULT_NAME;
		}
	},
	generateCatchPhrase(): string {
		try {
			return faker.company.catchPhrase() || COMPANY_CONFIG.DEFAULT_CATCH_PHRASE;
		} catch {
			return COMPANY_CONFIG.DEFAULT_CATCH_PHRASE;
		}
	},
	generateLocation(): ILocation {
		try {
			return {
				lat: +(faker.location.latitude() || 0),
				lng: +(faker.location.longitude() || 0),
			};
		} catch {
			return COMPANY_CONFIG.DEFAULT_LOCATION;
		}
	},
};
