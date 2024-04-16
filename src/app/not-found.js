import Link from 'next/link'

export default function NotFound() {
    return (
        <div className=' min-h-screen flex justify-center items-center'>
            <div className=' shadow-md rounded-md p-5 border'>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link className='btn' href="/">Return Home</Link>
            </div>
        </div>
    )
}