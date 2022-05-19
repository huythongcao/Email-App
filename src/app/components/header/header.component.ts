import { Component, OnInit } from '@angular/core';
import { Message, MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  messages;
  users = new Set();
  
  constructor(private messageService: MessagesService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getAllMessages();
    this.users = this.messageService.allUsers;
  }

}
