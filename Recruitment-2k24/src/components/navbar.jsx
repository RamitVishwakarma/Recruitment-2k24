import "../App.css"
import gdsc_logo from "/gdsc_logo.svg";
import '@fontsource-variable/inter';

const Navbar = ({btnName}) => {
    return ( 
        <>
            <div className="bg-dark-blue w-screen m-0 h-[10vh] flex items-center justify-between">
                <img className="h-10 ml-20" src={gdsc_logo} alt="gdsc_logo" />
                <button className="text-green-light border-[3px] border-green-dark rounded-lg px-8 py-2 bg-green-bg mr-20 font-Satoshi font-bold ease-in-out duration-200 hover:bg-green-950">{btnName}</button>
            </div>
        </>
    );
}

export default Navbar;