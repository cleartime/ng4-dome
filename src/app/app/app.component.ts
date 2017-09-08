import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  testInput = {
    a:1,
    b:2
  };


  test(){
    alert(1)
  }
}
