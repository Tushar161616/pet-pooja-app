import { RiApps2AiLine } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { GiRoundShield } from "react-icons/gi";

const Categroy = [

    {
        id : 1,
        name : "All",
        icon : <RiApps2AiLine className="w-10 h-10 text-red-500"/>,
    },
    {
        id : 2,
        name : "breakfast",
        icon : <MdOutlineFreeBreakfast className="w-10 h-10 text-red-500"/>,
    },
    {
        id : 3,
        name : "soup",
        icon : <LuSoup className="w-10 h-10 text-red-500"/>,
    },
    {
        id : 4,
        name : "pasta",
        icon : <CiBowlNoodles className="w-10 h-10 text-red-500"/>,
    },
    {
        id : 5,
        name : "pizza",
        icon : <GiFullPizza className="w-10 h-10 text-red-500"/>,
    },
    {
        id : 6,
        name : "burger",
        icon : <GiHamburger className="w-10 h-10 text-red-500"/>,
    },
    {
        id : 7,
        name : "thali",
        icon : <GiRoundShield className="w-10 h-10 text-red-500"/>,
    },
]

export default  Categroy;