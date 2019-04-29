import {Component, Input, OnInit} from '@angular/core';
import {User} from 'src/app/models/dechat/user.model';

@Component({
    selector: 'app-user-display-slot',
    templateUrl: './user-display-slot.component.html',
    styleUrls: ['./user-display-slot.component.css'],
})
export class UserDisplaySlotComponent implements OnInit {

    // Properties

    /**
     * Model representing a user.
     *
     * @type {User}
     */
    @Input() user: User;

    /**
     * The name of the user.
     *
     * @type {string}
     */
    userName: string;
    // TODO picture

    // Constructor

    /**
     * Creates an UserDisplaySlotComponent
     */
    constructor() {
    }

    ngOnInit(user = this.user) {
        if (user == undefined) {
            user = new User('dummy');
        }
        this.userName = user.nickname;
    }

}
