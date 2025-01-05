"use client"; 
import { useEffect, useState } from 'react';
import '../admin/styles/global.css'; // CSS dosyanı doğru dizine göre çağır.
import Sidebar from "../admin/companents/sidebar/sidebar";
import Footer from "../admin/companents/footer/footer";
import { getCookie } from 'cookies-next';

const SinglePage = () => {
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    // Check if the "redirected" query parameter is present in the URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('redirected') === 'true' && !hasRedirected) {
      // Set the state to avoid reloading multiple times
      setHasRedirected(true);
      // Redirect to the admin page
      window.location.href = '/admin'; // Replace '/admin' with your desired admin page URL
    }
  }, [hasRedirected]); // Only runs when hasRedirected changes

  return (
    
      <div>aa</div>
  );
};

export default SinglePage;
