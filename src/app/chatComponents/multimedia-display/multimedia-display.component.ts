import {Component, Input, OnInit} from '@angular/core';
import {Multimedia} from 'src/app/models/dechat/multimedia.model';

@Component({
    selector: 'app-multimedia-display',
    templateUrl: './multimedia-display.component.html',
    styleUrls: ['./multimedia-display.component.css']
})
export class MultimediaDisplayComponent implements OnInit {

    // Properties
    @Input() multimedia: Multimedia;
    multimediaURL: string;
    multimediaType: string;
    multimediaExten: string;
    ready: boolean;

    constructor() {
        this.ready = true;
    }

    ngOnInit(multim = this.multimedia) {
        /*
        // Actual implementation
        this.multimediaURL = multim.url;
        this.multimediaType = multim.type;
        this.multimediaExten = multim.extension;
        */

        // For testing purposes
        this.multimediaURL = 'https://i.redd.it/hf5v5rp6dir11.jpg';
        this.multimediaType = 'image';
        this.multimediaExten = 'jpg';
    }

}
