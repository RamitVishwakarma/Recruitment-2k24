export default function SelectorButton() {
return (
    <div className="flex justify-center m-6">
        <div className="static">
        <button className="w-[13.125rem] h-[3.93rem] rounded-[3.125rem] border-2 border-solid border-selector bg-selector-bg text-selector-txt text-[1.75rem] font-Satoshi font-bold absolute">
            Register
        </button>
        <button className="w-[25.3125rem] h-[3.9375rem] rounded-[3.125rem] bg-selector-bg text-non-selected-text font-Satoshi font-normal text-[1.75rem] pl-[11rem] ">
            Log in
        </button>
        </div>
    </div>
);
}
