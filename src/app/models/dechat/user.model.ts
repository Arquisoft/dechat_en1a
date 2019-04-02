
export class User {

    url: string; // The url of the user webId
    nickname: string; // nickname in the user's provider
    userName?: string; // User name
    profileImage: string;
    status?: string; // Online, busy, offline

    constructor(url: string) {
        this.url = url;
        this.nickname = url.replace('https://', '').split('.')[0];
        this.profileImage = '/assets/images/profile.png';
    }
}
