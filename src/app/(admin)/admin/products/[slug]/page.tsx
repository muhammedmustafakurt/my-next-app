import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import connectToDB from "../../db"; // Adjust the path to your db.js file
import "./products.css";

// Define types for product and page props
interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

interface PageProps {
  products: Product[];
  slug: string;
}

// Define an async function to fetch product data
async function fetchProducts(slug: string, searchQuery: string | null = null): Promise<Product[]> {
  const db = await connectToDB();
  const collection = db.collection(slug); // Fetch collection based on slug

  const searchFilter = searchQuery
    ? { title: { $regex: searchQuery, $options: "i" } } // Search case-insensitive in product titles
    : {};

  const products = await collection.find(searchFilter).toArray();

  return products.map((product) => ({
    id: product._id.toString(),
    title: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
  }));
}

// Helper function to format slug from product title
const formatSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, ""); // Replace spaces with "-" and remove non-alphanumeric characters
};

const Renault = async ({ params, searchParams }: { params: { slug: string }, searchParams: { query?: string } }) => {
  const { slug } = params;
  const searchQuery = searchParams?.query || null;
  const products = await fetchProducts(slug, searchQuery);

  return (
    <div className="container">
      <h1 className="title">{slug} Ürün Listesi</h1>

      {/* Search Form */}
      <form method="GET" action={`/admin/products/${slug}`} className="search-form">
        <input
          type="text"
          name="query"
          placeholder="Ürün ara..."
          defaultValue={searchQuery || ""}
          className="search-input"
        />
        <button type="submit" className="search-button">Ara</button>
        
        
      </form>

      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </td>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>Category 1</td>
                <td>{product.price} TL</td>
                <td>
                  {/* Wrap the button inside the Link component */}
                  <Link
                    href={`/admin/products/${slug}/${formatSlug(product.title)}`}
                  >
                    <button className="edit-button">Düzenle</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button className="page-button">1</button>
        <button className="page-button">2</button>
      </div>
    </div>
  );
};

export default Renault;
