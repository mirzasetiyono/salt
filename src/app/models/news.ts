/**
 * Model for news API
 */
export class News {
    
    status: string;
    totalResults: number;
    articles: {
        source: {id: any, name: 'string'},
        author : string,
        title: string,
        description: string,
        url: string,
        publishedAt: Date,
        content: any
    }[];
}