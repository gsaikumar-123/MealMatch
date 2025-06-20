import { useEffect, useState } from "react"
import { MENU_API } from "./constants";


const useRestrauntMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();

        setResInfo(json);
    }


    return resInfo;
}

export default useRestrauntMenu;


// This is user defined custom hook and these are placed in utils folder