"use client";
import Image from "next/image";
import Script from "next/script";
import connectToDB from './db';
import { MongoClient } from 'mongodb';
import ProductsPage from "./components/discounted_product";
export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Han Çiçekçilik-Ana Sayfa</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Favicon */}
      
      {/* CSS
    ============================================ */}
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="./assets/css/vendor/bootstrap.min.css" />
      {/* Font Awesome CSS */}
      <link rel="stylesheet" href="./assets/css/vendor/font.awesome.min.css" />
      {/* Linear Icons CSS */}
      <link rel="stylesheet" href="./assets/css/vendor/linearicons.min.css" />
      {/* Swiper CSS */}
      <link
        rel="stylesheet"
        href="./assets/css/plugins/swiper-bundle.min.css"
      />
      {/* Animation CSS */}
      <link rel="stylesheet" href="./assets/css/plugins/animate.min.css" />
      {/* Jquery ui CSS */}
      <link rel="stylesheet" href="./assets/css/plugins/jquery-ui.min.css" />
      {/* Nice Select CSS */}
      <link rel="stylesheet" href="./assets/css/plugins/nice-select.min.css" />
      {/* Magnific Popup */}
      <link rel="stylesheet" href="./assets/css/plugins/magnific-popup.css" />
      {/* Main Style CSS */}
      <link rel="stylesheet" href="./assets/css/style.css" />
      {/* Slider/Intro Section Start */}
   <ProductsPage/>
      <div className="intro11-slider-wrap section">
        <div className="intro11-slider swiper-container">
          <div className="swiper-wrapper">
            <div className="intro11-section swiper-slide slide-1 slide-bg-1 bg-position">
              {/* Intro Content Start */}
              <div className="intro11-content text-left">
                <h3 className="title-slider text-uppercase">iNDİRİM GÜNLERİ</h3>
                <h2 className="title">
                  Kış Sezonuna Özel <br/>Çiçek İndirimleri Başladı!
                </h2>
                <p className="desc-content">
                  Kışın soğuk günlerini ısıtacak en güzel çiçeklerle buluşmaya
                  ne dersiniz? Şimdi, kış sezonu boyunca tüm çiçek
                  aranjmanlarınızda büyük indirimler sizleri bekliyor! Canlı
                  çiçeklerden şık aranjmanlara, özel günler için ideal
                  seçeneklere kadar tüm ürünlerde %20'ye varan indirim
                  fırsatlarını kaçırmayın!{" "}
                </p>
                <a
                  href="product-details.html"
                  className="btn flosun-button secondary-btn theme-color  rounded-0"
                >
                  SİPARİŞ VER
                </a>
              </div>
              {/* Intro Content End */}
            </div>
            <div className="intro11-section swiper-slide slide-2 slide-bg-1 bg-position">
              {/* Intro Content Start */}
              <div className="intro11-content text-left">
                <h3 className="title-slider black-slider-title text-uppercase">
                  İNDİRİM GÜNLERİ
                </h3>
                <h2 className="title">
                Kış Çiçekleriyle  <br /> İçinizi Isıtın
                </h2>
                <p className="desc-content">
                Kışın serin havasında sıcak bir dokunuşa ne dersiniz? En güzel çiçeklerden oluşan aranjmanlarımızla hem evinize hem de sevdiklerinize sıcacık bir atmosfer katın. Doğanın eşsiz güzelliklerini yansıtan buketlerimizle bu kış kendinizi ve sevdiklerinizi mutlu edin. Üstelik kış sezonuna özel olarak, tüm ürünlerimizde %20'ye varan indirimlerle!{" "}
                </p>
                <a
                  href="product-details.html"
                  className="btn flosun-button secondary-btn rounded-0"
                >
                  Sipariş ver
                </a>
                
              </div>
              {/* Intro Content End */}
            </div>
          </div>
          {/* Slider Navigation */}
          <div className="home1-slider-prev swiper-button-prev main-slider-nav">
            <i className="lnr lnr-arrow-left" />
          </div>
          <div className="home1-slider-next swiper-button-next main-slider-nav">
            <i className="lnr lnr-arrow-right" />
          </div>
          {/* Slider pagination */}
          <div className="swiper-pagination" />
        </div>
      </div>
      {/* Slider/Intro Section End */}
      {/*Categories Area Start*/}
      <div className="categories-area pt-40">
        <div className="container-fluid">
          <div className="row">
            <div className="cat-1 col-md-4 col-sm-12 col-custom">
              <div className="categories-img mb-30">
                <a href="#">
                  <img
                    src="assets/images/category/home1-category-1.jpg"
                    alt=""
                  />
                </a>
                <div className="categories-content">
                  <h3>Yılbaşı Çiçekleri</h3>
                </div>
              </div>
            </div>
            <div className="cat-2 col-md-8 col-sm-12 col-custom">
              <div className="row">
                <div className="cat-3 col-md-7 col-custom">
                  <div className="categories-img mb-30">
                    <a href="#">
                      <img
                        src="assets/images/category/home1-category-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="categories-content">
                      <h3>Buketler</h3>
                    </div>
                  </div>
                </div>
                <div className="cat-4 col-md-5 col-custom">
                  <div className="categories-img mb-30">
                    <a href="#">
                      <img
                        src="assets/images/category/home1-category-3.jpg"
                        alt=""
                      />
                    </a>
                    <div className="categories-content">
                      <h3>Çelenkler</h3>
                    </div>
                  </div>
                </div>
                <div className="cat-5 col-md-4 col-custom">
                  <div className="categories-img mb-30">
                    <a href="#">
                      <img
                        src="assets/images/category/home1-category-4.jpg"
                        alt=""
                      />
                    </a>
                    <div className="categories-content">
                      <h3>Aranjman</h3>
                    </div>
                  </div>
                </div>
                <div className="cat-6 col-md-8 col-custom">
                  <div className="categories-img mb-30">
                    <a href="#">
                      <img
                        src="assets/images/category/home1-category-5.jpg"
                        alt=""
                      />
                    </a>
                    <div className="categories-content">
                      <h3>Vip Çiçekler</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Categories Area End*/}
      {/*Product Area Start*/}
      <div className="product-area mt-text-2">
        <div className="container custom-area-2 overflow-hidden">
          <div className="row">
            {/*Section Title Start*/}
            <div className="col-12 col-custom">
              <div className="section-title text-center mb-30">
                <span className="section-title-1">Mükemmel Hediyeler</span>
                <h3 className="section-title-3">indirimdeki ürünler</h3>
              </div>
            </div>
            {/*Section Title End*/}
          </div>
          <div className="row product-row">
            <div className="col-12 col-custom">
              <div className="product-slider swiper-container anime-element-multi">
                <div className="swiper-wrapper">
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1736073720/afgthiwpb3u78kchjhma.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                        </a>
                        <span className="onsale">Sale!</span>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              deneme
                            </a>
                          </h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">80.00TL</span>
                          <span className="old-price">
                            <del>90.00TL</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          urunu incele
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1736073720/afgthiwpb3u78kchjhma.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/4.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Jasmine flowers white
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/5.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/6.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Blossom bouquet flower
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1736073720/afgthiwpb3u78kchjhma.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/1.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Orchid flower red stick
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/7.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/8.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Rose bouquet white
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/9.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/2.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Hyacinth white stick
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/3.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/4.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Glory of the Snow</a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/6.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/5.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Jack in the Pulpit
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/8.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/7.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Pearly Everlasting
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/9.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/8.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              ürün
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/2.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/1.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Flowers white</a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/9.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/3.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Flower red stick</a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                </div>
                {/* Slider pagination */}
                <div className="swiper-pagination default-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Product Area End*/}
      {/* Product Countdown Area Start Here */}
      <div className="product-countdown-area mt-text-3">
        <div className="container custom-area">
          <div className="row">
            {/*Section Title Start*/}
            <div className="col-12 col-custom">
              <div className="section-title text-center mb-30">
                <h3 className="section-title-3">Kış Sezonu İndirimleri</h3>
              </div>
            </div>
            {/*Section Title End*/}
          </div>
          <div className="row">
            {/*Countdown Start*/}
            <div className="col-12 col-custom">
              <div className="countdown-area">
                <div
                  className="countdown-wrapper d-flex justify-content-center"
                  data-countdown="2025/02/01"
                />
              </div>
            </div>
            {/*Countdown End*/}
          </div>
          <div className="row product-row">
            <div className="col-12 col-custom">
              <div className="item-carousel-2 swiper-container anime-element-multi product-area">
                <div className="swiper-wrapper">
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/1.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/2.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <span className="onsale">Sale!</span>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Flowers pink stick
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/5.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/6.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Flowers white</a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/7.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/8.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Blossom flower</a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/3.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/4.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">Flower red stick</a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Product Start*/}
                    <div className="single-product position-relative mb-30">
                      <div className="product-image">
                        <a className="d-block" href="product-details.html">
                          <img
                            src="assets/images/product/8.jpg"
                            alt=""
                            className="product-image-1 w-100"
                          />
                          <img
                            src="assets/images/product/7.jpg"
                            alt=""
                            className="product-image-2 position-absolute w-100"
                          />
                        </a>
                        <div className="add-action d-flex flex-column position-absolute">
                          <a href="compare.html" title="Compare">
                            <i
                              className="lnr lnr-sync"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Compare"
                            />
                          </a>
                          <a href="wishlist.html" title="Add To Wishlist">
                            <i
                              className="lnr lnr-heart"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Wishlist"
                            />
                          </a>
                          <a
                            href="#exampleModalCenter"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i
                              className="lnr lnr-eye"
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Quick View"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title-2">
                            {" "}
                            <a href="product-details.html">
                              Rose bouquet white
                            </a>
                          </h4>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <a href="cart.html" className="btn product-cart">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    {/*Single Product End*/}
                  </div>
                </div>
                {/* Slider pagination */}
                <div className="swiper-pagination default-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Countdown Area End Here */}
      {/* History Area Start Here */}
      <div className="our-history-area pt-text-3">
        <div className="container">
          <div className="row">
            {/*Section Title Start*/}
            <div className="col-12">
              <div className="section-title text-center mb-30">
                <span className="section-title-1">A little Story About Us</span>
                <h2 className="section-title-large">Our History</h2>
              </div>
            </div>
            {/*Section Title End*/}
          </div>
          <div className="row">
            <div className="col-lg-8 ms-auto me-auto">
              <div className="history-area-content pb-0 mb-0 border-0 text-center">
                <p>
                  <strong>
                    Captain America: Civil War Christopher Markus and Stephen
                    McFeely see the Hulk as the game over moment.
                  </strong>
                </p>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum claritatem. Investigationes demonstraverunt
                  lectores legere me lius quod ii legunt saepius. Claritas est
                  etiam processus dynamicus. Phasellus eu rhoncus dolor, vitae
                  scelerisque sapien
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* History Area End Here */}
      {/* Banner Area Start Here */}
      <div className="banner-area mt-text-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-custom">
              {/*Single Banner Area Start*/}
              <div className="single-banner hover-style mb-30">
                <div className="banner-img">
                  <a href="#">
                    <img src="assets/images/banner/1-1.jpg" alt="" />
                    <div className="overlay-1" />
                  </a>
                </div>
              </div>
              {/*Single Banner Area End*/}
            </div>
            <div className="col-md-4 col-custom">
              {/*Single Banner Area Start*/}
              <div className="single-banner hover-style mb-30">
                <div className="banner-img">
                  <a href="#">
                    <img src="assets/images/banner/1-2.jpg" alt="" />
                    <div className="overlay-1" />
                  </a>
                </div>
              </div>
              {/*Single Banner Area End*/}
            </div>
            <div className="col-md-4 col-custom">
              {/*Single Banner Area Start*/}
              <div className="single-banner hover-style mb-30">
                <div className="banner-img">
                  <a href="#">
                    <img src="assets/images/banner/1-3.jpg" alt="" />
                    <div className="overlay-1" />
                  </a>
                </div>
              </div>
              {/*Single Banner Area End*/}
            </div>
          </div>
        </div>
      </div>
      {/* Banner Area End Here */}
      {/* Testimonial Area Start Here */}
      <div className="testimonial-area mt-text-2">
        <div className="container custom-area">
          <div className="row">
            {/*Section Title Start*/}
            <div className="col-12 col-custom">
              <div className="section-title text-center">
                <span className="section-title-1">We Love Our Clients</span>
                <h3 className="section-title-3">What They’re Saying</h3>
              </div>
            </div>
            {/*Section Title End*/}
          </div>
          <div className="row">
            <div className="testimonial-carousel swiper-container intro11-carousel-wrap col-12 col-custom">
              <div className="swiper-wrapper">
                <div className="single-item swiper-slide">
                  {/*Single Testimonial Start*/}
                  <div className="single-testimonial text-center">
                    <div className="testimonial-img">
                      <img
                        src="assets/images/testimonial/testimonial1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        These guys have been absolutely outstanding. Perfect
                        Themes and the best of all that you have many options to
                        choose! Best Support team ever! Very fast responding!
                        Thank you very much! I highly recommend this theme and
                        these people!
                      </p>
                      <div className="testimonial-author">
                        <h6>
                          Katherine Sullivan <span>Customer</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/*Single Testimonial End*/}
                </div>
                <div className="single-item swiper-slide">
                  {/*Single Testimonial Start*/}
                  <div className="single-testimonial text-center">
                    <div className="testimonial-img">
                      <img
                        src="assets/images/testimonial/testimonial2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        These guys have been absolutely outstanding. Perfect
                        Themes and the best of all that you have many options to
                        choose! Best Support team ever! Very fast responding!
                        Thank you very much! I highly recommend this theme and
                        these people!
                      </p>
                      <div className="testimonial-author">
                        <h6>
                          Alex Jhon <span>Customer</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/*Single Testimonial End*/}
                </div>
              </div>
              {/* Slider Navigation */}
              <div className="home1-slider-prev swiper-button-prev main-slider-nav">
                <i className="lnr lnr-arrow-left" />
              </div>
              <div className="home1-slider-next swiper-button-next main-slider-nav">
                <i className="lnr lnr-arrow-right" />
              </div>
              {/* Slider pagination */}
              <div className="swiper-pagination default-pagination" />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Area End Here */}
      {/* Newsletter Area Start Here */}
      <div className="news-letter-area gray-bg pt-no-text pb-no-text mt-text-3">
        <div className="container custom-area">
          <div className="row align-items-center">
            {/*Section Title Start*/}
            <div className="col-md-6 col-custom">
              <div className="section-title text-left mb-35">
                <h3 className="section-title-3">Send Newsletter</h3>
                <p className="desc-content mb-0">
                  Enter Your Email Address For Our Mailing List To Keep Your
                  Self Update
                </p>
              </div>
            </div>
            {/*Section Title End*/}
            <div className="col-md-6 col-custom">
              <div className="news-latter-box">
                <div className="newsletter-form-wrap text-center">
                  <form id="mc-form" className="mc-form">
                    <input
                      type="email"
                      id="mc-email"
                      className="form-control email-box"
                      placeholder="email@example.com"
                      name="EMAIL"
                    />
                    <button
                      id="mc-submit"
                      className="btn rounded-0"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                  {/* mailchimp-alerts Start */}
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting" />
                    {/* mailchimp-submitting end */}
                    <div className="mailchimp-success text-success" />
                    {/* mailchimp-success end */}
                    <div className="mailchimp-error text-danger" />
                    {/* mailchimp-error end */}
                  </div>
                  {/* mailchimp-alerts end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Area End Here */}
      {/* Blog Area Start Here */}
      <div className="blog-post-area mt-text-3">
        <div className="container custom-area">
          <div className="row">
            {/*Section Title Start*/}
            <div className="col-12">
              <div className="section-title text-center mb-30">
                <span className="section-title-1">From The Blogs</span>
                <h3 className="section-title-3">Our Latest Posts</h3>
              </div>
            </div>
            {/*Section Title End*/}
          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 col-custom mb-30">
              <div className="blog-lst">
                <div className="single-blog">
                  <div className="blog-image">
                    <a className="d-block" href="blog-details-fullwidth.html">
                      <img
                        src="assets/images/blog/blog1.jpg"
                        alt="Blog Image"
                        className="w-100"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-text">
                      <h4>
                        <a href="blog-details-fullwidth.html">
                          Standard blog post One
                        </a>
                      </h4>
                      <div className="blog-post-info">
                        <span>
                          <a href="#">By admin</a>
                        </span>
                        <span>December 18, 2022</span>
                      </div>
                      <p>
                        Lorem ipsu dolor sit amet cons elits cumque adipisicing,
                        sed do incid eiusmod tempor ut labore et dolore eveniet
                        .
                      </p>
                      <a
                        href="blog-details-fullwidth.html"
                        className="readmore"
                      >
                        Read More <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-custom mb-30">
              <div className="blog-lst">
                <div className="single-blog">
                  <div className="blog-image">
                    <a className="d-block" href="blog-details-fullwidth.html">
                      <img
                        src="assets/images/blog/blog3.jpg"
                        alt="Blog Image"
                        className="w-100"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-text">
                      <h4>
                        <a href="blog-details-fullwidth.html">
                          New Collection Two
                        </a>
                      </h4>
                      <div className="blog-post-info">
                        <span>
                          <a href="#">By admin</a>
                        </span>
                        <span>December 18, 2022</span>
                      </div>
                      <p>
                        Lorem ipsu dolor sit amet cons elits cumque adipisicing,
                        sed do incid eiusmod tempor ut labore et dolore eveniet
                        .
                      </p>
                      <a
                        href="blog-details-fullwidth.html"
                        className="readmore"
                      >
                        Read More <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-custom mb-30">
              <div className="blog-lst">
                <div className="single-blog">
                  <div className="blog-image">
                    <a className="d-block" href="blog-details-fullwidth.html">
                      <img
                        src="assets/images/blog/blog2.jpg"
                        alt="Blog Image"
                        className="w-100"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-text">
                      <h4>
                        <a href="blog-details-fullwidth.html">
                          Standard blog post three
                        </a>
                      </h4>
                      <div className="blog-post-info">
                        <span>
                          <a href="#">By admin</a>
                        </span>
                        <span>December 18, 2022</span>
                      </div>
                      <p>
                        Lorem ipsu dolor sit amet cons elits cumque adipisicing,
                        sed do incid eiusmod tempor ut labore et dolore eveniet
                        .
                      </p>
                      <a
                        href="blog-details-fullwidth.html"
                        className="readmore"
                      >
                        Read More <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Area End Here */}
      {/* Brand Logo Area Start Here */}
      <div className="brand-logo-area gray-bg pt-no-text pb-no-text mt-text-5">
        <div className="container custom-area">
          <div className="row">
            <div className="col-12 col-custom">
              <div className="brand-logo-carousel swiper-container intro11-carousel-wrap arrow-style-3">
                <div className="swiper-wrapper">
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src="assets/images/brand/1.png" alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src="assets/images/brand/2.png" alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src="assets/images/brand/3.png" alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src="assets/images/brand/4.png" alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src="assets/images/brand/5.png" alt="Brand Logo" />
                    </a>
                  </div>
                </div>
                {/* Slider Navigation */}
                <div className="home1-slider-prev swiper-button-prev main-slider-nav">
                  <i className="lnr lnr-arrow-left" />
                </div>
                <div className="home1-slider-next swiper-button-next main-slider-nav">
                  <i className="lnr lnr-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Logo Area End Here */}
      {/* Modal */}
      <div
        className="modal flosun-modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close close-button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span className="close-icon" aria-hidden="true">
                x
              </span>
            </button>
            <div className="modal-body">
              <div className="container-fluid custom-area">
                <div className="row">
                  <div className="col-md-6 col-custom">
                    <div className="modal-product-img">
                      <a className="w-100" href="#">
                        <img
                          className="w-100"
                          src="assets/images/product/large-size/1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-custom">
                    <div className="modal-product">
                      <div className="product-content">
                        <div className="product-title">
                          <h4 className="title">Product dummy name</h4>
                        </div>
                        <div className="price-box">
                          <span className="regular-price ">$80.00</span>
                          <span className="old-price">
                            <del>$90.00</del>
                          </span>
                        </div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <span>1 Review</span>
                        </div>
                        <p className="desc-content">
                          we denounce with righteous indignation and dislike men
                          who are so beguiled and demoralized by the charms of
                          pleasure of the moment, so blinded by desire, that
                          they cannot foresee the pain and trouble that are
                          bound to ensue; and equal blame bel...
                        </p>
                        <form className="d-flex flex-column w-100" action="#">
                          <div className="form-group">
                            <select className="form-control nice-select w-100">
                              <option>S</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                              <option>XXL</option>
                            </select>
                          </div>
                        </form>
                        <div className="quantity-with-btn">
                          <div className="quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                defaultValue={0}
                                type="text"
                              />
                              <div className="dec qtybutton">-</div>
                              <div className="inc qtybutton">+</div>
                              <div className="dec qtybutton">
                                <i className="fa fa-minus" />
                              </div>
                              <div className="inc qtybutton">
                                <i className="fa fa-plus" />
                              </div>
                            </div>
                          </div>
                          <div className="add-to_btn">
                            <a
                              className="btn product-cart button-icon flosun-button dark-btn"
                              href="cart.html"
                            >
                              Add to cart
                            </a>
                            <a
                              className="btn flosun-button secondary-btn rounded-0"
                              href="wishlist.html"
                            >
                              Add to wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to Top Start */}
      <a className="scroll-to-top" href="#">
        <i className="lnr lnr-arrow-up" />
      </a>
      
      <Script
        src="/assets/js/vendor/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/vendor/jquery-migrate-3.3.2.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/vendor/modernizr-3.7.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/vendor/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/swiper-bundle.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/nice-select.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/jquery.ajaxchimp.min.js"
        strategy="lazyOnload"
      />
      <Script src="/assets/js/plugins/jquery-ui.min.js" strategy="lazyOnload" />
      <Script
        src="/assets/js/plugins/jquery.countdown.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/jquery.magnific-popup.min.js"
        strategy="lazyOnload"
      />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </>
  );
}
