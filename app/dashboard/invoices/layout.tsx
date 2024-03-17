export default function Layout (
    { children } : { children: React.ReactNode} 
    )
{
    return (
        <section>
            That&apos;s the invoice layout
            {children}
        </section>
    )
}