import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { DataService } from "./services/data.service";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LargeDisplayComponent } from "./components/large-display/large-display.component";
import { SideDisplayComponent } from "./components/side-display/side-display.component";
import { CardComponent } from "./components/card/card.component"
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LargeDisplayComponent,
        SideDisplayComponent,
        CardComponent,
        BreadcrumbComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [ DataService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
