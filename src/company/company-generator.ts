import { faker } from "@faker-js/faker";
import { COMPANY_CONFIG } from "../config/company.config";
import type { ICompanyGenerator, ILocation } from "../types";
import { generateLocation } from "../utils";

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
	generateCompanyLocation(): ILocation {
		try {
			return generateLocation();
		} catch {
			return COMPANY_CONFIG.DEFAULT_LOCATION;
		}
	},
};
