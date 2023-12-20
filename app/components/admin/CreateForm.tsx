"use client";
import { LuLeafyGreen, LuPopcorn } from "react-icons/lu";
import { GiHoneyJar, GiMountainRoad } from "react-icons/gi";
import Input from "../../components/general/Input";
import CheckBox from "../general/CheckBox";
import Heading from "../general/Heading";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ChoiceInput from "../general/ChoiceInput";
import Button from "../../components/general/Button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import axios from "axios";
import { useRouter } from "next/navigation";




const CreateForm = () => {
  const [ımg, setImg] = useState<File | null>(null);
  const [uploadedImg, setUploadedImg] = useState<string | null>(null);
  const router = useRouter()
  const categoryList = [
    {
      name: "Çay",
      icon: LuLeafyGreen,
    },
    {
      name: "Bal",
      icon: GiHoneyJar,
    },
    {
      name: "Un",
      icon: LuPopcorn,
    },
    {
      name: "Yöresel",
      icon: GiMountainRoad,
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      image: "",
      inStock: false,
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const handleChange = async () => {
      toast.success("Yükleme işlemi başarılı !!");
      try {
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, "images/shop.jpg");

        const uploadTask = uploadBytesResumable(storageRef, ımg);
        await new Promise<void>((resolve, rejects) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              rejects(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                setUploadedImg(downloadURL);
                resolve();
              }).catch((error)=>{
                console.log(error)
              })
             
            }
          );
        });
      } catch (error) {
        console.log(error);
        toast.error("Bir hata oluştu");
      }
    };
    await handleChange();
    let newData = { ...data, image: uploadedImg };

    axios.post('/api/product' , newData)
    .then(()=>{
            toast.success('Ürün ekleme işlemi başarılı..')
            router.refresh()
    }).catch((error)=>{
      console.log(error , 'error')
    })
        
    
    
  };
  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0){
      setImg(e.target.files[0]);
    }
    
  };

  return (
    <div>
      <Heading text="ÜRÜN OLUŞTUR" center />
      <Input
        placeholder="Ad"
        type="text"
        id="name"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="Açıklama"
        type="text"
        id="description"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="Marka"
        type="text"
        id="brand"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="Fiyat"
        type="number"
        id="price"
        register={register}
        errors={errors}
        required
      />
      <CheckBox
        id="inStack"
        label="Ürün Stokta Mevcut mu?"
        register={register}
      />
      <div className="flex flex-wrap gap-3">
        {categoryList.map((cat, i) => (
          <ChoiceInput
            icon={cat.icon}
            text={cat.name}
            onClick={(category) => setCustomValue("category", category)}
            key={i}
            selected={category == cat.name}
          />
        ))}
      </div>
      <input className="mb-2" type="file" onChange={onChangeFunc} />
      <Button text="Ürün Oluştur" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default CreateForm;
