import { ProxyState } from "../AppState.js";




class PostsService {
    async getAllPosts() {
        const res = await api.get('api/posts')
        console.log(res.data);
        const posts = res.data.map(p => new Post(p))
        ProxyState.posts = posts
        console.log("Posts Grabbed are...", ProxyState.posts);
    }
}

export const postsService = new PostsService()