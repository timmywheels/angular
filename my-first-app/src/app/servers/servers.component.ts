import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created...';
  serverName = '';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} created...`;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    console.log('event:', event);
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
