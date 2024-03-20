export default function Layout (
    { children } : { children: React.ReactNode} 
    )
{
    return ( /* That&apos;s the invoice layout */            
        <section>
            {children}
        </section>
    )
}