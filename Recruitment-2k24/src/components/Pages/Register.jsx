import Navbar from "../navbar";
import RegistrationForm from "../RegistrationForm";
import SelectorButton from "../SelectorButton";
export default function Register(){
    return(
    <>
    <Navbar btnName={"Home"}/>
    <div className="bg-dark-background h-[90vh]">
        <h1 className="text-8xl text-center font-Zodiac text-header font-extrabold">Let's get started!</h1>
        <SelectorButton/>
        <RegistrationForm />
    </div>
    </>
    );
}