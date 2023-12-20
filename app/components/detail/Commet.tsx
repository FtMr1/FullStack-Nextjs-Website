import { RxAvatar } from "react-icons/rx";
import Avatar from "../general/Avatar";
import { Rating } from "@mui/material";

const Commet = ({ prd }: { prd: any }) => {
  return (
    <div className="border  w-full md:w-1/2 rounded-lg my-3">
      <div className="flex items-center gap-1">
        <RxAvatar size={45} />

        <div>
          <div>{prd?.user?.name}</div>
        </div>
      </div>
      <div className="text-slate-500 ">{prd?.commet} asdasda</div>
      <Rating name="read-only" value={prd?.user?.rating} readOnly />
    </div>
  );
};

export default Commet;
