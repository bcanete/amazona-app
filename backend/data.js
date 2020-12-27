import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ben',
      email: 'ben@email.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'John@email.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },

  ],
  products: [
    {
      
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 6,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Addidas Fit Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 110,
      countInStock: 4,
      brand: 'Addidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Nike Bottoms',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 125,
      countInStock: 0,
      brand: 'Nike',
      rating: 3,
      numReviews: 13,
      description: 'high quality product',
    },
    {
      
      name: 'Nike Jersey',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 150,
      countInStock: 9,
      brand: 'Nike',
      rating: 5.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Addidas Jogger',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 200,
      countInStock: 3,
      brand: 'Addidas',
      rating: 5.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Addidas Denim',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 120,
      countInStock: 5,
      brand: 'Addidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ]
}
export default data;