import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";



async function _getAllPosts() {
    try {
        await postsService.getAllPosts()
    } catch (error) {
        console.log(error);
    }
}

async function _drawAllPosts() {
    try {
        await postsService.drawAllPosts()
    } catch (error) {
        console.log(error);
    }
}


export class PostsController {
    constructor() {
        console.log("Post Controller Loaded...");
        ProxyState.on("posts", _drawAllPosts)
        _getAllPosts()
    }
    async createPost() {
        console.log("Creating Post...");
        window.event.preventDefault()
        let form = window.event.target
        const newPost = {
            image: form.image.value,
            description: form.description.value
        }
        postsService.createPost(newPost)
    }

    async deletePost(id) {
        try {
            console.log("Controller is Deleting Post...");
            await postsService.deletePost(id)
        } catch (error) {
            console.log(error);
        }
    }
}