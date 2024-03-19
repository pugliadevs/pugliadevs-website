import { useEffect } from "react";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Header = ({ data }) => {
  useEffect(() => {
    const handleMenuClick = () => {
      document.body.classList.toggle("menu-open");
    };

    const item = document.querySelector(".icon-hamburger");
    item.addEventListener("click", handleMenuClick);

    return () => {
      item.removeEventListener("click", handleMenuClick);
    };
  }, []);

  return (
    <>
      <nav className="navcustom">
        <div className="navcustom__content">
          <a className="navcustom__logo" href="/">
            <img src="/logo.jpg" alt="" className="w-[12.75rem]" />
          </a>
          <ul className="navcustom__menu">
            {data.links.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="navcustom__quick">
            <a className="anavcustom" href="#">
              Contacts
            </a>
            <div className="icon-hamburger">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="fixed  w-[100%]">
          <div className="row">
            <div className="  items-end">
              <div className="sociale-icon2 mr-5">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <CiLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <CiFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <FaXTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style>
        {`
	body, html{
		line-height: 1; font-size: 16px; box-sizing: border-box;margin: 0;padding: 0;}*,*:before,*:after{ box-sizing: border-box; }h1,h2,h3,h4,h5,h6, p, ol, ul{margin: 0 0 1rem 0;padding: 0;}ol,ul{padding-left: 20px;line-height: 1.5;}img{height: auto;}h1{font-size: 4rem;} h2{font-size: 3rem;} h3{font-size: 2rem;} h4{font-size: 1rem;} h5{font-size: 0.8rem;} h6{font-size: 0.6rem;}a{text-decoration:none}
   
   /* Menu */
   :root { --menu-bg: #ffffff; --menu-color: #000000; }
   
   .navcustom{ background-color: var(--menu-bg); position: fixed; top:0;  left:0; z-index: 9999; width: 100%; padding: 10px 15px; }
   .navcustom__content{max-width: 1200px;width: 100%;margin: 0 auto; display: flex;justify-content: space-between;}
   
   .navcustom__logo,
   .navcustom__quick{display: flex; align-items: center;color:var(--menu-color)}
   
   .navcustom__menu{padding: 0;margin: 0;}
   .navcustom__menu li{display: inline-block;}
   .navcustom__menu li a{color:var(--menu-color); opacity: 0.8;display: block;padding: 16px;font-size: 15px;}
   
   .anavcustom{color: var(--menu-);}
   
   @media (max-width: 768px) {
	 .navcustom__menu{   
	   position: absolute; top:60px; left:0; background-color: var(--menu-bg); width: 100%; height: 100vh;
	   height: 0vh; overflow: hidden;transition: all 1s cubic-bezier(.215, .61, .355, 1);
	 }
   
	 .navcustom__menu li{width: 100%;border-bottom: 1px solid #444}
	 .menu-open .navcustom__menu{height: 100vh;padding: 3%;}
   
	 .icon-hamburger{height: 50px;width: 40px;margin-left: 20px;padding-top: 5px;}
	 .icon-hamburger span{height: 2px; width: 30px;background: var(--menu-color);position: relative;display: block;margin-top: 11px;transition: all 0.2s cubic-bezier(.215, .61, .355, 1);}
   
	 .menu-open .icon-hamburger span:nth-child(1){transform: rotate(45deg) translateY(9px);}
	 .menu-open .icon-hamburger span:nth-child(2){transform: rotate(-45deg) translateY(-9px);}
   
	 .navcustom__quick{display: flex; justify-content: flex-end; width: 50%;}
   
   }.sociale-icon2 {
    text-align: end;
    margin-bottom: 100px;
  }
  .sociale-icon2 ul {
    padding: 0;
    margin: 0;
  }
  .sociale-icon2 ul li {
    display: inline-block;
    list-style: none;
  }
  .sociale-icon2 ul li a {
    color: gray;
    font-size: 26px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid #e0dede;
    transition: all 0.3s ease-in-out;
  }
        `}
      </style>
    </>
  );
};

export default Header;
