import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  messages: { text: string; sent: boolean; time: string; }[] = []; 
  newMessage: string = ''; 

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); 
      this.messages.push({ text: this.newMessage, sent: true, time: currentTime }); 
      this.newMessage = ''; 
    }
  }
}


