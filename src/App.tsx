import { useGetProducts } from "./services/sample-service";

function App() {
  const { data, loading, error, refetch } = useGetProducts();

  // refetch is a function and can be called to fetch fresh data from api
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
