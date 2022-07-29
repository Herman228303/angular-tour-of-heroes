import { Component, OnInit } from '@angular/core';
import { MessageService } from '../masseges.service'; 
 
@Component({
  selector: 'app-messages',
  templateUrl:'./masseges.component.html',
  styleUrls: ['./masseges.component.css']
})
export class MessagesComponent implements OnInit {
 
  constructor(public messageService: MessageService) {}
 
  ngOnInit() {
  }
 
}