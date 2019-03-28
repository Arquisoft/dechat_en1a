/* 
 * Represents a multimedia element 
 * that can be contained in a message.
 */
export class Multimedia {

    // Properties
    url : string;
    type : string; // "image", "audio" or "video"
    extension : string;


    // Constructor
    constructor(url : string, type : string, extension : string) { 
        this.url = url;
        this.type = type;
        this.extension = extension;
    }

}
