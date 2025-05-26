function Button(props) {

  const {type, disabled, children} = props;

  return (
    <button type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
