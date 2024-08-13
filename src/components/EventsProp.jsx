export const EventPorps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`hey ${user}`);
  };
  const handleHover = () => {
    alert(`thanks for hovering me`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("asad")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;
  const handleGreetings = () => {
    console.log(`hello user, Welcome`);
    onClick();
  };
  return (
    <>
      <button
        onClick={onClick}
        className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 m-2"
      >
        Click me
      </button>
      <button
        onMouseEnter={onMouseEnter}
        className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 m-2"
      >
        Hover me
      </button>
      <button
        onClick={handleGreetings}
        className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 m-2"
      >
        Greetings
      </button>
    </>
  );
};
