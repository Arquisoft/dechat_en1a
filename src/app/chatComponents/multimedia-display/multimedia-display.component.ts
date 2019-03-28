import { Component, OnInit, Input } from '@angular/core';
import { Multimedia } from 'src/app/models/dechat/multimedia.model';

@Component({
  selector: 'app-multimedia-display',
  templateUrl: './multimedia-display.component.html',
  styleUrls: ['./multimedia-display.component.css']
})
export class MultimediaDisplayComponent implements OnInit {

  // Properties
  @Input() multimedia : Multimedia;
  multimediaURL : string;
  multimediaType : string;
  multimediaExten : string;
  ready : boolean;

  constructor() { 
    this.ready = true;
  }

  ngOnInit(multim = this.multimedia) {
    this.multimediaURL = multim.url;
    this.multimediaType = multim.type;
    this.multimediaExten = multim.extension;
  }

}
