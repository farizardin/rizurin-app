import React, { useState, useEffect } from 'react';
import { UserCircle } from 'lucide-react';
import apiClient from '../../api/apiClient';
import './AuthButton.css';

const AuthButton = () => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const userAppUrl = isDevelopment ? 'http://localhost:5174' : 'https://user.rizurin.my.id';
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const res = await apiClient.get('/auth/me');
                if (res.data && res.data.success) {
                    setUser(res.data.data);
                }
            } catch (err) {
                // Not logged in or error
                setUser(null);
            }
        };
        loadUser();
    }, []);

    return (
        <a href={userAppUrl} className="auth-button" title="User Portal">
            <UserCircle size={24} />
            <span className="auth-name">
                {user ? (user.name || user.email.split('@')[0]) : 'Login'}
            </span>
        </a>
    );
};

export default AuthButton;
