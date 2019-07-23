import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  static serverNum: number = 0;
  private serverNumber;
  private constructor() {
    ServerComponent.serverNum ++;
    this.serverNumber = ServerComponent.serverNum;
  }

}
