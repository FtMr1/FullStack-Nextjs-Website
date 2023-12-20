import { getCurrentUser } from '@/app/actions/getCurrentUser'
import Logo from './Logo'
import Search from './Search'
import CardCount from './CardCount'
import HamburgerMenu from './HamburgerMenu'
import User from './User'


const Navbar =async () => {
  const currentUser = await getCurrentUser();


  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-slate-300'>
        <Logo/>
        <Search/>
        <CardCount/>
        <User currentUser={currentUser}/>
        <HamburgerMenu/>
    </div>
  )
}

export default Navbar