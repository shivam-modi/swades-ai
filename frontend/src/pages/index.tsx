import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import api from '../services/api';
import Link from 'next/link';
import { getToken, clearToken } from '../utils/authUtils'; 

interface Post {
  id: number;
  title: string;
  content: string;
}

interface HomePageProps {
  posts: Post[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    const token = getToken();
    setHasToken(!!token); 
  }, []);

  const handleLogout = () => {
    clearToken();
    setHasToken(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>

      <div className="mb-4">
        {hasToken ? (
          <button
            onClick={handleLogout}
            className="text-red-500 hover:underline"
          >
            Logout
          </button>
        ) : (
          <>
            <Link href="/login" className="text-blue-500 hover:underline mr-4">Login</Link>
            <Link href="/signup" className="text-blue-500 hover:underline">Signup</Link>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await api.get('/v1/posts/all'); 
    return { props: { posts: response.data } };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { props: { posts: [] } };
  }
};

export default HomePage;
