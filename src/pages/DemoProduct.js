import React, { useState } from 'react';
import { useDocTitle } from '../components/CustomHook';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const DemoProduct = () => {
    useDocTitle('RN Services');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [demoProducts, setDemoProducts] = useState([]);
    const [pickupAddress, setPickupAddress] = useState('');
    const [productName, setProductName] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        errors.products = [];
        if (checked) {
            setDemoProducts([...demoProducts, value]);
        } else {
            setDemoProducts(demoProducts.filter((e) => e !== value));
        }
    };

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setPickupAddress('');
        setProductName('');
        setProductWeight('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        const templateParams = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message,
            products: demoProducts.join(', '),
            pickup_address: pickupAddress,
            product_name: productName,
            product_weight: productWeight,
        };

        emailjs
            .sendForm('service_zdvm467', 'template_619nybr', e.target, 'rzj16BGu10hxA8RBm')
            .then(
                (result) => {
                    console.log(result.text);
                    Notiflix.Report.success(
                        'Success',
                        'Thanks for sending a message. We will be in touch soon.',
                        'Okay'
                    );
                    clearInput();
                    document.getElementById('submitBtn').innerHTML = 'Send Message';
                },
                (error) => {
                    console.log(error.text);
                    Notiflix.Report.failure(
                        'An error occurred',
                        'Please try sending the message again.',
                        'Okay'
                    );
                }
            );
    };

    return (
        <div id='get-demo'>
            <div className='flex justify-center items-center mt-2 w-full bg-white py-4 lg:py-4'>
                <div className='container mx-auto my-8 px-4 lg:px-20' data-aos='zoom-in'>
                    <form onSubmit={sendEmail} id='demoProductForm'>
                        <div className='w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl'>
                            <div className='flex'>
                                <h1 className='font-bold text-center lg:text-left text-blue-900 uppercase text-4xl'>
                                    Demo our products
                                </h1>
                            </div>

                            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
                                <div>
                                    <input
                                        name='pickup_address'
                                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                        type='text'
                                        placeholder='Pickup Address*'
                                        value={pickupAddress}
                                        onChange={(e) => setPickupAddress(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && (
                                        <p className='text-red-500 text-sm'>{errors.pickup_address}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name='product_name'
                                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                        type='text'
                                        placeholder='Product Name*'
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && (
                                        <p className='text-red-500 text-sm'>{errors.product_name}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name='product_weight'
                                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                        type='text'
                                        placeholder

='Product Weight*'
                                        value={productWeight}
                                        onChange={(e) => setProductWeight(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && (
                                        <p className='text-red-500 text-sm'>{errors.product_weight}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name='first_name'
                                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                        type='text'
                                        placeholder='First Name*'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && (
                                        <p className='text-red-500 text-sm'>{errors.first_name}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name='last_name'
                                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                        type='text'
                                        placeholder='Last Name*'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && (
                                        <p className='text-red-500 text-sm'>{errors.last_name}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name='email'
                                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                        type='email'
                                        placeholder='Email*'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && (
                                        <p className='text-red-500 text-sm'>{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name='phone_number'
                                        className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                        type='number'
                                        placeholder='Phone*'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && (
                                        <p className='text-red-500 text-sm'>{errors.phone_number}</p>
                                    )}
                                </div>
                            </div>

                            <div className='my-4'>
                                <textarea
                                    name='message'
                                    placeholder='Message*'
                                    className='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && <p className='text-red-500 text-sm'>{errors.message}</p>}
                            </div>

                            <div className='my-2 w-1/2 lg:w-2/4'>
                                <button
                                    type='submit'
                                    id='submitBtn'
                                    className='uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline'
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DemoProduct;