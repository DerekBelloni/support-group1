

export class Profile {
    constructor(data) {
        this.id = data._id
        this.imgUrl = data.imgUrl || "https://thiscatdoesnotexist.com"
        this.name = data.name
        this.description = data.description
    }

    get ProfileTemplate() {
        return `<h4 onclick="app.profilesController.setActiveProfile('${this.id}')">${this.name}</h4>`
    }
}