

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div> 
        <h1>Produkty</h1>
        {children}
        </div>
  );
}
