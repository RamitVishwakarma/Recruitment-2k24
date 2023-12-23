import Navbar from "../navbar";
import HomePage from "../HomePage";

export default function Home(){
    return(
        <> 
        <Navbar btnName={"Login"}/>
        <HomePage /> 
        </>
    );
}