import "./Button.css";

interface BtnProp {
  name: string;
}

function Button({ name }: BtnProp) {
  return <button className="btn">{name}</button>;
}

export { Button };
