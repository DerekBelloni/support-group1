import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js";



class PostsService {
    async getAllPosts() {
        console.log("Attempting to grab posts...");
        const res = await api.get('api/posts')
        const posts = res.data.map(p => new Post(p))
        ProxyState.posts = posts
        console.log("Posts Grabbed are...", ProxyState.posts);
    }
}

export const postsService = new PostsService()