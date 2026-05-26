export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="text-lg flex text-red-600">Ooops!!!</h1>
            <p className="text-md p-20 text-center">Parece que você está tentando acessar uma página que não existe! 😅</p>
            <a href="/" className="text-sm text-blue-500">Clique aqui para voltar para o início</a>
        </div>
    )
}