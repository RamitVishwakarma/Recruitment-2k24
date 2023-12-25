import LoginForm from "../LoginForm";
import Navbar from "../Navbar";
import SelectorButton from "../SelectorButton";

export default function Login(){
return(
    <>
    <Navbar btnName={"Home"}/>
    <div className="bg-dark-background h-[90vh]">
        <h1 className="text-8xl text-center font-Zodiac text-header font-extrabold p-10">Let's get started!</h1>
        <SelectorButton/>
        <LoginForm/>
    </div>
</>
);
}