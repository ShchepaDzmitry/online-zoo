export interface Feedback {
    id: number;
    city: string;
    month: string;
    year: string;
    text: string;
    name: string;
}

export interface FeedBackApiResponse {
    data: Feedback[];
}