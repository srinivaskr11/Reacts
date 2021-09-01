import{Link} from 'react-router-dom';
function Navbar(){
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'role='navigation'>
            <div className='pl-8'>Fitness Solutions</div>
            <div className='px-4 md:hidden cursor-pointers'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
            </div>

            <div className='pr-8 md:block hidden'>
            
                <Link to='/' className='pr-4'>Some Link</Link>
                <Link to='/' className='pr-4'>Some Link</Link>
                <Link to='/Services' className='pr-4'>Some Link</Link>
                <Link to='/Services' className='pr-4'>Some Link</Link>
            
            </div>
        </nav>

 
    );
}
export default  Navbar;