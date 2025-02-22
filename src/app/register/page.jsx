"use client"
import Link from 'next/link';
import React from 'react';
import { registerUser } from '../actions/auth/registerUser';

const page = () => {

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        registerUser({name, email, password});
    }

    return (
        <div className='md:p-5'>
            <h2 className='text-[36px] text-white font-semibold underline text-center uppercase'>Please Siginup</h2>
            <div className='flex justify-center'>
                <div className='md:w-2/4 w-full p-5'>
                    <form onSubmit={handleRegister} className="border-2 border-[#C4EF17] md:p-10 p-4 rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                            <label className="label">
                                <p className='text-white'> Already have an account?<Link href={"/login"} className="text-white label-text-alt link link-hover">Please Login </Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#C4EF17] h-[55px] w-full text-[18px]">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;