import React from 'react';
import connectToDB from '../../../db';
import { updateProduct, deleteProduct } from './actions';
import "./products.css"; // Adjust the path to your db.js file

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

// Fetch the product details based on slug and productname
const fetchProductDetails = async (slug: string, productname: string): Promise<Product | null> => {
  const db = await connectToDB();
  const collection = db.collection(slug);

  // Find the product based on the slug and productname
  const product = await collection.findOne({
    title: { $regex: new RegExp(`^${productname.replace(/-/g, ' ')}`, 'i') },
  });

  if (!product) {
    return null;
  }

  return {
    id: product._id.toString(),
    title: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
  };
};

const FiatProductDetails = async ({ params }: { params: { slug: string, productname: string } }) => {
  const { slug, productname } = params;

  const product = await fetchProductDetails(slug, productname);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <form method="POST" action={updateProduct}> {/* Handle form action using an API route */}
          <input type="hidden" name="slug" value={slug} />
          <input type="hidden" name="id" value={product.id} />
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={product.title}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              defaultValue={product.description}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={product.price}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={product.image}
              required
            />
          </div>
          <button type="submit">Ürünü Güncelle</button>
        </form>

        {/* Delete Product Form */}
        <form method="POST" action={deleteProduct} style={{ marginTop: '20px' }}>
          <input type="hidden" name="slug" value={slug} />
          <input type="hidden" name="id" value={product.id} />
          <button type="submit" style={{ backgroundColor: 'red', color: 'white' }}>Ürünü Sil</button>
        </form>
      </div>
    </div>
  );
};

export default FiatProductDetails;
