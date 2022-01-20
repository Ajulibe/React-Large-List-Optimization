type Friends = {
	id: number;
	name: string;
};

type value = string | number | boolean;
type finalValue = value | string[] | Friends[];

export interface Item {
	[key: string]: finalValue;
}

export type Data = Item[];
export type valueArray = Array<string | number | boolean | any>;
export type InputTypes = HTMLInputElement | HTMLTextAreaElement;
