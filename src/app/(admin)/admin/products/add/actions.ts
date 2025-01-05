'use server';
import connectToDB from '../../db';

export async function addProduct(data: FormData) {
  const slug = data.get('table') as string;
  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const price = parseFloat(data.get('price') as string);
  const image = data.get('image') as string;

  if (!slug || !title || !description || isNaN(price) || !image) {
    throw new Error('Tüm alanlar doldurulmalıdır.');
  }

  const db = await connectToDB();
  const collection = db.collection(slug);

  // Yeni ürünü ekle
  const result = await collection.insertOne({
    title,
    description,
    price,
    image,
    createdAt: new Date(),
  });

  if (!result.insertedId) {
    throw new Error('Ürün eklenirken bir hata oluştu.');
  }

  console.log('Yeni Ürün Eklendi:', { slug, title, description, price, image });
}
