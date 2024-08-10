import { Request, Response } from 'express';
import _ from 'lodash';
import {createNewPost, findPostByAuthorId} from "../services/postService";

// Create a new post
export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const authorId: number = req.userId as number; // Assume user ID is added to req by middleware

  try {
    const post = await createNewPost(title, content, authorId);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all posts
export const getPosts = async (req: Request, res: Response) => {
  const { author } = req.query; // FIXME: should be better if there is only boolean like author-only or something like that, as this can be critical security issue
  let authorId;
  if(_.isString(author)) {
     authorId = _.toNumber(author);
   }
  try {
    const posts = await findPostByAuthorId(authorId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
