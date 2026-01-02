import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type User = {
  id: string;
  email: string;
  role: string;
};

type Session = {
  user: User;
  access_token: string;
};

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const token = localStorage.getItem('auth_token');
    if (token) {
      fetch('http://localhost:3000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error('Failed to fetch user');
        })
        .then((data) => {
          // data structure from /me is { user: ... }
          setUser(data.user);
          setSession({ user: data.user, access_token: token });
        })
        .catch(() => {
          localStorage.removeItem('auth_token');
          setUser(null);
          setSession(null);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await res.json();
      setUser(data.user);
      setSession({ user: data.user, access_token: data.token });
      localStorage.setItem('auth_token', data.token);
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const signUp = async () => {
    return { error: new Error("Sign up not implemented") };
  };

  const signOut = async () => {
    localStorage.removeItem('auth_token');
    setUser(null);
    setSession(null);
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, session, isLoading, isAdmin, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
