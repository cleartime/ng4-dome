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
        // this.service.getMembers()
        //   .subscribe(data => {
        //       console.log(data)
        //   });
    }

  submit(type, con, phone){
    let content = con.trim();
    let mobiles = phone.trim();
    if(!content.length){
      alert(`请输入推送内容`)
      return
    }
    if(type&&!mobiles){
      alert(`请输入手机号码`)
      return
    }
    let opt = {
      content,
      mobiles,
      pushType:1
    }
    if(!type){
      opt.pushType = 0;
      delete opt.mobiles;
    }
    this.service.jiguangPush(opt)
      .subscribe(data => {
          console.log(data)
      });
  }
}