import { Button } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";


const ShareButton = ({auditId})=>{


const handleCopy = async()=>{


const url =
`${window.location.origin}/share/${auditId}`;


await navigator.clipboard.writeText(url);


alert("Share link copied!");

};



return (

<Button
mt={8}
onClick={handleCopy}
colorPalette="blue"
>

<FiCopy/>

&nbsp;

Copy Share Link

</Button>

);


};


export default ShareButton;