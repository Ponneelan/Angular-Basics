import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChileToParentComponent } from '../app/chile-to-parent/chile-to-parent.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'NewApp';
  name = "Ponneelan ";
  json = { name: this.name, title: this.title };
  arr: string[] = [this.name, this.title];
  aliasName: string = "alias Name";

  name1 = "Ponneelan One"
  name2 = "Ponneelan Two"


  @ViewChild(ChileToParentComponent) viewChiled = new ChileToParentComponent();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.name = this.viewChiled.name;
    }, 3000);
  }
  
  messageFromChild(event: string) {
    console.warn(event);
    this.name = event;
  }
}
