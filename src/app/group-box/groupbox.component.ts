import {Component, OnInit, Input} from '@angular/core'

@Component({
    selector: 'group-box',
    template: 'groupbox.component.html',
    styleUrls: ['./groupbox.component.css']
})

export class GroupBoxComponent implements OnInit {
    @Input() title: String

    constructor() {}

    ngOnInit() {}
}
