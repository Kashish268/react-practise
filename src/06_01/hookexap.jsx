import { useState } from "react";

function StateExam(){
    const [name] = useState("Kashish");
    return <div>
        Hello from  {name}!
    </div>
}

export default StateExam;