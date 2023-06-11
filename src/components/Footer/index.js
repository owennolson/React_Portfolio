import { useState } from 'react';

const styles = {
  iconSize: {
    fontSize: '40px',
  },
  black: {
    fontSize: '40px',
    color: 'black',
  },
};

function Footer() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseExit = () => {
    setIsHover(false);
  };

  const iconStyle = isHover ? { ...styles.black, color: '#305F87' } : styles.black;

  return (
    <div className="d-flex justify-content-center mt-5">
      <a
        href="https://github.com/owennolson" target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} rel="noreferrer">
        <i className="fa fa-github mx-2" style={iconStyle}></i>
      </a>
    </div>
  );
}

export default Footer;