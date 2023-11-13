export interface IBlog {
    title: string
    body: string
    // author_id: string | number
    id: string | number
}


export interface IBlogComment {
    body: string
    // author_id: string | number
    blog_id: string | number
    id: string  | number
}
