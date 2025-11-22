export interface ILocation {
	lat: number;
	lng: number;
}

export interface ICompany {
	companyName: string;
	catchPhrase: string;
	location: ILocation;
}

export interface IUser {
	name: string;
	location: ILocation;
}

export interface ICompanyGenerator {
	generateCompanyName(): string;
	generateCatchPhrase(): string;
	generateLocation(): ILocation;
}

export interface ICompanyValidator {
	validateCompanyName(companyName: string): void;
	validateCatchPhrase(catchPhrase: string): void;
	validateCompanyLocation(location: ILocation): void;
}
