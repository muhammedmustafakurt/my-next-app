'use server';
import connectToDB from '../db';  // DB bağlantı fonksiyonunu import ediyoruz

interface Product {
  _id: string;
  image: string;
  title: string;
  price: number;
}

export async function getProducts(): Promise<Product[]> {
  // Veritabanına bağlanıyoruz
  const db = await connectToDB();
  const collection = db.collection('discounted_product'); // discounted_product koleksiyonu

  // Ürünleri çekiyoruz
  const products = await collection.find({}).toArray();

  if (products.length === 0) {
    throw new Error('Ürünler bulunamadı.');
  }

  console.log('Ürünler Başarıyla Listelendi:', products);

  // Ürünleri döndürüyoruz
  return products;
}
