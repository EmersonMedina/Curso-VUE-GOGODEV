import type { Post } from '@/interfaces/IPost'
import { ref, type Ref } from 'vue'

class PostService { 
    private post: Ref<Post>; 
    private posts: Ref<Array<Post>>;

    constructor() {
        this.post = ref({})
        this.posts = ref<Post[]>([])
    }

    getPost(): Ref<Post> {
        return this.post; 
    }

    getPosts(): Ref<Array<Post>> {
        return this.posts; 
    }

    fetchAll = async (): Promise<void> => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const data = await response.json()
            this.posts.value = await data
        } catch (error) {
            console.log(error)
        }
    }

    fetchById = async (id: string | string[]): Promise<void> => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url)
            const data = await response.json()
            this.post.value = await data
        } catch (error) {
            console.log(error)
        }
    }
}

export default PostService