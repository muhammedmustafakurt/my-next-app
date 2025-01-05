'use client';
import React, { useState } from 'react';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // React Icons kullanarak simgeler
import Script from 'next/script';
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true); // Sidebar açılma/kapanma durumu

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Sidebar'ı açıp kapatma fonksiyonu
  };

  return (
<>
  {/*[if IE 8 ]><html class="ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"> <![endif]*/}
  {/*[if (gte IE 9)|!(IE)]><!*/}
  {/*<![endif]*/}
  {/* Basic Page Needs */}
  <meta charSet="utf-8" />
  {/*[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]*/}
  <title>Han Çiçek Admin Paneli</title>
  <meta name="author" content="themesflat.com" />
  {/* Mobile Specific Metas */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1"
  />
  {/* Theme Style */}
  <link rel="stylesheet" type="text/css" href="./adminassets/css/animate.min.css" />
  <link rel="stylesheet" type="text/css" href="./adminassets/css/animation.css" />
  <link rel="stylesheet" type="text/css" href="./adminassets/css/bootstrap.css" />
  <link rel="stylesheet" type="text/css" href="./adminassets/css/bootstrap-select.min.css" />
  <link rel="stylesheet" type="text/css" href="./adminassets/css/style.css" />
  {/* Font */}
  <link rel="stylesheet" href="./adminassets/font/fonts.css" />
  {/* Icon */}
  <link rel="stylesheet" href="./adminassets/icon/style.css" />
  {/* Favicon and Touch Icons  */}
  <link rel="shortcut icon" href="./images/favicon.ico" />
  <link rel="apple-touch-icon-precomposed" href="./images/favicon.ico" />
  {/* #wrapper */}
  <div id="wrapper">
    {/* #page */}
    <div id="page" className="">
      {/* layout-wrap */}
      <div className="layout-wrap">
        {/* preload */}
        <div id="preload" className="preload-container">
          <div className="preloading">
            <span />
          </div>
        </div>
        {/* /preload */}
        {/* section-menu-left */}
        <div className="section-menu-left">
          <div className="box-logo">
            <a href="index.html" id="site-logo-inner">
              <img src="./assets/images/logo/logo.png" alt="" />
            </a>
            <div className="button-show-hide">
              <i className="icon-menu-left" />
            </div>
          </div>
          <div className="section-menu-left-wrap">
            <div className="center">
              <div className="center-item">
                <div className="center-heading">Main Home</div>
                <li className="menu-item">
                    <a href="gallery.html" className="">
                      <div className="icon">
                        <i className="icon-grid" />
                      </div>
                      <div className="text">Ana Sayfa</div>
                    </a>
                  </li>
              </div>
              <div className="center-item">
                <div className="center-heading">All page</div>
                <ul className="menu-list">
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-shopping-cart" />
                      </div>
                      <div className="text">Ürünler</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="add-product.html" className="">
                          <div className="text">Ürün Ekle</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="product-list.html" className="">
                          <div className="text">Ürün Listesi</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-layers" />
                      </div>
                      <div className="text">Kategori</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="category-list.html" className="">
                          <div className="text">Kategori Listesi</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="new-category.html" className="">
                          <div className="text">Yeni kategori</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-layers" />
                      </div>
                      <div className="text">Ana Sayfa Düzenle</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="category-list.html" className="">
                          <div className="text">Slider Düzenle</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="new-category.html" className="">
                          <div className="text">Kategori Düzenle</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="new-category.html" className="">
                          <div className="text">İndirimdeki Ürünler Düzenle</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="new-category.html" className="">
                          <div className="text">Sayaç Ürünler Düzenle</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="new-category.html" className="">
                          <div className="text">Sayaç Ürünler Düzenle</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-box" />
                      </div>
                      <div className="text">Attributes</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="attributes.html" className="">
                          <div className="text">Attributes</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="add-attributes.html" className="">
                          <div className="text">Add attributes</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-file-plus" />
                      </div>
                      <div className="text">Order</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="oder-list.html" className="">
                          <div className="text">Order list</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="oder-detail.html" className="">
                          <div className="text">Order detail</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="oder-tracking.html" className="">
                          <div className="text">Order tracking</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-user" />
                      </div>
                      <div className="text">User</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="all-user.html" className="">
                          <div className="text">All user</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="add-new-user.html" className="">
                          <div className="text">Add new user</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="login.html" className="">
                          <div className="text">Login</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="sign-up.html" className="">
                          <div className="text">Sign up</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-user-plus" />
                      </div>
                      <div className="text">Roles</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="all-roles.html" className="">
                          <div className="text">All roles</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="create-role.html" className="">
                          <div className="text">Create role</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="menu-item">
                    <a href="report.html" className="">
                      <div className="icon">
                        <i className="icon-pie-chart" />
                      </div>
                      <div className="text">Report</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="center-item">
                <div className="center-heading">Setting</div>
                <ul className="menu-list">
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-map-pin" />
                      </div>
                      <div className="text">Location</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="countries.html" className="">
                          <div className="text">Countries</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="states.html" className="">
                          <div className="text">States</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="cities.html" className="">
                          <div className="text">Cities</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="setting.html" className="">
                      <div className="icon">
                        <i className="icon-settings" />
                      </div>
                      <div className="text">Setting</div>
                    </a>
                  </li>
                  <li className="menu-item has-children">
                    <a href="javascript:void(0);" className="menu-item-button">
                      <div className="icon">
                        <i className="icon-edit" />
                      </div>
                      <div className="text">Pages</div>
                    </a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">
                        <a href="list-page.html" className="">
                          <div className="text">List page</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="new-page.html" className="">
                          <div className="text">New page</div>
                        </a>
                      </li>
                      <li className="sub-menu-item">
                        <a href="edit-page.html" className="">
                          <div className="text">Edit page</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="center-item">
                <div className="center-heading">Components</div>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="components.html" className="">
                      <div className="icon">
                        <i className="icon-database" />
                      </div>
                      <div className="text">Components</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="center-item">
                <div className="center-heading">Support</div>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#" className="">
                      <div className="icon">
                        <i className="icon-help-circle" />
                      </div>
                      <div className="text">Help center</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="">
                      <div className="icon">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7727 4.27031C15.025 3.51514 14.1357 2.91486 13.1558 2.50383C12.1758 2.09281 11.1244 1.87912 10.0617 1.875H10C7.84512 1.875 5.77849 2.73102 4.25476 4.25476C2.73102 5.77849 1.875 7.84512 1.875 10V14.375C1.875 14.8723 2.07254 15.3492 2.42417 15.7008C2.77581 16.0525 3.25272 16.25 3.75 16.25H5C5.49728 16.25 5.9742 16.0525 6.32583 15.7008C6.67746 15.3492 6.875 14.8723 6.875 14.375V11.25C6.875 10.7527 6.67746 10.2758 6.32583 9.92417C5.9742 9.57254 5.49728 9.375 5 9.375H3.15313C3.27366 8.07182 3.76315 6.83 4.56424 5.79508C5.36532 4.76016 6.44481 3.97502 7.67617 3.53169C8.90753 3.08836 10.2398 3.0052 11.5167 3.29196C12.7936 3.57872 13.9624 4.22352 14.8859 5.15078C16.0148 6.28539 16.7091 7.78052 16.8477 9.375H15C14.5027 9.375 14.0258 9.57254 13.6742 9.92417C13.3225 10.2758 13.125 10.7527 13.125 11.25V14.375C13.125 14.8723 13.3225 15.3492 13.6742 15.7008C14.0258 16.0525 14.5027 16.25 15 16.25H16.875C16.875 16.7473 16.6775 17.2242 16.3258 17.5758C15.9742 17.9275 15.4973 18.125 15 18.125H10.625C10.4592 18.125 10.3003 18.1908 10.1831 18.3081C10.0658 18.4253 10 18.5842 10 18.75C10 18.9158 10.0658 19.0747 10.1831 19.1919C10.3003 19.3092 10.4592 19.375 10.625 19.375H15C15.8288 19.375 16.6237 19.0458 17.2097 18.4597C17.7958 17.8737 18.125 17.0788 18.125 16.25V10C18.1291 8.93717 17.9234 7.88398 17.5197 6.90077C17.1161 5.91757 16.5224 5.02368 15.7727 4.27031ZM5 10.625C5.16576 10.625 5.32473 10.6908 5.44194 10.8081C5.55915 10.9253 5.625 11.0842 5.625 11.25V14.375C5.625 14.5408 5.55915 14.6997 5.44194 14.8169C5.32473 14.9342 5.16576 15 5 15H3.75C3.58424 15 3.42527 14.9342 3.30806 14.8169C3.19085 14.6997 3.125 14.5408 3.125 14.375V10.625H5ZM15 15C14.8342 15 14.6753 14.9342 14.5581 14.8169C14.4408 14.6997 14.375 14.5408 14.375 14.375V11.25C14.375 11.0842 14.4408 10.9253 14.5581 10.8081C14.6753 10.6908 14.8342 10.625 15 10.625H16.875V15H15Z"
                            fill="#111111"
                          />
                        </svg>
                      </div>
                      <div className="text">FAQs</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="">
                      <div className="icon">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_604_18468)">
                            <path
                              d="M4.71875 7V1H15.5561L18.9991 4.44801V19H4.71875C4.71875 19 4.71875 16.2 4.71875 13.5"
                              stroke="#111111"
                              strokeWidth="1.2"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.0015 4.44801H15.5586V1L19.0015 4.44801Z"
                              stroke="#111111"
                              strokeWidth="1.2"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.53469 14.5507C9.89243 14.5507 11.8037 12.6366 11.8037 10.2754C11.8037 7.91415 9.89243 6 7.53469 6C5.17695 6 3.26562 7.91415 3.26562 10.2754C3.26562 12.6366 5.17695 14.5507 7.53469 14.5507Z"
                              stroke="#111111"
                              strokeWidth="1.2"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.41029 13.9852L2.90967 16.4895C2.47263 16.9272 1.76451 16.9272 1.3275 16.4895C0.890833 16.0522 0.890833 15.3427 1.3275 14.9054L3.82812 12.4011M6.14799 10.2051L7.11794 11.175L8.91794 9.375"
                              stroke="#111111"
                              strokeWidth="1.2"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_604_18468">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text">Privacy policy</div>
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
            
          </div>
        </div>
        {/* /section-menu-left */}
        {/* section-content-right */}
        <div className="section-content-right">
          {/* header-dashboard */}
          <div className="header-dashboard">
            <div className="wrap">
              <div className="header-left">
                <a href="index.html">
                  
                </a>
                <div className="button-show-hide">
                  <i className="icon-menu-left" />
                </div>
                
              </div>
              <div className="header-grid">
                
                <div className="header-item button-dark-light">
                  <i className="icon-moon" />
                </div>
                <div className="header-item button-zoom-maximize">
                  <div className="">
                    <i className="icon-maximize" />
                  </div>
                </div>
                
                <div className="popup-wrap user type-header">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="header-user wg-user">
                  
                        <span className="flex flex-column">
                          <span className="body-title mb-2">
                            Han Çiçekçilik
                          </span>
                          <span className="text-tiny">Admin</span>
                        </span>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end has-content"
                      aria-labelledby="dropdownMenuButton3"
                    >
                      <li>
                        <a href="#" className="user-item">
                          <div className="icon">
                            <i className="icon-user" />
                          </div>
                          <div className="body-title-2">Account</div>
                        </a>
                      </li>
                      <li>
                        <a href="login.html" className="user-item">
                          <div className="icon">
                            <i className="icon-log-out" />
                          </div>
                          <div className="body-title-2">Log out</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /header-dashboard */}
        </div>
        {/* /section-content-right */}
      </div>
      {/* /layout-wrap */}
    </div>
    {/* /#page */}
  </div>
  {/* /#wrapper */}

