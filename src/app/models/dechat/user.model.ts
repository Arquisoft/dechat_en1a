
export class User {

    url?: string;
    userName?: string;
    profileImage: string;
    status?: string;
    
    constructor(userName:string = "Dummy", url:string = "") {
        this.userName = userName;
        this.url = url;
        this.profileImage = '/assets/images/profile.png';
    }
}