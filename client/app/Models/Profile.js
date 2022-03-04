

export class Profile {
    constructor(data) {
        this.id = data.id
        this.imgUrl = data.imgUrl
        this.name = data.name
        this.description = data.description
    }

    get ProfileTemplate() {
        return `<h4 onclick="app.profilesController.setActiveProfile('${this.id}')">${this.name}</h4>`
    }
}