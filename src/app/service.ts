import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class Service {
    constructor(private http: Http) { }

    getMembers() {
        return this.http
            .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
            .map(res => res.json())
    }


    transformRequest(obj){
        if (!obj) {
            return '';
        }
        const str = [];
        for (const p of Object.keys(obj)) {
            str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
        }
        return str.join('&');
    }

    jiguangPush(opt){
         const headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');
         return this.http
            .post(`http://service-apigateway.test.fxds:8005/apigw/client/center/jiguang/push`,this.transformRequest(opt),{headers})
            .map(res => res.json())
    }
        
}
