'use client';

export default function MenuError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-container" role="alert">
      <h2>⚠️ Something went wrong!</h2>
      <p>{error.message || 'Failed to load menu dishes.'}</p>
      <button onClick={() => reset()} className="btn-primary">
        Try Again
      </button>
    </div>
  );
}
