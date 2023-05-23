import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chile-to-parent',
  templateUrl: './chile-to-parent.component.html',
  styleUrls: ['./chile-to-parent.component.scss']
})
export class ChileToParentComponent implements OnInit {
  @Output() public userName = new EventEmitter();
  @Input() public name = "";
  // passData() {
  //   this.userName.emit("vasanth")
  // }
  ngOnInit() {
    setTimeout(() => {
      // this.userName.emit("Finstein")
    }, 3000);
  }
}
