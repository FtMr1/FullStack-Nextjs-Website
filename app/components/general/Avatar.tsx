import Image from "next/image"
import {RxAvatar} from 'react-icons/rx'
interface AvatarProps{
    image?: string
}

const Avatar:React.FC<AvatarProps> = ({image}) => {
    
    return <div><RxAvatar size={25}/></div>
    
    
}

export default Avatar