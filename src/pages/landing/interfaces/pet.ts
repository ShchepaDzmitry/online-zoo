export interface Pet {
    id: number;
    name: string;
    commonName: string;
    description: string;
    img?: string;
  }
  
export interface PetApiResponse {
    data: Pet[];
}