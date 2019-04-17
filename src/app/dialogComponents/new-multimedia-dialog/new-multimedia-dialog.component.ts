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
  url: string
  type: string
  multimedia: Multimedia

  constructor(public dialogRef: MatDialogRef<NewMultimediaDialogComponent>) {
    
  }

  ngOnInit() {

  }

  cancel() {
    this.closeDialog();
  }

  private closeDialog() {
    this.dialogRef.close('Dialog closed!');
  }

  addMultimedia() {
    this.multimedia = new Multimedia(this.url, this.type, "");
    // TODO: Now this multimedia needs to be returned to the chat-form
  }

}
