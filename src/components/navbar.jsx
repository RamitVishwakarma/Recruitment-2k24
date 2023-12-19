import "../App.css"
import gdsc_logo from "/gdsc_logo.svg";
import '@fontsource-variable/inter';

const Navbar = () => {
    return ( 
        <>
            <div className="bg-dark-blue w-screen m-0 h-[10vh] flex items-center justify-between">
                <img className="h-10 ml-20" src={gdsc_logo} alt="gdsc_logo" />
                <button className="text-green-light border-2 border-green-dark rounded-lg px-8 py-2 bg-green-bg mr-20 font-[inter] font-bold">Login</button>
            </div>
        </>
    );
}

export default Navbar;