import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="h-10vh flex justify-between lg:py-5 px-20  py -20 border-b">
                <div className="flex items-center flex-1">
                    <h2 className="text-3xl font-bold text-pink-500 "> BOWANA </h2>
                </div>
                <div>
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link to = '/'><li>Home</li></Link>
                        <Link to = '/'><li>Blogs</li></Link>
                        <Link to = '/'><li>Services</li></Link>
                        <Link to = '/'><li>Book An Appointment</li></Link>
                        <Link to = '/'><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
export default Navbar