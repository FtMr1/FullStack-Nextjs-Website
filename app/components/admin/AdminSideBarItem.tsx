import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface AdminSideBarItemProps {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}

const AdminSideBarItem: React.FC<AdminSideBarItemProps> = ({
  selected,
  name,
  icon: Icon,
  url,
}) => {
  return (
    <div>
      <Link
        className={`flex items-center gap-2 ${selected ? "text-black font-bold" : "text-white font-medium"}`}
        href={url}
      >
        <Icon size={25} />
        <div>{name}</div>
      </Link>
    </div>
  
  );
};

export default AdminSideBarItem;
