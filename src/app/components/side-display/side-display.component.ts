import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { News } from "../../models/news";

@Component({
    selector: "app-side-display",
    templateUrl: "./side-display.component.html",
    styleUrls: ["./side-display.component.css"]
})
export class SideDisplayComponent implements OnInit, OnDestroy {
    /**
     * Side display title
     */
    @Input() title: string;

    /**
     * Side display data
     */
    @Input() data: Observable<News>;

    articles: {}[];

    subscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        this.subscription = this.data.subscribe(news => {
            this.articles = news.articles;
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
