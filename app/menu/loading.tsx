export default function MenuLoading() {
  return (
    <div style={{ padding: "2rem 0" }}>
      <div className="skeleton-title" />
      <div className="skeleton-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="skeleton-card" />
        ))}
      </div>
    </div>
  );
}
