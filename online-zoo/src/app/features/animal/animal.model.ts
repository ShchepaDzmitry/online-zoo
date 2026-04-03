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

export interface ICurrentAnimal {
  id: number;
  commonName: string;
  scientificName: string;
  type: string;
  size: string;
  diet: string;
  habitat: string;
  range: string;
  latitude: string;
  longitude: string;
  description: string;
  detailedDescription: string;
  imgPath?: string;
  videoId?: string;
}

export interface ICurrentAnimalApiResponse {
  data: ICurrentAnimal;
}
