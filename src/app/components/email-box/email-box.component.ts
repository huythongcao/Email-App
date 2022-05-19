import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.scss']
})
export class EmailBoxComponent implements OnInit {
  @Input('data') folders;

  constructor() { }

  ngOnInit(): void {
  }

  // toggleClass() {
  //   this.unclicked = !this.unclicked;
  // }
}
