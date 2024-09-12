import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const contactInfo = {
            fullname: data.fullname,
            email: data.email,
            message: data.message
        }

        await axios.post("https://book-store-67mh.onrender.com/contact/contact", contactInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Message Send Successfully");
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    }

    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl container mx-auto px-4 my-4'><br /><br />
                <div className='bg-pink-500 text-black py-4'>
                    <h1 className='text-3xl font-bold mb-4 justify-center flex'>Contact Me</h1>
                    <span className='justify-center flex'>Please fill out form below to contact me</span>
                </div>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)} action='' className='bg-slate-200 w-96 px-8 py-6 rounded-xl '>
                        <h1 className='text-xl font-semibold mb-4'>Send your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>FullName</label>
                            <input className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='name'
                                type='text'
                                placeholder='Enter your fullname'
                                {...register("fullname", { required: true })} />
                            <br />
                            {errors.fullname && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Email Address</label>
                            <input className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='name'
                                type='text'
                                placeholder='Enter your email address'
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Message</label>
                            <textarea className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='name'
                                type='text'
                                placeholder='Enter your message'
                                {...register("message", { required: true })} />
                            <br />
                            {errors.message && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact