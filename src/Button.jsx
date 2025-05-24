function Button() {

  const handleClick = () => {
    console.log("clicked");
    alert("clicked");
  };

  return (
    <button type="button" onClick={handleClick}>
      <i>icon</i>
      <span>Click me</span>
    </button>
  );
}

export default Button;
