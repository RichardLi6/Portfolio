import { links } from "./data";

export type SectionName = (typeof links)[number]["name"]; // this is a union type that represents the name of each section in the links array.
// number is a utility type that represents all the numbers in the array.