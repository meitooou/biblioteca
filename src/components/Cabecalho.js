import Link from 'next/link';

export default function Cabecalho(){
    return(
        <header style={{ background: '#1a3a5c', padding: '1rem'}}>
            <nav style={{ display: 'flex', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
                <Link href="/" style={{ color: 'white' }}>Início</Link>
                <Link href="/livros" style={{ color: 'white' }}>Livros</Link>
                <Link href="/sobre" style={{ color: 'white' }}>Sobre</Link>
            </nav>
        </header>
    )
}