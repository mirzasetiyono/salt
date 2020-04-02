import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {

    @Input() largeBox: boolean = false;
    @Input() type: string;
    @Input() title: string;
    @Input() author: string;
    @Input() source: string;
    @Input() description: string;
    @Input() publishedAt: Date;
    @Input() urlToImage: string;
    @Input() urlToPage: string;

    errorImageUrl: string;

    constructor() {
        this.errorImageUrl = "assets/image/404-image.jpg";
    }

    ngOnInit() {
    }
    
    /**
     * 
     * @param withPrefix boolean either to include error image in a background so if the 1st page is not responding, it will display the background image, which is a 404 image from assets folder.
     */
    getImageUrl(withPrefix: boolean) {
        if (withPrefix === true) {
            return `url(${this.urlToImage}), url(${this.errorImageUrl})`;
        } else {
            return this.urlToImage;
        }
    }

    /**
     * If element doesnt include background error image this will come to play, still has to be set manually using "onError" directives, see view.
     * @param event target url for 404 image
     */
    handleError(event) {
        event.target.src = this.errorImageUrl;
    }

    /**
     * Go to news external news source
     */
    goToPage() {
        window.location.href = this.urlToPage;
    }

}
