import { useState } from "react";
import { Page1, Page2, Page3 } from "./file2";
import { UserProvider } from "./file1";

function SelectPage(i){
    const Page = [Page1, Page2, Page3][i];
    return <Page/>
}

export default function UseContextExample(){
    const [currentPage , setCurrentPage] = useState(0);

    return(
        <div>
        <UserProvider>

        <button onClick={()=>setCurrentPage(0)} disabled={currentPage === 0}>
        Page 1
        </button>

        <button onClick={()=>setCurrentPage(1)} disabled={currentPage === 1}>
        Page 2
        </button>

        <button onClick={()=>setCurrentPage(2)} disabled={currentPage === 2}>
        Page 3
        </button>
        </UserProvider>

        <SelectPage i={currentPage}/>
        </div>
    );
}