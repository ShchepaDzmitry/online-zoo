export interface IAnimal {
  id: number;
  name: string;
  commonName: string;
  description: string;
  img?: string;
}

export interface IAnimaldApiResponse {
  data: IAnimal[];
}
