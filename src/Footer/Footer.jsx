

const Footer = () => {
    return (
<footer className="bg-[#EC6F66] rounded-lg shadow  m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a className="flex items-center mb-4 sm:mb-0">
        <img src="https://i.ibb.co/tLWRpPZ/touchup-logo-1.jpg" className="h-8 rounded-full mr-3"  />
        <span className="self-center text-2xl font-semibold text-white whitespace-nowrap ">Touch Up</span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
    <span className="block text-sm text-white sm:text-center ">© 2023 <a  className="hover:underline">Touch Up</a>. All Rights Reserved.</span>
  </div>
</footer>



    );
};

export default Footer;