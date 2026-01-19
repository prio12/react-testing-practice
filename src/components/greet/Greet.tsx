interface GreetProps {
  name?: string;
}

const Greet = ({ name }: GreetProps) => {
  const greetingName = name ?? 'Guest';
  return (
    <div>
      <h1>Hello {greetingName}</h1>
    </div>
  );
};

export default Greet;
