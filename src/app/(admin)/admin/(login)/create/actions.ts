'use server';
import argon2 from 'argon2';
import connectToDB from '../../db';

export async function createUser(username: string, password: string) {
  if (!username || !password) {
    throw new Error('Kullanıcı adı ve şifre doldurulmalıdır.');
  }

  const db = await connectToDB();
  const collection = db.collection('admin');

  // Check if the user already exists
  const existingUser = await collection.findOne({ username });
  if (existingUser) {
    throw new Error('Kullanıcı zaten mevcut.');
  }

  // Hash the password using argon2
  const hashedPassword = await argon2.hash(password);

  // Insert the new user into the database
  const newUser = {
    username,
    password: hashedPassword,
  };

  await collection.insertOne(newUser);

  console.log('Yeni kullanıcı oluşturuldu:', { username });

  return { success: true, username }; // Return the created username
}
