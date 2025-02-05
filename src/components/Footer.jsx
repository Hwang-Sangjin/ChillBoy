const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };
  return (
    <div className="absolute flex bottom-5 w-full justify-center">
      <div
        onClick={() => {
          handleClick("https://www.instagram.com/eudaimoniajin/");
        }}
        className="m-3 cursor-pointer font-display"
      >
        Developer - Jin
      </div>
      <div
        onClick={() => {
          handleClick("https://www.instagram.com/p/Cx9pJOVgYvj/");
        }}
        className="m-3 cursor-pointer font-display"
      >
        Original - phillipbankss
      </div>
    </div>
  );
};

export default Footer;
