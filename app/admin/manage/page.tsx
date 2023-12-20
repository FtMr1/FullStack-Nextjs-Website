import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/getProduct";
import WarningText from "@/app/components/WarningText";
import ManageClient from "@/app/components/admin/ManageClient";
import AuthContainer from "@/app/components/containers/AuthContainer";
import Category from "@/app/components/home/Category";

const Manage = async () => {
    const product = await getProducts({category:null})
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Bu alana girşiniz bulunmamakta.." />;
  }
  return (
    
      <div className="w-full m-2">
            <ManageClient products ={product}/>
      </div>
    
  );
};

export default Manage;
