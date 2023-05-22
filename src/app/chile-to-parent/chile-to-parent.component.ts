import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-chile-to-parent',
  templateUrl: './chile-to-parent.component.html',
  styleUrls: ['./chile-to-parent.component.scss']
})
export class ChileToParentComponent implements OnInit {
  @Output() public userName = new EventEmitter();
  passData() {
    this.userName.emit("vasanth")
  }
  ngOnInit() {
    setTimeout(() => {
      this.userName.emit("Finstein")
    }, 3000);
  }
}
