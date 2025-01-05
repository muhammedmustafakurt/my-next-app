'use client';
import React, { useState } from 'react';
import { createUser } from './actions'; // The function for user creation
import '../login/style.css'; // Ensure CSS styling

const CreateUserPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = await createUser(username, password);
      setSuccess(`Kullanıcı başarıyla oluşturuldu: ${user.username}`);
      setError('');
    } catch (err: any) {
      setError(`Hata: ${err.message}`);
      setSuccess('');
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit}>
        <h3>Kullanıcı Oluştur</h3>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <label htmlFor="username">Kullanıcı Adı:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Kullanıcı Adı"
          required
        />

        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
          required
        />

        <button type="submit">Kullanıcı Oluştur</button>
      </form>
    </div>
  );
};

export default CreateUserPage;
