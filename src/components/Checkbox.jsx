import PropTypes from "prop-types";

function Checkbox({ completed, onChange, id }) {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        className="focus ml-2 checked:bg-terra-cotta hover:bg-sage "
        defaultChecked={completed}
        onChange={onChange}
      />
    </>
  );
}

Checkbox.propTypes = {
  completed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Checkbox;
