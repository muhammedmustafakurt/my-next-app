// ProductsPage.tsx
import { useEffect, useState } from "react";
import { getProducts } from "./productAction"; // getProducts fonksiyonunu import ediyoruz

interface Product {
  _id: string;
  image: string;
  title: string;
  price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // getProducts fonksiyonunu çağırıyoruz
        setProducts(data); // Ürünleri state'e set ediyoruz
      } catch (err: any) {
        setError(err.message); // Hata mesajını state'e set ediyoruz
      } finally {
        setLoading(false); // Yükleme durumunu bitiriyoruz
      }
    };

    fetchProducts(); // API çağrısını yapıyoruz
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h1>Ürün Listesi</h1>
      <div className="product-list">
        {error ? (
          <p>{error}</p> // Hata varsa hata mesajını gösteriyoruz
        ) : products.length === 0 ? (
          <p>Ürün bulunamadı.</p> // Ürün bulunamadığında mesaj gösteriyoruz
        ) : (
          products.map((product) => (
            <>
              {/* Bootstrap CSS */}
              <link
                rel="stylesheet"
                href="./assets/css/vendor/bootstrap.min.css"
              />
              {/* Font Awesome CSS */}
              <link
                rel="stylesheet"
                href="./assets/css/vendor/font.awesome.min.css"
              />
              {/* Linear Icons CSS */}
              <link
                rel="stylesheet"
                href="./assets/css/vendor/linearicons.min.css"
              />
              {/* Swiper CSS */}
              <link
                rel="stylesheet"
                href="./assets/css/plugins/swiper-bundle.min.css"
              />
              {/* Animation CSS */}
              <link
                rel="stylesheet"
                href="./assets/css/plugins/animate.min.css"
              />
              {/* Jquery ui CSS */}
              <link
                rel="stylesheet"
                href="./assets/css/plugins/jquery-ui.min.css"
              />
              {/* Nice Select CSS */}
              <link
                rel="stylesheet"
                href="./assets/css/plugins/nice-select.min.css"
              />
              {/* Magnific Popup */}
              <link
                rel="stylesheet"
                href="./assets/css/plugins/magnific-popup.css"
              />
              {/* Main Style CSS */}
              <link rel="stylesheet" href="./assets/css/style.css" />
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
              <div key={product._id} className="product-item">
                <img
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                />
                <h2>{product.title}</h2>
                <p>Fiyat: {product.price} TL</p>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
