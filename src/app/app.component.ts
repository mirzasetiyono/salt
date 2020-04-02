import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { DataService } from "./services/data.service";

import { News } from "./models/news";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit  {

    /**
     * Data for Large Display 
     */
    primaryData: { country: string, news: Observable<News> }[] = [
        { country: "Indonesia", news: this.assignData("id") },
        { country: "America", news: this.assignData("us") },
        { country: "Hongkong", news: this.assignData("hk") },
    ];

    /**
     * Data for Side Display
     */
    secondaryData: { country: string, news: Observable<News> }[] = [
        { country: "Italy", news: this.assignData("it") },
        { country: "Netherland", news: this.assignData("nl") },
    ];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
    }

    /**
     * 
     * @param id Sending parameter to service based on country code
     */
    assignData(id: string) {
        let data: Observable<News>;
        data = this.dataService.getNews(id);
        return data;
    }
}
