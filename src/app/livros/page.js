import Link from 'next/link';
import { livros } from '@/lib/dados-exemplo';

export default function ListaLivros(){
    return(
        <div>
            <h1>Livros</h1>
            <ul>
                {livros.map((livro) => (
                    <li key={livro.id}>
                        <Link href={`/livros/${livro.id}`}>{livro.titulo}</Link> - {livro.autor}
                    </li>
                ))}
            </ul>
        </div>
    )
}