import React from 'react';
 
const Contact = () => {
     return (
            <div name='contact' className='mt-16 flex justify-center items-center p-4'>
                <form method='POST' action="https://getform.io/f/d5876a9d-388a-421d-8435-5cc41de2d490" className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Contact</p>
                        <p className='mt-2 py-4'>// Submit the form below</p>
                    </div>
                    <input className='bg-orange-300 p-2' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 bg-orange-300' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-orange-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
                    <button className=' border-2 hover:bg-orange-500 hover:border-orange-800 px-4 py-3 my-8 mx-auto flex items-center'>Let us know</button>
                </form>
            </div>
     )
}
export default Contact;