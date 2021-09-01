import { Link } from "react-router-dom";
function Footer() {
  return (
      <div className=' h-16 bg-gray-100 text-black static bottom-0 p-3 mt-12'>
      <div className='flex flex justify-center items-center space-x-28 p-2 '>
      <Link><i class="icon-foter fab fa-twitter fa-2x "></i></Link>
      <Link><i class="icon-foter fab fa-facebook fa-2x"></i></Link>
      <Link><i class="icon-foter fab fa-instagram fa-2x"></i></Link>
      </div>
      <div className='text-center'><p className='pt-2  font-medium italic leading-4 font-mono'>&copy Srinivas</p></div>
          
      </div>

 
   
  );
}
export default Footer;
