export interface  IStarship {
    name: string;
    model: string,
	manufacturer: string,
	cost_in_credits: string,
	length: string,
	max_atmosphering_speed: string,
	crew: string,
	passengers: string,
	cargo_capacity: string,
}

export interface IStarshipsExtApiResponse {
	data: IStarship[];
	next: boolean;
}