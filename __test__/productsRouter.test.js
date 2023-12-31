const request = require('supertest');
const express = require('express');
const app = express();
const productsRouter = require('../routes/productsRouter');

// Mock controllers
jest.mock('../controllers/productsController', () => ({
  getAllProducts: jest.fn((req, res) => res.sendStatus(200)),
  createProduct: jest.fn((req, res) => res.sendStatus(201)),
  getProductById: jest.fn((req, res) => res.sendStatus(200)),
  updateProduct: jest.fn((req, res) => res.sendStatus(200)),
  deleteProduct: jest.fn((req, res) => res.sendStatus(200)),
  validateProductId: jest.fn((req, res, next) => next()),
  checkProducts: jest.fn((req, res, next) => next())
}));

app.use('/products', productsRouter);

describe('Products Router', () => {
  afterEach(() => {
    // Clear all mock function calls after each test
    jest.clearAllMocks();
  });

  it('should return all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
 
 
  });

  it('should return a product by ID', async () => {
    const response = await request(app).get('/products/123');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});


  });

  it('should create a new product', async () => {
    const response = await request(app).post('/products').send({});
    expect(response.status).toBe(201);


  });

  it('should update a product by ID', async () => {
    const response = await request(app).put('/products/123').send({});
    expect(response.status).toBe(200);

  });

  it('should delete a product by ID', async () => {
    const response = await request(app).delete('/products/123');
    expect(response.status).toBe(200);

  });
});
