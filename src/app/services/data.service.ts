import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";

import { News } from "../models/news";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    news: Observable<News>;

    constructor(private http: HttpClient) { 
    }

    /**
     * 
     * @param id Sending parameter to news API based on country code
     */
    getNews(id){
        return this.http.get<News>(`http://newsapi.org/v2/top-headlines?country=${id}&pageSize=6&apiKey=3c4af76ca9224a72853a8a8e72259725`);
    }
}
