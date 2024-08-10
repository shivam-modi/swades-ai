import Post from "../models/post"

export const createNewPost = async (title: string, content: string, authorId: number) => {
    return Post.create({ title, content, authorId })
}

export const findPostByAuthorId = async (authorId?: number) => {
    const where: any = {};
    if (authorId) {
      where.authorId = authorId;
    }

    const posts = await Post.findAll({ where });
    return posts;
}