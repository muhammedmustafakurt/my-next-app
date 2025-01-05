import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    
    <header className="main-header-area">
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/images/favicon.jpg"
      />
      {/* Main Header Area Start */}
      <div className="main-header header-transparent header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2 col-xl-2 col-md-6 col-6 col-custom">
              <div className="header-logo d-flex align-items-center">
                <a href="index.html">
                  <img
                    className="img-full"
                    src="assets/images/logo/logo.png"
                    alt="Header Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-flex justify-content-center col-custom">
              <nav className="main-nav d-none d-lg-flex">
                <ul className="nav">
                  <li>
                    <a className="active" href="index.html">
                      <span className="menu-text"> Ana Sayfa</span>
                    </a>
                    
                  </li>
                  <li>
                    <a href="shop.html">
                      <span className="menu-text">kategoriler</span>
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="mega-menu dropdown-hover">
                      <div className="menu-colum">
                        <ul>
                          <li>
                            <span className="mega-menu-text">Çiçekler</span>
                          </li>
                          <li>
                            <a href="shop.html">Canlı Çiçekler</a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                            Kurulum Çiçekler
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-left.html">
                            Buket Çiçekler
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right.html">
                            Çiçek Aranjmanları
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth.html">Yılbaşı çiçekleri</a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-colum">
                        <ul>
                          <li>
                            <span className="mega-menu-text">Aksesuarlar</span>
                          </li>
                          <li>
                            <a href="product-details.html">Vazo ve Saksılar</a>
                          </li>
                          <li>
                            <a href="variable-product-details.html">
                            Çiçek Düzenleme Aksesuarları
                            </a>
                          </li>
                          <li>
                            <a href="external-product-details.html">
                            Çiçek Kutuları
                            </a>
                          </li>
                          <li>
                            <a href="gallery-product-details.html">
                            Bant ve Renkli Kâğıtlar
                            </a>
                          </li>
                          <li>
                            <a href="countdown-product-details.html">
                            Hediye Kartları
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-colum">
                        <ul>
                          <li>
                            <span className="mega-menu-text">Hizmetler</span>
                          </li>
                          <li>
                            <a href="error-404.html">Çiçek Siparişi</a>
                          </li>
                          <li>
                            <a href="compare.html">Teslimat Hizmeti</a>
                          </li>
                          <li>
                            <a href="cart.html">Çiçek Bakımı</a>
                          </li>
                          <li>
                            <a href="checkout.html">Özel Gün Düzenlemeleri</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Kurumsal Çiçek Hizmetleri</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="blog-details-fullwidth.html">
                      <span className="menu-text"> Blog</span>
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-submenu dropdown-hover">
                      <li>
                        <a href="blog.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-list-right-sidebar.html">
                          Blog List Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list-fullwidth.html">Blog List Fullwidth</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid Page</a>
                      </li>
                      <li>
                        <a href="blog-grid-right-sidebar.html">
                          Blog Grid Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-fullwidth.html">Blog Grid Fullwidth</a>
                      </li>
                      <li>
                        <a href="blog-details-sidebar.html">
                          Blog Details Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-details-fullwidth.html">
                          Blog Details Fullwidth
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">
                      <span className="menu-text">hakkımızda</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact-us.html">
                      <span className="menu-text">iletişim</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 col-md-6 col-6 col-custom">
              <div className="header-right-area main-nav">
                <ul className="nav">
                  <li className="sidemenu-wrap">
                    <a href="#">
                      <i className="fa fa-search" />{" "}
                    </a>
                    <ul className="dropdown-sidemenu dropdown-hover-2 dropdown-search">
                      <li>
                        <form action="#">
                          <input
                            name="search"
                            id="search"
                            placeholder="Search"
                            type="text"
                          />
                          <button type="submit">
                            <i className="fa fa-search" />
                          </button>
                        </form>
                      </li>
                    </ul>
                  </li>
                  <li className="account-menu-wrap d-none d-lg-flex">
                    <a href="#" className="off-canvas-menu-btn">
                      <i className="fa fa-bars" />
                    </a>
                  </li>
                  <li className="mobile-menu-btn d-lg-none">
                    <a className="off-canvas-btn" href="#">
                      <i className="fa fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header Area End */}
      {/* off-canvas menu start */}
      <aside className="off-canvas-wrapper" id="mobileMenu">
        <div className="off-canvas-overlay" />
        <div className="off-canvas-inner-content">
          <div className="btn-close-off-canvas">
            <i className="fa fa-times" />
          </div>
          <div className="off-canvas-inner">
            <div className="search-box-offcanvas">
              <form>
                <input type="text" placeholder="Search product..." />
                <button className="search-btn">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
            {/* mobile menu start */}
            <div className="mobile-navigation">
              {/* mobile menu navigation start */}
              <nav>
                <ul className="mobile-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Home</a>
                    <ul className="dropdown">
                      <li>
                        <a href="index.html">Home Page 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Page 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Page 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Page 4</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="megamenu dropdown">
                      <li className="mega-title has-children">
                        <a href="#">Shop Layouts</a>
                        <ul className="dropdown">
                          <li>
                            <a href="shop.html">Shop Left Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                              Shop Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-left.html">
                              Shop List Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right.html">
                              Shop List Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth.html">Shop Full Width</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-title has-children">
                        <a href="#">Product Details</a>
                        <ul className="dropdown">
                          <li>
                            <a href="product-details.html">
                              Single Product Details
                            </a>
                          </li>
                          <li>
                            <a href="variable-product-details.html">
                              Variable Product Details
                            </a>
                          </li>
                          <li>
                            <a href="external-product-details.html">
                              External Product Details
                            </a>
                          </li>
                          <li>
                            <a href="gallery-product-details.html">
                              Gallery Product Details
                            </a>
                          </li>
                          <li>
                            <a href="countdown-product-details.html">
                              Countdown Product Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-title has-children">
                        <a href="#">Others</a>
                        <ul className="dropdown">
                          <li>
                            <a href="error404.html">Error 404</a>
                          </li>
                          <li>
                            <a href="compare.html">Compare Page</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout Page</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wish List Page</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children ">
                    <a href="#">Blog</a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-list-right-sidebar.html">
                          Blog List Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list-fullwidth.html">Blog List Fullwidth</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid Page</a>
                      </li>
                      <li>
                        <a href="blog-grid-right-sidebar.html">
                          Blog Grid Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-fullwidth.html">Blog Grid Fullwidth</a>
                      </li>
                      <li>
                        <a href="blog-details-sidebar.html">
                          Blog Details Sidebar Page
                        </a>
                      </li>
                      <li>
                        <a href="blog-details-fullwidth.html">
                          Blog Details Fullwidth Page
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children ">
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="frequently-questions.html">FAQ</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="login-register.html">login &amp; register</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* mobile menu navigation end */}
            </div>
            {/* mobile menu end */}
            <div className="offcanvas-widget-area">
              <div className="switcher">
                <div className="language">
                  <span className="switcher-title">Language: </span>
                  <div className="switcher-menu">
                    <ul>
                      <li>
                        <a href="#">English</a>
                        <ul className="switcher-dropdown">
                          <li>
                            <a href="#">German</a>
                          </li>
                          <li>
                            <a href="#">French</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="currency">
                  <span className="switcher-title">Currency: </span>
                  <div className="switcher-menu">
                    <ul>
                      <li>
                        <a href="#">$ USD</a>
                        <ul className="switcher-dropdown">
                          <li>
                            <a href="#">€ EUR</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="top-info-wrap text-left text-black">
                <ul className="address-info">
                  <li>
                    <i className="fa fa-phone" />
                    <a href="info@yourdomain.com">(1245) 2456 012</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="info@yourdomain.com">info@yourdomain.com</a>
                  </li>
                </ul>
                <div className="widget-social">
                  <a className="facebook-color-bg" title="Facebook-f" href="#">
                    <i className="fa fa-facebook-f" />
                  </a>
                  <a className="twitter-color-bg" title="Twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="linkedin-color-bg" title="Linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a className="youtube-color-bg" title="Youtube" href="#">
                    <i className="fa fa-youtube" />
                  </a>
                  <a className="vimeo-color-bg" title="Vimeo" href="#">
                    <i className="fa fa-vimeo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* off-canvas menu end */}
      {/* off-canvas menu start */}
      <aside className="off-canvas-menu-wrapper" id="sideMenu">
        <div className="off-canvas-overlay" />
        <div className="off-canvas-inner-content">
          <div className="off-canvas-inner">
            <div className="btn-close-off-canvas">
              <i className="fa fa-times" />
            </div>
            {/* offcanvas widget area start */}
            <div className="offcanvas-widget-area">
              <ul className="menu-top-menu">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
              </ul>
              <p className="desc-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <div className="switcher">
                <div className="language">
                  <span className="switcher-title">Language: </span>
                  <div className="switcher-menu">
                    <ul>
                      <li>
                        <a href="#">English</a>
                        <ul className="switcher-dropdown">
                          <li>
                            <a href="#">German</a>
                          </li>
                          <li>
                            <a href="#">French</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="currency">
                  <span className="switcher-title">Currency: </span>
                  <div className="switcher-menu">
                    <ul>
                      <li>
                        <a href="#">$ USD</a>
                        <ul className="switcher-dropdown">
                          <li>
                            <a href="#">€ EUR</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="top-info-wrap text-left text-black">
                <ul className="address-info">
                  <li>
                    <i className="fa fa-phone" />
                    <a href="info@yourdomain.com">(1245) 2456 012</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="info@yourdomain.com">info@yourdomain.com</a>
                  </li>
                </ul>
                <div className="widget-social">
                  <a className="facebook-color-bg" title="Facebook-f" href="#">
                    <i className="fa fa-facebook-f" />
                  </a>
                  <a className="twitter-color-bg" title="Twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="linkedin-color-bg" title="Linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a className="youtube-color-bg" title="Youtube" href="#">
                    <i className="fa fa-youtube" />
                  </a>
                  <a className="vimeo-color-bg" title="Vimeo" href="#">
                    <i className="fa fa-vimeo" />
                  </a>
                </div>
              </div>
            </div>
            {/* offcanvas widget area end */}
          </div>
        </div>
      </aside>
      {/* off-canvas menu end */}
    </header>
  );
};

export default Header;
