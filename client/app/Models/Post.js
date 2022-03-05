

export class Post {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.image = data.image || "https://thiscatdoesnotexist.com"
        this.profileId = data.profileId

        this.profileImage = data.account.image
        this.profileName = data.account.name
    }



    get PostTemplate() {
        return `<div class="row">
        <div class="col-3"></div>
      <div class="col-6">
        <div class="card shadow my-5">
          <div class="d-flex justify-content-end">
            <i class="mdi mdi-close-thick mdi-18px m-1"></i>
          </div>
          <img src="${this.imgUrl}" class="card-img-top" alt="post_image">
          <div class="card-body">
            <div class="d-flex  align-items-center justify-content-start me-5">
              <img class="me-5 m-2" src="${this.profileImage}"
                height="45" alt="" loading="lazy">
              <h2 class="me-5">${this.profileName}</h2>
              <i class="mdi mdi-pencil mdi-18px"></i>
            </div>
            <p class="card-text">${this.description}.</p>
            <div class="">
              <div class=" d-flex">
                <h3 class="me-5">Comments</h3>
              </div>
              <div class="input-group my-3">
                <span class="input-group-text" id="inputGroup-sizing-default">New</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default">
              </div>
              <div class="">
                <div class="d-flex align-items-center">
                  <h3 class="me-5">Usernameforcommentor</h3>
                  <i class="mdi mdi-pencil me-3"></i><i class="mdi mdi-delete"></i>
                </div>
                <ul>
                  <li>
                    Comment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div class="col-3"></div>
        </div>
      </div>
    </div>`
    }
}