export interface AnimalCamera {
    id: string;
    petId: string;
    text: string;
};

export interface AnimalCameraApiResponse {
    data: AnimalCamera[];
}