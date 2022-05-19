import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.scss'],
})
export class EmailDetailComponent implements OnInit {
  messages;

  constructor(
    private messageService: MessagesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parameter) => {
      this.getMessagesDetail(parameter.id);
    });
  }

  getMessagesDetail(id: string) {
    this.messages = this.messageService.getMessageID(id);
  }
}
