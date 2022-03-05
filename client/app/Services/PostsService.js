import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js";



class PostsService {
    async getAllPosts() {
        const res = await api.get('api/posts')
        const realPosts = res.data.map(p => new Post(p))
        ProxyState.posts = realPosts
        console.log("Posts Grabbed are...", ProxyState.posts);
    }

    async drawAllPosts() {
        console.log("drawing posts...");
        let template = ''
        ProxyState.posts.forEach(p => template += p.PostTemplate)
        document.getElementById('display-posts').innerHTML = template
    }

    async createPost(newPost) {
        console.log("Service is creating post...");
        const res = await api.post('api/posts', newPost)
        let realPost = new Post(res.data)
        ProxyState.posts = [realPost, ...ProxyState.posts]
        console.log("New Posts Array", ProxyState.posts);
    }

    async deletePost(postId) {
        console.log("Service is Deleting Post...");
        ProxyState.posts.filter(p => p.id != postId)
        const postToDelete = ProxyState.posts.find(p => p.id == postId)
        console.log(postToDelete);
        const res = await api.delete(`api/posts/${postToDelete.id}`)

        ProxyState.posts = ProxyState.posts



    }

}



export const postsService = new PostsService()