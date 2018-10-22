export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production.com'
  : ''
  // : 'http://localhost:3000' // 若没有配置代理则需要写，若配置了代理则不需要写
