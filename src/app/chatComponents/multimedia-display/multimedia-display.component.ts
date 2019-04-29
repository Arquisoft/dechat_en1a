import {Component, Input, OnInit} from '@angular/core';
import {Multimedia} from 'src/app/models/dechat/multimedia.model';

@Component({
    selector: 'app-multimedia-display',
    templateUrl: './multimedia-display.component.html',
    styleUrls: ['./multimedia-display.component.css'],
})
export class MultimediaDisplayComponent implements OnInit {

    // Properties

    /**
     * Model representing a multimedia element.
     *
     * @type {Multimedia}
     */
    @Input() multimedia: Multimedia;

    /**
     * The URL of the multimedia.
     *
     * @type {string}
     */
    multimediaURL: string;

    /**
     * The type of the multimedia. It can be an audio, video or image.
     *
     * @type {string}
     */
    multimediaType: string;

    /**
     * The extension of the multimedia element.
     *
     * @type {string}
     */
    multimediaExten: string;
    ready: boolean;

    // Constructor

    /**
     * Creates a MultimediaDisplayComponent.
     */
    constructor() {
        this.ready = true;
    }

    /**
     * @param multim
     *          The model representing the multimedia element.
     */
    ngOnInit(multim = this.multimedia) {

        // Actual implementation
        this.multimediaURL = multim.url;
        this.multimediaType = multim.type;
        this.multimediaExten = multim.extension;

        // For testing purposes

        // Image
        /*
        this.multimediaURL = 'https://i.redd.it/hf5v5rp6dir11.jpg';
        this.multimediaType = 'image';
        this.multimediaExten = 'jpg';
        */

        // Video
        // this.multimediaURL = 'https://audio-video.gnu.org/video/short--undated--rms--what-is-gnu-plus-linux--480p.webm';
        // this.multimediaType = 'video';
        // this.multimediaExten = 'webm';
    }

}
