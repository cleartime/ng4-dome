import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = 'app';
  testInput = {
    a:1,
    b:2
  };


  test(){
    alert(1)
  }
}
