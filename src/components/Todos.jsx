import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

function Todos({ data, setTodosFinished }) {
  return (
    <>
      {data.map((todo) => {
        return (
          <div key={todo.id} className="my-1 text-sm">
            {todo.title}
            <Checkbox
              completed={todo.completed}
              onChange={(event) => {
                if (event.target.checked) {
                  setTodosFinished((prev) => prev + 1);
                } else setTodosFinished((prev) => prev - 1);
              }}
              id={todo.id}
            />
          </div>
        );
      })}
    </>
  );
}

Todos.propTypes = {
  data: PropTypes.array.isRequired,
  setTodosFinished: PropTypes.func.isRequired,
};
export default Todos;
