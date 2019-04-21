import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Multimedia } from 'src/app/models/dechat/multimedia.model';

@Component({
  selector: 'app-new-multimedia-dialog',
  templateUrl: './new-multimedia-dialog.component.html',
  styleUrls: ['./new-multimedia-dialog.component.css']
})
export class NewMultimediaDialogComponent implements OnInit {

  // Properties

  /**
   * The URL of the multimedia.
   * 
   * @type {string}
   */
  url: string

  /**
   * The type of the multimedia. It can be an audio, video or image.
   * 
   * @type {string}
   */
  type: string

  /**
   * Model representing the multimedia element. 
   * 
   * @type {string}
   */
  multimedia: Multimedia


  // Constructor
  
  /**
   * Creates a NewMultimediaDialogComponent.
   * 
   * @param dialogRef
   *          The reference of the dialog.
   */
  constructor(public dialogRef: MatDialogRef<NewMultimediaDialogComponent>) {
    
  }

  ngOnInit() {

  }

  /**
   * Closes the dialog.
   */
  cancel() {
    this.closeDialog();
  }

  private closeDialog() {
    this.dialogRef.close('Dialog closed!');
  }

  /**
   * Adds the multimedia to the message.
   */
  addMultimedia() {
    this.multimedia = new Multimedia(this.url, this.type, "");
    // TODO: Now this multimedia needs to be returned to the chat-form
  }

}
