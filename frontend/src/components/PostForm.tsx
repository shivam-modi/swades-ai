import { useState } from 'react';
import usePosts from '../hooks/usePosts';
import api from '../services/api';

const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { fetchPosts } = usePosts();

  const handlePost = async () => {
    try {
      await api.post('/v1/posts/new', { title, content });
      setTitle('');
      setContent('');
      fetchPosts();
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded w-full"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handlePost}
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
      >
        Post
      </button>
    </div>
  );
};

export default PostForm;
