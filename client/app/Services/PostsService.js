import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js";



class PostsService {
    async getAllPosts() {
        const res = await api.get('api/posts')
        console.log("Posts are...", res.data);
        const posts = res.data.map(p => new Post(p))
        ProxyState.posts = posts
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
        console.log(ProxyState.posts);
    }

}



export const postsService = new PostsService()