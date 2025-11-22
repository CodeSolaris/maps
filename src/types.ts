export interface ILocation {
	lat: number;
	lng: number;
}

export interface Mappable {
	location: ILocation;
	markerContent(): string;
	color?: string;
}

export interface ICompany extends Mappable {
	name: string;
	catchPhrase: string;
}

export interface IUser extends Mappable {
	name: string;
}

export interface ICompanyGenerator {
	generateCompanyName(): string;
	generateCatchPhrase(): string;
	generateCompanyLocation(): ILocation;
}
export interface IUserGenerator {
	generateUserName(): string;
	generateUserLocation(): ILocation;
}

export interface ICompanyValidator {
	validateCompanyName(companyName: string): void;
	validateCatchPhrase(catchPhrase: string): void;
	validateCompanyLocation(location: ILocation): void;
}

export interface IUserValidator {
	validateUserName(userName: string): void;
	validateUserLocation(location: ILocation): void;
}
