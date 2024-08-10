import { useEffect, useState } from 'react';
import api from '../services/api';
import { getToken, clearToken, getUserId } from '../utils/authUtils';
import { useRouter } from 'next/router';

const usePosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchPosts = async () => {
    if(loading == true) return;
    setLoading(true);
    const userId = getUserId();
    try {
      const response = await api.get(`/v1/posts/all?author=${userId}`);
      setPosts(response.data);
    } catch (err: any) {
      if (err.response?.status === 401) {
        clearToken();
        router.push('/login');
      } else {
        setError(err.message || 'An error occurred while fetching posts');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchPosts();
    } else {
      router.push('/login');
    }
  }, [router]);

  return { posts, fetchPosts, loading, error };
};

export default usePosts;
