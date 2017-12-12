import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from "./Component/PageNotFoundComponent";
import {NgSafeModule} from "@ng-app-framework/safe";
@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports     : [
        NgSafeModule
    ],
    exports     : [
        PageNotFoundComponent
    ]
})
export class NgPageNotFoundModule {

    constructor() {

    }
}

