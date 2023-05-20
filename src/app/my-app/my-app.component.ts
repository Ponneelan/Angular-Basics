import { Component } from '@angular/core';

interface employee{
  id:number;
  name:string;
  age:number;
}

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss']
})
export class MyAppComponent {
  inputData:string = "default";
  name:string =  'Ponneelan';
  isDisable:boolean = true;
  show:boolean = true;
  arr:string[] = ["a","b","c","d"];
  json:employee[] = [
    {
      id:1,
      name:"Ponneelan",
      age:21
    },
    {
      id:2,
      name:"Muthu Ramana",
      age:21
    },
    {
      id:3,
      name:"Maruthu",
      age:21
    },
    {
      id:4,
      name:"thnagam",
      age:21
    },
    {
      id:5,
      name:"Rahul",
      age:21
    },
    {
      id:6,
      name:"Neji",
      age:21
    }
  ];
   onClick(e:Event) {
    this.name = "Muthu Raman";
    this.isDisable = !this.isDisable;
    console.log(e);
    this.arr.push("e");
  }
  change(e:Event){
    console.log(e);
  }
  tempRef(value:string){
    console.log("Hello "+value);
  }
}
