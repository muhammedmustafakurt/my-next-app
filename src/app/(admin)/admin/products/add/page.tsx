'use client';
import React, { useState } from 'react';
import { addProduct } from './actions';
import "./products.css"; // CSS dosyasını uygun şekilde güncelleyin.

const tableOptions = [
  "Albea", "Bravo", "Clio", "Doblo", "Doker", "Egea",
  "Fiorino", "Fluence", "Kango", "Linea", "Logan", "Marea",
  "Megane", "Palio", "Punto", "Sandero", "Siena", "Stilo",
  "Symbol", "Taliant", "Talisman", "Tempra", "Tipo",
];

const AddProductPage = () => {
  const [table, setTable] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('table', table);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      await addProduct(formData);
      alert('Ürün başarıyla eklendi!');
    } catch (error: any) {
      alert(`Hata: ${error.message}`);
    }
  };

  return (
    <div className="add-product-container">
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="table">Tablo Seç:</label>
          <select
            id="table"
            name="table"
            value={table}
            onChange={(e) => setTable(e.target.value)}
            required
          >
            <option value="">Bir tablo seçin</option>
            {tableOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Başlık:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Açıklama:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Fiyat:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Resim URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ürün Ekle</button>
      </form>
    </div>
  );
};

export default AddProductPage;
