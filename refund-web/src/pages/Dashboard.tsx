import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { RefundItem } from "../components/RefundItem"

import React, { useState } from "react"

import searchSvg from "../assets/search.svg"
import { CATEGORIES } from "../utils/categories"

const REFUND_EXEMPLE= {
    id: "123",
    name: "Coisa",
    category: "Coisa2",
    amount: "35,50",
    categoryImg: CATEGORIES["transports"].icon,

}

export function Dashboard() {
    const [name, setName] = useState("")

    function fetchRefounds(e: React.FormEvent) {
        e.preventDefault()
        console.log(name)
    }

    return (
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
            <form className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6" onSubmit={fetchRefounds}>
                <Input required placeholder="Pesquisar pelo nome" onChange={(e) => setName(e.target.value)}/>

            <Button variant="icon"><img src={searchSvg} alt="Procurar" /></Button>
            </form>

            <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
                <RefundItem data={REFUND_EXEMPLE}></RefundItem>
            </div>
        </div>
    )
}