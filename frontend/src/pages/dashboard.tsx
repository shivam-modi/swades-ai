import { NextPage } from 'next';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import usePosts from '../hooks/usePosts';

const Dashboard: NextPage = () => {
  const { posts, loading, error } = usePosts();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <PostForm />
      <br/>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <>
          {error && <p className="text-red-500">{error}</p>}
          {posts.length > 0 ? (
            posts.map(post => (
                <>
              <PostCard key={post.id} post={post} />
              <br/>
              </>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
