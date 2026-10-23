export default function LayoutLivros({children}){
    return(
        <section>
            <p style={{fontSize: '0.9rem', color: 'darkgreen', marginBottom: 'irem'}}>
                Acervo - Livros
            </p>
            {children}
        </section>
    )
}