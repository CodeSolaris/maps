import type { ILocation, IUser } from "../types";
import { userGenerator } from "./user-generator";
import { userValidator } from "./user-validator";

export class User implements IUser {
	public readonly name: string;
	public readonly location: ILocation;

	constructor(name?: string, location?: ILocation) {
		this.name = name ?? userGenerator.generateUserName();
		this.location = location ?? userGenerator.generateUserLocation();
		this.validate();
	}
	color?: string | undefined;

	private validate(): void {
		userValidator.validateUserName(this.name);
		userValidator.validateUserLocation(this.location);
	}

	public markerContent(): string {
		return `User Name: ${this.name}`;
	}

	static createRandomUser(): User {
		return new User();
	}

	static createSpecificUser(name: string, location: ILocation): User {
		return new User(name, location);
	}
}
