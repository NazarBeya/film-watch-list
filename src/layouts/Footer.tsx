const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 mt-10 bg-gray-950">
      <p className="text-white text-center">
        Copyright &copy; {currentYear}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
