import { Component, OnInit } from '@angular/core';

import { Service } from "../service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    constructor(private service: Service) { }

    ngOnInit() {
        this.service.getMembers()
          .subscribe(data => {
              console.log(data)
          });
    }

  submit(con, phone){
    let alert = con.trim();
    let mobiles = phone.trim();
    this.service.jiguangPush({alert,mobiles,pushType:1})
          .subscribe(data => {
              console.log(data)
          });
  }
}