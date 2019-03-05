
export class User {

    uid?: string;
    email?: string;
    userName?: string;
    password?: string;
    status?: string;
    
    constructor(userName:string = "Dummy") {
        this.userName = userName;
    }
}