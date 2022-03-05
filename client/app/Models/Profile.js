

export class Profile {
    constructor(data) {
        this.id = data._id
        this.image = data.image || "https://thiscatdoesnotexist.com"
        this.name = data.name
        this.description = data.description
    }

    get ProfileTemplate() {
        return `<h4 class="p-2" onclick="app.postsController.drawById('${this.id}')">${this.name}</h4>`
    }

}