interface GreetProps {
  name?: string;
}

const Greet = ({ name }: GreetProps) => {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};

export default Greet;
