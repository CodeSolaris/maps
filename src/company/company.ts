import type { ICompany, ILocation } from "../types";
import { companyGenerator } from "./company-generator";
import { companyValidator } from "./company-validator";

export class Company implements ICompany {
	public readonly name: string;
	public readonly catchPhrase: string;
	public readonly location: ILocation;

	constructor(name?: string, catchPhrase?: string, location?: ILocation) {
		this.name = name ?? companyGenerator.generateCompanyName();
		this.catchPhrase = catchPhrase ?? companyGenerator.generateCatchPhrase();
		this.location = location ?? companyGenerator.generateCompanyLocation();
		this.validate();
	}
	color?: string | undefined;

	private validate(): void {
		companyValidator.validateCompanyName(this.name);
		companyValidator.validateCatchPhrase(this.catchPhrase);
		companyValidator.validateCompanyLocation(this.location);
	}

	public markerContent(): string {
		return `
			<div>
				<h1>Company Name: ${this.name}</h1>
				<h3>Catchphrase: ${this.catchPhrase}</h3>
			</div>
		`;
	}

	static createRandomCompany(): Company {
		return new Company();
	}

	static createSpecificCompany(
		name: string,
		catchPhrase: string,
		location: ILocation,
	): Company {
		return new Company(name, catchPhrase, location);
	}
}
