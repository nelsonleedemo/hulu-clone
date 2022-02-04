import React, { ReactElement } from "react";

interface HeaderItemProps {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// mobile first development
const HeaderItem: React.FC<HeaderItemProps> = ({ title, Icon }) => {
  return (
    <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
      <Icon className="mb-1 h-8 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
