import type { ICompany, ILocation } from "../types";
import { companyGenerator } from "./company-generator";
import { companyValidator } from "./company-validator";

export class Company implements ICompany {
	public readonly companyName: string;
	public readonly catchPhrase: string;
	public readonly location: ILocation;

	constructor(
		companyName?: string,
		catchPhrase?: string,
		location?: ILocation,
	) {
		this.companyName = companyName ?? companyGenerator.generateCompanyName();
		this.catchPhrase = catchPhrase ?? companyGenerator.generateCatchPhrase();
		this.location = location ?? companyGenerator.generateLocation();
		this.validate();
	}

	private validate(): void {
		companyValidator.validateCompanyName(this.companyName);
		companyValidator.validateCatchPhrase(this.catchPhrase);
		companyValidator.validateCompanyLocation(this.location);
	}

	static createRandom(): Company {
		return new Company();
	}

	static createSpecific(
		companyName: string,
		catchPhrase: string,
		location: ILocation,
	): Company {
		return new Company(companyName, catchPhrase, location);
	}
}
