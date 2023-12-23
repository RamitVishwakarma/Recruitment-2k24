export default function Input({label,type,onChange,value}){
    return(
        <div className="flex flex-col">
            <label className="ml-[0.19rem] text-label text-[2rem] font-Satoshi font-light leading-normal" htmlFor={label}>{label}</label>
            <input className="bg-input rounded-[0.625rem] w-[25rem] h-[4.375rem]" type={type} id={label} value={value} onChange={onChange}/>
        </div>
    );
}