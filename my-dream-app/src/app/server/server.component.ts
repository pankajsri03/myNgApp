
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowNewServer = false;
  serverId : number = 10;
  serverStatus : String = 'offline';
  serverCreationStatus = "No server was created";
  servername = '';
  
  getServerStatus(){
    return this.serverStatus;
  }
  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000)
  }

  ngOnInit() {
  }


  OncreateServer(){
      this.serverCreationStatus = "Server was created" + " " + this.servername;
  }


  onUpdateServerName( event : any) {
    this.servername = (<HTMLInputElement>event.target).value;
  }

}
