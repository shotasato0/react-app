function Button(props) {

  const {type, disabled} = props;

  return (
    <button type={type} disabled={disabled}>
      clicked
    </button>
  );
}

export default Button;
