"use client";
import React, { useEffect, useState } from 'react';
import { loginUser } from './actions';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next'; // getCookie ekledik

const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  // Eğer cookie varsa admin sayfasına yönlendirme
  useEffect(() => {
    const userCookie = getCookie('user');
    if (userCookie) {
      router.push('/admin?redirected=true');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const user = await loginUser(formData);
      alert(`Hoş geldiniz, ${user.username}!`);

      // Kullanıcının login durumunu belirten bir cookie ayarla
      setCookie('user', user.username, { maxAge: 60 * 60 * 24 }); // 1 gün süreli

      // Login sonrası admin sayfasına yönlendir
      router.push('/admin?redirected=true');
    } catch (error: any) {
      alert(`Hata: ${error.message}`);
    }
  };

  return (
    <div id="page">
      <div className="wrap-login-page">
        <div className="flex-grow flex flex-column justify-center gap30">
          <a href="index.html" id="site-logo-inner"></a>
          <div className="login-box">
            <div>
              <h3>Login to account</h3>
              <div className="body-text">
                Enter your email &amp; password to login
              </div>
            </div>
            <form className="form-login flex flex-column gap24" onSubmit={handleSubmit}>
              <fieldset className="email">
                <div className="body-title mb-10">
                  Username <span className="tf-color-1">*</span>
                </div>
                <input
                  className="flex-grow"
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-required="true"
                />
              </fieldset>
              <fieldset className="password">
                <div className="body-title mb-10">
                  Password <span className="tf-color-1">*</span>
                </div>
                <input
                  className="password-input"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-required="true"
                />
                <span className="show-pass">
                  <i className="icon-eye view" />
                  <i className="icon-eye-off hide" />
                </span>
              </fieldset>
              <div className="flex justify-between items-center">
                <div className="flex gap10">
                  <input className="" type="checkbox" id="signed" />
                  <label className="body-text" htmlFor="signed">
                    Keep me signed in
                  </label>
                </div>
                <a href="#" className="body-text tf-color">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="tf-button w-full">
                Login
              </button>
            </form>
            <div>
              <div className="text-tiny mb-16 text-center">
                Or continue with social account
              </div>
              <div className="flex gap16 mobile-wrap">
                <button className="tf-button style-2 w-full">
                  <span className="tf-color-3">Sign in with Google</span>
                </button>
                <button className="tf-button style-2 w-full">
                  <span className="tf-color-3">Sign in with Facebook</span>
                </button>
              </div>
            </div>
            <div className="body-text text-center">
              You don't have an account yet?
              <a href="sign-up.html" className="body-text tf-color">
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div className="text-tiny">
          Copyright © 2024 Remos, All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
