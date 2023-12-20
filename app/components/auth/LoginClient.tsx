"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Input from "../general/Input";
import { FaGooglePlusSquare } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect } from "react";


interface UserProps {
  currentUser : User | null | undefined
}

const LoginClient:React.FC<UserProps> = ({currentUser}) => {
  
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) =>
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Login işlemi başarılı...");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });

    useEffect(() => {
    
      if(currentUser){
        router.push("/cart");
        router.refresh();
      }
    }, [])
    

  return (
    <AuthContainer>
      <div className=" w-full md:w-[500px] p-2 shadow-lg rounded-md">
        <Heading text="Login" center />
        <Input
          placeholder="Email"
          type="text"
          id="email"
          register={register}
          errors={errors}
          required
        />

        <Input
          placeholder="Parola"
          type="password"
          id="password"
          register={register}
          errors={errors}
          required
        />
        <Button text="Giriş Yap" onClick={handleSubmit(onSubmit)} />
        <div className="text-center text-sm my-2 text-red-500">
          Daha Önce Kayıt Olmadıysanız Tılayın{" "}
          <Link className="underline" href="/register">
            Buraya Tıkla
          </Link>
        </div>
        <div className="text-center my-2 font-bold text-lg text-slate-800">
          OR
        </div>
        <Button
          text="Google ile Giriş Yap"
          icon={FaGooglePlusSquare}
          outline
          onClick={() => signIn('google')}
        />
      </div>
    </AuthContainer>
  );
};

export default LoginClient;
