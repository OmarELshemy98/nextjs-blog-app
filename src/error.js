'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mt-5 text-center">
      <div className="alert alert-danger">
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button
          className="btn btn-danger mt-2"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}