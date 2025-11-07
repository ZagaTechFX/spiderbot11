import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers = {
  user: {
    id: '1',
    username: 'trader',
    password: 'demo123',
    role: 'user' as const,
    name: 'John Trader',
    email: 'trader@spiderbot.io',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    kycStatus: 'Verified' as const,
    subscriptionPlan: 'Pro',
    lastLogin: new Date().toISOString(),
  },
  admin: {
    id: '2',
    username: 'admin',
    password: 'admin123',
    role: 'admin' as const,
    name: 'Admin User',
    email: 'admin@spiderbot.io',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    kycStatus: 'Verified' as const,
    subscriptionPlan: 'Enterprise',
    lastLogin: new Date().toISOString(),
  },
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('spiderbot_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('spiderbot_user');
      }
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    const userEntry = Object.values(mockUsers).find(
      (u) => u.username === username && u.password === password
    );

    if (userEntry) {
      const { password: _, ...userWithoutPassword } = userEntry;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('spiderbot_user', JSON.stringify(userWithoutPassword));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('spiderbot_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
