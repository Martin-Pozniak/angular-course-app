import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName: string;
  userName: string ='';
  serverCreated: boolean = false;

  servers = ['Testserver', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000 );
  }

  onServerCreated() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.servers.push(this.serverName);
  }

  onUpdateServerName(e: Event) {
    // console.log(e);
    this.serverName = (e.target as HTMLInputElement).value;
  }

  onUserNameChanged() {
    this.userName = '';
  }

  ngOnInit() {
  }

}
