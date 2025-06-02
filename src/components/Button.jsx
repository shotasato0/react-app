import styles from "./Button.module.css"
import { useState } from "react"

function Button(props) {

  const [ count, setCount] = useState(0);

  const { type, disabled } = props;

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <button className={styles.button} type={type} disabled={disabled} onClick={handleClick}>
      カウント： {count}
    </button>
  );
}

export default Button;
