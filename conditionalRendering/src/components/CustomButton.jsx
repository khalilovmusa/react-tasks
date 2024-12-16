import { useEffect, useState } from "react";

const CustomButton = ({text, warnMessage, hint}) => {
    const [warnMessageState, setWarnMessageState] = useState(warnMessage);
    const [hintState, setHintState] = useState(hint);

    return(
        <>
          <button className={`button` + warnMessage && "button-warn" }>{text}</button>
        </>
    )
}

export default CustomButton;   