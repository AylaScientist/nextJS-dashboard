export default function Layout (
    { children } : { children: React.ReactNode} 
    )
{
    return (
        <section>
            That's the invoice layout
            {children}
        </section>
    )
}