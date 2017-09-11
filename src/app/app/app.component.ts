import { Component, OnInit } from '@angular/core';

import { MemberService } from "../service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

    constructor(private memberService: MemberService) { }

    ngOnInit() {
        this.memberService.getMembers()
          .subscribe(data => {
              console.log(data)
          });
    }

  submit(con, phone){
    console.log(con,phone)
  }
}