import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container" role="alert">
      <h1>404 - Item Not Found</h1>
      <p>The dish or page you are looking for does not exist in Addis Eats.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Link href="/menu" className="btn-primary">
          Back to Menu
        </Link>
        <Link href="/" className="btn-secondary">
          Go Home
        </Link>
      </div>
    </div>
  );
}
