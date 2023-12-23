import Navbar from "../navbar";
import Domain from "../Domain";
import Prog from "../../assets/prog.svg";
import Web from "../../assets/web.svg";
import Design from "../../assets/design.svg";
import Ml from "../../assets/ml.svg";
import Android from "../../assets/android.svg";

export default function DomainSelction() {
return (
    <>
        <Navbar btnName={"Home"} />
        <div className="bg-dark-background h-[90vh]">
            <h1 className="text-8xl w-[69.25rem] font-Zodiac text-header m-auto font-extrabold text-center p-[1rem]">
                Choose a domain to get started
            </h1>
            <div className="flex w-[59.9375rem] h-[33.125rem] flex-wrap items-center justify-center m-auto">
                <Domain icon={Prog} text={"Programming"} />
                <Domain icon={Web} text={"Web Club"} />
                <Domain icon={Design} text={"Design"} />
                <Domain icon={Ml} text={"Machine\nLearning"} />
                <Domain icon={Android} text={"Android"} />
            </div>
        </div>
    </>
);
}
