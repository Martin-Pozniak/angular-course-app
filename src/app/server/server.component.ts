import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{color:white}
  .white{color:white}`
  ]
})
export class ServerComponent {

  static serverId: number = 0;
  serverStatus: string = 'offline';
  public serverId;
  public showDetails = false;
  public logDetails = [];

  private constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    ServerComponent.serverId ++;
    this.serverId = ServerComponent.serverId;
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onShowDetailsClicked() {
    this.showDetails = !this.showDetails;
    this.logDetails.push("Logged Click @ " + new Date());
  }

  getIndex(logItem) {
    return this.logDetails.indexOf(logItem);
  }

}
