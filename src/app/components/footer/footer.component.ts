import { Component, OnInit } from "@angular/core";

import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
    
    /**
     * Twitter icon from fortawesome
     */
    faTwitterSquare: any;

     /**
     * Instagram icon from fortawesome
     */
    faInstagramSquare: any;

     /**
     * Facebook icon from fortawesome
     */
    faFacebookSquare: any;

    upperBreadcrumb: string[];
    bottomBreadcrumb: string[];

    constructor() {
        this.faTwitterSquare = faTwitterSquare;
        this.faInstagramSquare = faInstagramSquare;
        this.faFacebookSquare = faFacebookSquare;
        this.upperBreadcrumb = ["Indonesia", "America", "Hongkong", "Italy", "Netherland"];
        this.bottomBreadcrumb = ["Privacy", "Terms"];
    }

    ngOnInit() {
    }
}
