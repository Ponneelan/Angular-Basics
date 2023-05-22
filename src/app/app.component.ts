import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewApp';
  name = "Ponneelan ";
  json = {name:this.name,title : this.title};
  arr:string[] = [this.name,this.title];
  aliasName:string = "alias Name";
  messageFromChild(event:string){
    console.warn(event);
    this.name = event;
  }
}
