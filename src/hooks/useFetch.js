import { useEffect, useState } from "react";

function useFetch() {
  const [todos, setTodos] = useState([]);
  const [todosFinished, setTodosFinished] = useState(0);

  function getTodosFinished(data) {
    let counter = 0;
    data.forEach((todo) => {
      if (todo.completed) {
        counter++;
      }
    });
    return counter;
  }

  // async function getTodos() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const jsonResponse = await res.json();
  //   setTodos(jsonResponse);
  //   setTodosFinished(getTodosFinished(jsonResponse));
  // }

  useEffect(() => {
    // getTodos();
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonResponse = await res.json();
      setTodos(jsonResponse);
      setTodosFinished(getTodosFinished(jsonResponse));
    })();
  }, []);

  return { todos, todosFinished, setTodosFinished };
}

export default useFetch;
