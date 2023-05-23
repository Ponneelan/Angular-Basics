import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
export interface obj {
  id: string,
  name: string
}
@Component({
  selector: 'app-chile-to-parent',
  templateUrl: './chile-to-parent.component.html',
  styleUrls: ['./chile-to-parent.component.scss']
})

export class ChileToParentComponent implements OnInit {
  public testObj: Test;
  constructor() {
    this.testObj = new Test("Ponneelan", "SID1");
  }
  @Output() public Emiter = new EventEmitter();
  @Input() public name = "";
  public obj: obj[] = [{ id: "1", name: "Ponneelan" }, { id: "2", name: "Vasanth" }]
  public array: string[] = ['Ponneelan', 'Vasanth', 'Rahul'];
  passData() {
    this.Emiter.emit(this.obj);
  }
  ngOnInit() {
    // console.log("from Child",this.name);
    // setTimeout(() => {
      // this.userName.emit("Finstein")
      // this.Emiter.emit(this.obj);
      // this.Emiter.emit(this.array);
      // this.Emiter.emit(1);
      // this.Emiter.emit('Ponneelan');
      // this.Emiter.emit(this.testObj);
    // }, 3000);
  }
}

export class Test {
  constructor(public Name: string, public Id: string) {
  }
  public print() {
    console.log('Print From Test');
  }
}
