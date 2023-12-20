"use client"
import { usePathname } from "next/navigation";
import AdminSideBarItem from "./AdminSideBarItem";
import { MdSpaceDashboard,MdBorderColor,MdCreateNewFolder } from "react-icons/md";



const AdminSideBar = () => {
    const pathname = usePathname()
  const adminPanel = [
    { name: "Özetler", url: "/admin" , icon:MdSpaceDashboard },
    { name: "Ürün Oluştur", url: "/admin/create",icon:MdBorderColor },
    { name: "Ürünler Yönet", url: "/admin/manage",icon:MdBorderColor },
    { name: "Siparişlerim", url: "/admin/order" ,icon:MdCreateNewFolder},
  ];
  return  (
 <div className=" w-full p-4 border-r h-screen bg-slate-300">
        <div className="space-y-4">
            {
                adminPanel.map((admin , i)=>(
                   <AdminSideBarItem key={i} selected={pathname== admin.url} icon={admin.icon} name={admin.name} url={admin.url}/>
                ))
            }
        </div>
  </div>
  )
};

export default AdminSideBar;
