interface PostCardProps {
    post: {
      id: number;
      title: string;
      content: string;
    };
  }
  
  const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p>{post.content}</p>
      </div>
    );
  };
  
  export default PostCard;
  