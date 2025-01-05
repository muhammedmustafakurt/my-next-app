import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-widget-area">
        <div className="container container-default custom-area">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-custom">
              <div className="single-footer-widget m-0">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="assets/images/logo/logo-footer.png"
                      alt="Logo Görseli"
                    />
                  </a>
                </div>
                <p className="desc-content">
                  Başarı için sıkı çalışmak gerekiyor. Başarı anahtarı azim ve
disiplindir.
                </p>
                <div className="social-links">
                  <ul className="d-flex">
                    <li>
                      <a className="rounded-circle" href="#" title="Facebook">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a className="rounded-circle" href="#" title="Twitter">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="rounded-circle" href="#" title="Linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a className="rounded-circle" href="#" title="Youtube">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a className="rounded-circle" href="#" title="Vimeo">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
              <div className="single-footer-widget">
                <h2 className="widget-title">Bilgiler</h2>
                <ul className="widget-list">
                  <li>
                    <a href="about-us.html">Şirketimiz</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Bize Ulaşın</a>
                  </li>
                  <li>
                    <a href="about-us.html">Hizmetlerimiz</a>
                  </li>
                  <li>
                    <a href="about-us.html">Neden Biz?</a>
                  </li>
                  <li>
                    <a href="about-us.html">Kariyer</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
              <div className="single-footer-widget">
                <h2 className="widget-title">Hızlı Linkler</h2>
                <ul className="widget-list">
                  <li>
                    <a href="about-us.html">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="shop.html">Deneme</a>
                  </li>
                  <li>
                    <a href="cart.html">Sepet</a>
                  </li>
                  <li>
                    <a href="contact-us.html">İletişim</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
              <div className="single-footer-widget">
                <h2 className="widget-title">Destek</h2>
                <ul className="widget-list">
                  <li>
                    <a href="contact-us.html">Çevrimiçi Destek</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Teslimat Politikası</a>
                  </li>
                  <li>
                    <a href="contact-us.html">İade Politikası</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Gizlilik Politikası</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Hizmet Şartları</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-custom">
              <div className="single-footer-widget">
                <h2 className="widget-title">İletişim Bilgileri</h2>
                <div className="widget-body">
                  <address>
                    123, ABC Yolu, Şehir Merkezi, Adresiniz Buraya Yazılacak.
                    <br />
                    Telefon: 01234 567 890
                    <br />
                    E-posta: https://example.com
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area">
        <div className="container custom-area">
          <div className="row">
            <div className="col-12 text-center col-custom">
              <div className="copyright-content">
                <p>
                  {" "}
                  <a href="" title="https://hasthemes.com/">
                  © Han Çiçekcilik 2025
                  </a>{" "}
                  | All Rights Reserved.&nbsp;<strong>Powered by Muhammed Mustafa Kurt</strong>&nbsp;{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

