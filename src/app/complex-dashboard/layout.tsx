

export default function AuthLayout({
    children,
    users,
    revenue,
    notifications,
    login
  }: Readonly<{
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode;
    notifications: React.ReactNode;
  }>) {
    const isloggin = true

    return isloggin ?(
        <div>
          <div>{children} </div>
          <div>{users}</div>
          <div>{revenue}</div>
          <div>{notifications}</div>
        </div>
    
    ):(
      
        login
     
    );
  }
  