import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
 messages:any = [
  {'msg':'Server 1'},
  {'msg':'Server 2'},
  {'msg':'Server 3'},
  {'msg':'Server 4'},
  {'msg':'Server 5'},
  {'msg':'Server 6'}
 ]
}
