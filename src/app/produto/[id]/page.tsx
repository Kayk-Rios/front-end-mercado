'use client'
import Pagina from "@/components/template/Pagina";
import { Produto } from "@/core";
import useProdutos from "@/data/hooks/useProdutos";
import { useEffect, useState } from "react";

 

export default function PaginaProduto(props : any){
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId ]);


    return(
        
       
        <Pagina>
             {produto ? (  <div>{produto?.nome}</div>): <div>Produto nao emcontrado</div> }
        </Pagina>
    )
}