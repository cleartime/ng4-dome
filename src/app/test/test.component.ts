import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import 'rxjs/add/operator/map'; // (2)

interface Member {
    id: string;
    login: string;
    avatar_url: string;
}

@Component({
    selector: 'test',
    template: `
    <h3>Angular Orgs Members</h3>
    <ul *ngIf="members">
      <li *ngFor="let member of members;">
        <p>
          <img [src]="member.avatar_url" width="48" height="48"/>
          ID：<span>{{member.id}}</span>
          Name: <span>{{member.login}}</span>
        </p>
      </li>
    </ul>
    `
})
export class TestComponent implements OnInit {
  members: Member[];

  constructor(private http: Http) { } // (3)

  ngOnInit() {
    this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`) // (4)
        .map(res => res.json()) // (5)
        .subscribe(data => {
           if (data) this.members = data; // (6)
        });
    }
}