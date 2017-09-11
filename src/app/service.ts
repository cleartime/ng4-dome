import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Service {
    constructor(private http: Http) { }

    getMembers() {
        return this.http
            .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
            .map(res => res.json())
    }


    jiguangPush(opt){
         return this.http
            .post(`http://service-apigateway.test.fxds:8005/apigw/client/center/jiguang/push`,{
                ...opt
            })
            .map(res => res.json())
    }
        
}
