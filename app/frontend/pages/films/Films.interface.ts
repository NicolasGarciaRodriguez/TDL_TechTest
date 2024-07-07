export interface  IFilm {
    title: string;
    director: string,
	producer: string,
	release_date: string,
}

export interface IFilmsExtApiResponse {
	data: IFilm[];
	next: boolean;
}