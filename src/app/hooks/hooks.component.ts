import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked,OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked, OnDestroy, DoCheck{
  constructor(){
    console.log('1 inside constructor')
  }
  ngOnInit(): void {
    //do oad data --. call an service to api call
    console.log('2 inside ngOninit');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    //catch the input out changes
    console.log('3 inside onChanges');
  }
  ngAfterViewInit(): void {
    //sent the data to the parent
    console.log('4 inside ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('5 inside ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('6 inside ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('7 inside ngAfterContentChecked');
  }
  ngOnDestroy(): void {
    //destroy the component
    console.log('8 inside Ondestroy');
  }
  ngDoCheck(): void {
    console.log('9 inside onDoCheck');
  }
}
