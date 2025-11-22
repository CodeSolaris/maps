import { Company } from "./company/company";
import { CustomMap } from "./maps/customMaps";
import { User } from "./user/user";

const myMap = new CustomMap("map");
const company = Company.createRandomCompany();
const user = User.createRandomUser();

myMap.addMarker(company);
myMap.addMarker(user);
