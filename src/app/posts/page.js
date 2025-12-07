
import Link from 'next/link';
import Navbar from '../components/Navbar';

async function getPosts() {
  const res = await fetch('https://dummyjson.com/posts', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts'); 
  }
  const data = await res.json();
  return data.posts;
}

function getExcerpt(body) {
  const maxLength = 80;
  return body.length > maxLength ? body.substring(0, maxLength).trim() + '...' : body;
}

export default async function PostsPage() {  
  const posts = await getPosts();

  return (
    <>
      <Navbar /> 
      <div className="container my-5">
        <h1 className="mb-5 text-center">All Posts</h1>
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{post.title}</h5> 
                  <p className="card-text text-muted mb-4">
                    {getExcerpt(post.body)} 
                  </p>
                  <Link href={`/posts/${post.id}`} className="btn btn-primary mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}