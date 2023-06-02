export default function Layout({ children }) {
  return (
    <>
      <h1 className="text-2xl text-left text">Podcaster</h1>
      <hr />
      <div>{children}</div>
    </>
  );
}
