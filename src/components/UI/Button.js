import styled from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={`${styled.button} ${props.onClassName ? styled.deleteEdit : ''}`} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
