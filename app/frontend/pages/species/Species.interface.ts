export interface  ISpecie {
    name: string;
    classification: string,
	designation: string,
	average_height: string,
	language: string,
}

export interface ISpeciesExtApiResponse {
	data: ISpecie[];
	next: boolean;
}