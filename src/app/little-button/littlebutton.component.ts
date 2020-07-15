import {Component, OnInit, Input} from '@angular/core'

@Component({
    selector: 'little-button',
    template: 'littlebutton.component.html',
    styleUrls: ['./littlebutton.component.css']
})

export class LittleButtonComponent implements OnInit {
    @Input() label: String

    constructor() {}

    ngOnInit() {}
}