<Script
        src="./adminassets/js/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="./adminassets/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="./adminassets/js/bootstrap-select.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="./adminassets/js/zoom.js"
        strategy="beforeInteractive"
      />

      <Script
        src="./adminassets/js/apexcharts/apexcharts.js"
        strategy="lazyOnload"
      />
      <Script
        src="./adminassets/js/apexcharts/line-chart-1.js"
        strategy="lazyOnload"
      />
      <Script
        src="./adminassets/js/apexcharts/line-chart-2.js"
        strategy="lazyOnload"
      />
      <Script
        src="./adminassets/js/apexcharts/line-chart-3.js"
        strategy="lazyOnload"
      />
      <Script
        src="./adminassets/js/apexcharts/line-chart-4.js"
        strategy="lazyOnload"
      />
      <Script
        src="./adminassets/js/apexcharts/line-chart-5.js"
        strategy="lazyOnload"
      />
      <Script
        src="./adminassets/js/apexcharts/line-chart-6.js"
        strategy="lazyOnload"
      />

      <Script
        src="./adminassets/js/theme-settings.js"
        strategy="lazyOnload"
      />
      <Script
        src="./adminassets/js/main.js"
        strategy="lazyOnload"
      />
  {/* /#wrapper */}
</>


  );
};

export default Sidebar;
