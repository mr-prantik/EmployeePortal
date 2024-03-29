import React from 'react';
import profileImg from '../../assets/profile.png'

const EmployeeCard = ({ name, date, projects, role, email , empImg}) => {
    return (
        <div className="flex items-center justify-around rounded">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex flex-col items-center pb-5">
                    {(import.meta.env.VITE_USER_DEFAULT_IMAGE === empImg) ? (
                        <img className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg" src={profileImg} alt="emp" />
                    ) : (
                        <img className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg" src={import.meta.env.VITE_ASSETS_URL+`/`+empImg} alt="emp img" />
                    )}
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{date} - Present</span>
                    <span className="text-m pt-2 text-gray-500 dark:text-gray-400">{role}</span>
                    <span className="text-m pt-2 text-gray-500 dark:text-gray-400">{`Projects Completed - ${projects}`}</span>
                    {/* <a href="#" className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">{mobile}</a> */}
                    <a href="#" className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">{email}</a>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard
