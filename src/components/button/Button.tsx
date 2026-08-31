import "./Button.css";

interface BtnProp {
  name: string;
}

function Button({ name }: BtnProp) {
  return <button>{name}</button>;
}

export { Button };
