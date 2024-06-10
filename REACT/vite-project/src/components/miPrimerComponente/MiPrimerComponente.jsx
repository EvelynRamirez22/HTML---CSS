import { Estado } from "./estado/Estado";

export function MiPrimerComponente({lastName,name}){
    return(
        <>
        {lastName} {name}
        <img src="./imgs/fotos.jpg" alt=""/>
        <Estado/>
        </>
    )
}