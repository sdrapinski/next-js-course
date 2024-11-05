

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
        <div>
          <h1>Inner layout</h1>
          {children}
        </div>
    
    );
  }
  