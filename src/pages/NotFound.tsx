import notFound from '../assets/not-found.svg';

const NotFound = () => {
  return (
    <div className="text-center flex-1">
      <h1 className="text-center text-lg text-slate-700">Page not found :(</h1>
      <img
        src={notFound}
        alt="Page not found"
        width={320}
        height={320}
        className="block mx-auto mt-12"
      />
    </div>
  );
};

export default NotFound;
