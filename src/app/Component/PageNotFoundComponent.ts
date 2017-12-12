import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
    selector     : '.page-not-found',
    templateUrl  : './page-not-found.html',
    styleUrls    : ['./page-not-found.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PageNotFoundComponent {
    @Input()
    cautionImage = '/assets/images/caution.png';

    @Input()
    headerText = 'Oops ...';

    @Input()
    messageText = 'It appears that the page you tried to access does not exist!';
}
