import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-email-content',
  templateUrl: './email-content.component.html',
  styleUrls: ['./email-content.component.scss']
})
export class EmailContentComponent implements OnInit {
  messages;
  folders;

  constructor(private messageService: MessagesService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getAllMessages();
    this.folders = [
      ...new Set(this.messages.map((message) => message.folder)),
      'drafts',
      'sent'
    ]
  }

}
