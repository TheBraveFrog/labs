import Link from "next/link"
import {FaRecordVinyl} from "react-icons/fa" 
import {AiFillGithub} from "react-icons/ai" 
 function NavBar ( {children}){
    return (
        <nav className="py-4 px-4  ">
            <ul className="flex justify-between items-center">
                <li><Link className="text-rose-600 font-medium" href="/">
                          <figure className="flex items-center text-red-500 gap-1">
                            <figcaption className="text-lg">Record Shop</figcaption>
                            <FaRecordVinyl size={20}/>
                          </figure>
                    </Link></li>
                <li><Link className="text-red-500 font-large" href="/records">Records</Link></li>
                <li>
                    <figure className="text-rose-600 font-medium flex items-center">
                    <figcaption><Link className="text-red-500 font-large" href="https://github.com/TheBraveFrog/LABS-DMIT-2008" target="_blank">Github</Link></figcaption>
                    <AiFillGithub size={20}/>
                </figure>
                </li>
            </ul>
        </nav>
    )
 }



 export {NavBar}