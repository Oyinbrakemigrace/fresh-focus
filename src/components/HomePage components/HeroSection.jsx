import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-6xl text-zinc-700 text-center leading-tight'>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing.</h1>
            <p className='text-center text-zinc-700 mt-5 w-1/2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eos laudantium officiis reiciendis commodi tempora sed eveniet fuga harum,
                quaerat molestiae facilis iste corporis, culpa debitis ullam minima quia
                delectus vero!
            </p>
            <div className='space-x-7 mt-9'>
                <Link className='bg-purple-color px-6 py-2 rounded-3xl text-zinc-100 font-medium hover:bg-zinc-100 hover:text-zinc-700 hover:border hover:border-zinc-700'>Let's Talk</Link>
                <Link className='border border-zinc-700 px-6 py-2 rounded-3xl text-zinc-700 font-medium hover:bg-purple-color hover:text-zinc-100 hover:border-none'>Discover more</Link>
            </div>
        </div>
    )
}

export default HeroSection