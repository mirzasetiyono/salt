import { Component, OnInit } from "@angular/core";

import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {

    /**
     * Male icon from fortawesome
     */
    faMale: any;

    /**
     * Search icon from fortawesome
     */
    faSearch:any;

    firstName: string;

    lastName: string;
    
    breadcrumb: string[];

    constructor() {
        this.faMale = faMale;
        this.faSearch = faSearch;
        this.firstName = 'Mirza'
        this.lastName = 'Setiyono'
        this.breadcrumb = [
            "Indonesia", "America", "Hongkong", "Italy", "Netherland"
        ];
    }

    ngOnInit() {
    }
}
