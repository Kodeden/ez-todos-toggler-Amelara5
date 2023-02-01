import Todos from "./components/Todos";
import useFetch from "./hooks/useFetch";

function App() {
  const { todos, todosFinished, setTodosFinished } = useFetch();
  return (
    <div className="font-size font-mon flex flex-col items-center justify-center bg-peach font-mono">
      <header className="my-2 text-3xl  font-bold">Todos list</header>
      <h2 className="text-xl underline">{todosFinished} / 200 Completed</h2>
      <Todos data={todos} setTodosFinished={setTodosFinished} />
    </div>
  );
}

export default App;
