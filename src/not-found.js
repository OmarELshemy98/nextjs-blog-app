import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h2>404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="btn btn-link">Return Home</Link>
    </div>
  )
}