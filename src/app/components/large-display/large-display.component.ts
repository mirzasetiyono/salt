import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

import { News } from "../../models/news";

@Component({
    selector: "app-large-display",
    templateUrl: "./large-display.component.html",
    styleUrls: ["./large-display.component.css"]
})
export class LargeDisplayComponent implements OnInit {

    @Input() title: string;
    @Input() description: string;
    @Input() data: Observable<News>;

    articles: {}[];
    /**
     * group X consist 2 object 
     */
    groupX: {}[] = [];
    /**
    * group Y consist 1 object 
    */
    groupY: {}[] = [];
    /**
     * group Z consist 3 object 
     */
    groupZ: {}[] = [];

    constructor() {
    }

    ngOnInit() {
        /**
         * Push articles into array of object for looping in view. 
         * Its probably not a fancy way :)
         */
        this.data.subscribe(news => {
            this.articles = news.articles;
            const lengthY = 2;
            for (let i = 0; i < this.articles.length; i++) {
                if (i < lengthY) {
                    this.groupY.push(this.articles[i]);
                } else if (i > 1 && i < 5) {
                    this.groupZ.push(this.articles[i]);
                } else {
                    this.groupX.push(this.articles[i]);
                }
            }
        })
    }
}
