export class Post {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.profileId = data.profileId
    }

    get PostTemplate() {
        return ``
    }
}