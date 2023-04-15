const mockData = [
  {
    id: '1',
    createdAt: '2023-04-15T10:43:25.607Z',
    product: 'Test product title',
    points: 100,
    image: 'https://testimage.com',
    is_redemption: false,
  },
  {
    id: '2',
    createdAt: '2023-04-15T10:43:25.607Z',
    product: 'Test product title',
    points: 200,
    image: 'https://testimage.com',
    is_redemption: true,
  },
];

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: mockData})),
}));

jest.mock('./src/providers', () => ({
  get: jest.fn(() => Promise.resolve({data: mockData})),
}));
