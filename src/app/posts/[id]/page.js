import Link from "next/link";
import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}

export default async function SinglePostPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound(); 
  }

  return (
    <div className="card mt-5">
      <div className="card-header">Post #{post.id}</div>
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.body}</p>
        <Link href="/posts" className="btn btn-dark mt-3">Back</Link>
      </div>
    </div>
  );
}