async function getPosts() {
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
  
    const res = await fetch('https://dummyjson.com/posts', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    return res.json();
  }