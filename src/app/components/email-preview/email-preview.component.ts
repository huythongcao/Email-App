import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss'],
})
export class EmailPreviewComponent implements OnInit {
  folderInfos;

  constructor(
    private messageService: MessagesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parameter) => {
      this.getFolderInfos(parameter.folder);
    });
  }

  getFolderInfos(folder: string) {
    this.folderInfos = this.messageService.getFolder(folder);
  }
}
