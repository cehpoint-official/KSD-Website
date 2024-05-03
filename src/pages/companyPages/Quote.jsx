import React, { useState } from 'react'
import Img2 from '../../asset/about/quote-form-img.png'

const Quote = () => {

    const [user, setuser] = useState({
        name: "",
        mobile: "",
        service: "",
        projectExplanation: "",
        email: "",
        company: "",
        country: "",
        // fileUpload: "",
    })

    let name, value
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value

        setuser({ ...user, [name]: value })
    }

    const postData = async (event) => {
        event.preventDefault()

        const { name, mobile, service, projectExplanation, email, company, country } = user;

        if (name && mobile) {
            const res = await fetch(
                "https://ksd-project-4038b-default-rtdb.firebaseio.com/requestquote.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    mobile,
                    service,
                    projectExplanation,
                    email,
                    company,
                    country
                })
            }
            )
            if (res) {
                setuser({
                    name: "",
                    mobile: "",
                    service: "",
                    projectExplanation: "",
                    email: "",
                    company: "",
                    country: "",
                })
                alert("Form Data Successfully")
            }
        } else {
            alert("Fill Data Please")
        }



    }



    return (<>
        <div className='quoteBgImg pt-32 mb-20'>
            <div className='text-white text-center mx-8'>
                <p className=' lg:text-5xl  text-3xl font-bold  '>REQUEST A QUOTE</p>
                <p className='my-6 text-xl text-gray-100'>
                    Please fill the form below and we shall get back to you within 2 – 4 hours
                </p>
            </div>
            <div className=' bg-slate-50 lg:mx-32 md:mx-12 mx-8 rounded-lg border-gray-300 border'>
                <form class="p-8" method='POST'>
                    <div className='grid grid-cols-12 '>
                        <div className='col-span-12 md:col-span-6 space-y-4 sm:p-6'>
                            <div>
                                <p>Name</p>
                                <input
                                    name='name'
                                    value={user.name} onChange={getUserData}
                                    class="w-full p-2 mt-2 border rounded" type="text" placeholder="Name" />
                            </div>
                            <div>
                                <p>Phone Number</p>
                                <input
                                    name='mobile'
                                    value={user.mobile} onChange={getUserData}
                                    class="w-full p-2 mt-2 border rounded" type="tel" placeholder="Phone Number" />
                            </div>
                            <div>
                                <p>Service Type</p>
                                <input
                                    name='service'
                                    value={user.service} onChange={getUserData}
                                    class="w-full p-2 mt-2 border rounded" type="tel" placeholder="Service Type" />
                            </div>
                            {/* <div>
                                <p>Service Type</p>
                                <select class="w-full p-2 mt-2 border rounded">
                                    <option value="">Select Service Type</option>
                                    <option value="type1">Type 1</option>
                                    <option value="type2">Type 2</option>
                                    <option value="type3">Type 3</option>
                                </select>
                            </div> */}
                            <div>
                                <p>Project Explanation</p>
                                <textarea rows={5}
                                    name='projectExplanation'
                                    value={user.projectExplanation} onChange={getUserData}
                                    class="w-full p-2 mt-2 border rounded" placeholder="Project Explanation"></textarea>
                            </div>
                        </div>

                        <div className='col-span-12 md:col-span-6 space-y-4 sm:p-6'>
                            <div>
                                <p>Email</p>
                                <input
                                    name='email'
                                    value={user.email} onChange={getUserData}
                                    class="w-full p-2 mt-2 border rounded" type="email" placeholder="Email" />
                            </div>
                            <div>
                                <p>Company Name</p>
                                <input
                                    name='company'
                                    value={user.company} onChange={getUserData}
                                    class="w-full p-2 mt-2  border rounded" type="text" placeholder="Company Name" />
                            </div>
                            <div>
                                <p>Country</p>
                                <input
                                    name='country'
                                    value={user.country} onChange={getUserData}
                                    class="w-full p-2 mt-2  border rounded" type="text" placeholder="Country Name" />
                            </div>

                            {/* <div class="w-full ">
                                <p>Country</p>
                                <select id="country" name="country" class="mt-2 block w-full   p-2 text-gray-600 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  rounded-md">
                                    <option value="">Select a country...</option>
                                    <option value="AF">India</option>
                                    <option value="AX">Thailands</option>
                                </select>
                            </div> */}
                            {/* <div>
                                <p>Upload file</p>
                                <input class="w-full p-2 mt-2 border rounded file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" type="file" />
                            </div> */}

                            <p>File Upload</p>
                            <div class="flex items-center justify-center w-full">
                                <label for="dropzone-file" class="flex flex-col -mt-2 items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-2 text-blue-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input
                                        // name='country'
                                        // value={user.country} onChange={getUserData}
                                        id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>

                        </div>

                    </div>
                    <div className='md:flex space-x-3 mt-3'>
                        <img src={Img2} alt="" className='' />

                        <div>
                            <button onClick={postData} class="px-4 py-2 mt-8 md:mt-0 bg-blue-500  text-white rounded hover:bg-blue-600" type="button">Request a Quote</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </>)
}

export default Quote