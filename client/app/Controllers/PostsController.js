import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";



async function _getAllPosts() {
    try {
        await postsService.getAllPosts()
    } catch (error) {
        console.log(error);
    }
}


export class PostsController {
    constructor() {
        console.log("Post Controller Loaded...");
        // ProxyState.on("posts", _drawAllPosts)
        _getAllPosts()
    }
    async makePost(id) {
        try {
            await postsService.makePost(id)
        } catch (error) {
            console.log(error);
        }

    }
}