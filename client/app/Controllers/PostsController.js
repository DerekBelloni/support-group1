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

async function _drawActivePosts() {
    let template = ''
    ProxyState.activePosts.forEach(p => template += p.PostTemplate)
    document.getElementById('display-posts').innerHTML = template
}




export class PostsController {
    constructor() {

        ProxyState.on("posts", _drawAllPosts)
        ProxyState.on('activePosts', _drawActivePosts)
        _getAllPosts()

    }
    async createPost() {

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
    async drawById(id) {

        try {
            const activePosts = ProxyState.posts.filter(p => p.profileId == id)
            ProxyState.activePosts = activePosts

            console.log(activePosts);


        } catch (error) {
            console.error(error);
        }

    }
}