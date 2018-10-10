import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-new',
  templateUrl: './servers-new.component.html',
  styleUrls: ['./servers-new.component.css']
})
export class ServersNewComponent implements OnInit {
  allowAddServer = false;
  serverName = '';
  serverCreationStatus = 'No Server Was Created';
  constructor() {
    setTimeout(() => { this.allowAddServer = true; }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was Created';
  }
  ngOnInit() {
  }
  onUpdateServerName(event: Event) {
    console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
