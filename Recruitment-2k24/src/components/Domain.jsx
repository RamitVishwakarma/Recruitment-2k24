export default function Domain({icon,text}){
return(
    <>
    <button className="w-60 h-60 rounded-[1.25rem] bg-button-bg flex justify-center flex-col items-center mr-[3.12rem] mt-[3.12rem]">
        <img className="w-[4.75rem] h-[3.75rem] " src={icon} alt="svg" />
        <p className="text-domain text-[1.5625rem] font-Satoshi ">{text}</p>
    </button>
    </>
);

}