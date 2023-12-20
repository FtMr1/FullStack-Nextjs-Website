import React from 'react'
import AdminSideBar from '../components/admin/AdminSideBar'

const AdminLayout = ({children}:{children:React.ReactNode} )=> {
  return (
    <div className='flex gap-2'>
        <div><AdminSideBar/></div>
        
        {children}
    </div>
  )
}

export default AdminLayout