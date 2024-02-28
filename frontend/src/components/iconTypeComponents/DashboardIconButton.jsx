import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
const DashboardIconButton = () => {

  return (
    <Link to={"/admin/dashboard"} className={`dashboardIconButton fixed z-20 right-5 bottom-14 flex flex-col items-center cursor-pointer `}>
        <MdOutlineDashboard className='text-6xl z-20 right-0' />
<h1 className='font-bold'>Go To Dashboard</h1>
    </Link>
  )
}

export default DashboardIconButton