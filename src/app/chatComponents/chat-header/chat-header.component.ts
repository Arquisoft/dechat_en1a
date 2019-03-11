import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

//Atributes
  boolean ready;


  constructor() {
  	ready = true;
   }

  ngOnInit() {
  }

}
