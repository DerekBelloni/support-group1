import { ProxyState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { api } from "./AxiosService.js";



class PostsService {
    async getAllPosts() {
        const res = await api.get('api/posts')
        ProxyState.posts = res.data.map(p => new Post(p))


    }

    drawAllPosts() {

        let template = ''
        ProxyState.posts.forEach(p => template += p.PostTemplate)
        document.getElementById('display-posts').innerHTML = template
    }

    async createPost(newPost) {

        const res = await api.post('api/posts', newPost)
        let realPost = new Post(res.data)
        ProxyState.posts = [realPost, ...ProxyState.posts]

    }

    async deletePost(postId) {
        const res = await api.delete(`api/posts/${postId}`)



        ProxyState.posts = ProxyState.posts.filter(p => p.id != postId)




    }

}



export const postsService = new PostsService()