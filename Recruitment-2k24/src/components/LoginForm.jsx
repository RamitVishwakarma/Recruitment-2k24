import Input from "./input";
export default function LoginForm(){
    return (    
    <>
    <div className="flex justify-center">
    <form action="/" className="bg-form flex flex-col items-center justify-evenly w-[41.375rem] h-[35.0625rem] rounded-[1.25rem]">
        <div><h2 className="text-4xl text-center text-form-head leading-normal">Enter your login details</h2></div>
        <div className="flex  flex-col justify-evenly">
        <Input label={"Email"} type={"email"}/>
        <Input label={"Password"} type={"password"}/>
        </div>
        <div><button className="w-[17.8125rem] h-[5.5rem] rounded-[1.25rem] border-solid border-2 border-button bg-button-bg text-white font-Satoshi text-4xl hover:bg-button-hover"type="submit" >Log in</button></div>
    </form>
    </div>
    </>
    );
}