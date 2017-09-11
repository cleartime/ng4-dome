import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import 'rxjs/add/operator/map'; // (2)

interface Member {
}

@Component({
    selector: 'test',
    template: `
    <p>测试页面</p>
    `
})

export class TestComponent {
}