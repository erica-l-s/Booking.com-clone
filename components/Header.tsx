'use client'
import { Bars3Icon, ChatBubbleLeftIcon, ChevronDownIcon, HomeIcon, PaperAirplaneIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"

const products = [
    {
        name: "Book a Stay",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: HomeIcon,
    },
    {
        name: "Book a Flight",
        description: "Speak directly to your customers",
        href: "#",
        icon: PaperAirplaneIcon,
    },
    {
        name: "Contact our Support Team",
        description: "Your customers data will be safe and secure",
        href: "#",
        icon: ChatBubbleLeftIcon,
    },

];

const callsToAction = [
    { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon },
]
export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='bg-[#013894]'>
            <nav className='mx-auto flex max-w-7xl items-center 
               justify-between p-6 lg:px-8' aria-label='Global'>
                <div className='flex lg:flex-1'>
                    <Link href="/" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Booking.com</span>
                        <img
                            className='h-6 w-auto'
                            src='https://upload.wikimedia.org/wikipedia/commons/5/50/Booking.com_Logo_Grey.svg'
                            alt=''
                        />
                    </Link>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        className='-m2.5 inline-flex items-center justify-center
                    rounded-md p-2.5 text-white'
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                            Stays
                            <ChevronDownIcon className='h-5 w-5 flex-none text-white'
                                aria-hidden="true" />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                        >
                            <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden 
                            rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                                <div className='p-4'>
                                    {products.map((item) => (
                                        <div key={item.name}
                                            className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                                            <div className='flex h-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200'>
                                                <item.icon
                                                    className='h-6 w-6 text-[#013894] group-hover:text-blue-600' aria-hidden='true' />

                                            </div>
                                            <div className='flex-auto'>
                                                <a href={item.href}
                                                    className='block font-semibold text-[#013894'>
                                                    {item.name}
                                                    <span className='absolute inset-0'></span>
                                                </a>
                                                <p
                                                    className='mt-1 text-[#013894]'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                                {callsToAction.map((item)=>(
                                    <a key={item.name}
                                    href={item.href}
                                    className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013894] hover:bg-gray-100'>
                                        <item.icon 
                                        className='h-5 w-5 flex-none text-[#013894]'
                                        aria-hidden="true"/>
                                        {item.name}
                                    </a>
                                ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <a href='#' className='text-sm font-semibold leanding-6 text-white'>Flights</a>
                    <a href='#' className='text-sm font-semibold leanding-6 text-white'>Car Rentals</a>
                    <a href='#' className='text-sm font-semibold leanding-6 text-white'>Attractions</a>
                    <a href='#' className='text-sm font-semibold leanding-6 text-white'>Flight + Hotel</a>
                </Popover.Group>

            </nav>
        </header>
    )
}
