// import React from 'react';
import { useState } from "react";
import { createCourse } from "../../sevices/courseService";
import UserLayout from '../../layouts/UserLayout';

function AddCourse() {
    const [formData, setFormData]=useState({
        name:"",
        description:"",
        fees:"",
        duration:"",
        eligibility:"",
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };

    const handlesubmit=async(e)=>{
        e.preventDefault();

        try{

            await createCourse(formData);

            alert("Course added successfully");

            setFormData({
                name:"",
                description:"",
                fees:"",
                duration:"",
                eligibility:"",
            });
        } catch(error){
            console.log(error);
        }
    };
  return (
    <UserLayout>
        <h1 className="text-3xl font-bold mb-6">Add Course</h1>
        <form onSubmit={handlesubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Course Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter course name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                    placeholder="Enter course description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fees">
                    Fees
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fees"
                    name="fees"
                    type="text"
                    placeholder="Enter course fees"
                    value={formData.fees}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                    Duration
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="duration"
                    name="duration"
                    type="text"
                    placeholder="Enter course duration"
                    value={formData.duration}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eligibility">
                    Eligibility
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="eligibility"
                    name="eligibility"
                    type="text"
                    placeholder="Enter eligibility criteria"
                    value={formData.eligibility}
                    onChange={handleChange}
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Add Course
            </button>
        </form>
    </UserLayout>
  );
}

export default AddCourse;
