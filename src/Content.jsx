function Content({ type }) {
  if (type === "home") {
    return <HomeContent />;
  }

  if (type === "store") {
    return <StoreContent />;
  }
}

export default Content;

function HomeContent() {
  return (
    <div id="content">
      <h1 className="bg-black text-3xl underline">This is home content</h1>
    </div>
  );
}

function StoreContent() {
  return (
    <div id="content">
      <h1 className="bg-black text-3xl underline">This is store content</h1>
    </div>
  );
}
