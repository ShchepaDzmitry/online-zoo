export interface AnimalCamera {
    id: number;
    petId: number;
    text: string;
};

export interface AnimalCameraApiResponse {
    data: AnimalCamera[];
}