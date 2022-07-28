import React from "react";
import { useState } from "react";
// import NewsFeed from "../pages/news";
import { navItems } from "../static/navItems";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);
  // const pageCall = (title) => {
  //   if(title == "For You"){
  //     <NewsFeed/>
  //   }
  // }
  const router = useRouter();
  return (
    <div className="WrapperSideBar">
      <div className="LogoContainerSide">
        <div className="LogoSide">CRYFTS</div>
      </div>
      <div className="NavItemsContainerSide">
        {navItems.map((item) => (
          <div
            className="NavItemSide"
            key={item.title}
            onClick={() => {
              setActiveIcon(item.title);
              router.push({
                pathname: item.href,
              });

            }}
          >
            <div
              className="NavIconSide"
              style={{
                marginTop: "5px",
                color: item.title === activeIcon && "#8d1212",
              }}
            >
              {item.icon}
            </div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
