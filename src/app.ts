import express from 'express';
import cors = require('cors');
const {createProxyMiddleware} = require('http-proxy-middleware');
import helmet from 'helmet';
const app = express();

//middleware setup
app.use(cors());
app.use(helmet());
app.disable('x-powered-by');//disable the x-powered-by header

const services = [
  {
    name:'restaurant',
    targetUrl:'http://localhost:8001'
  },
  {
    name:'user',
    targetUrl:'http://localhost:8002'
  },
];

services.forEach(({name,targetUrl})=>{
  const proxyOptions = {
    target:targetUrl,
    changeOrigin:true,
    pathRewrite:{
      [`^/${name}`]:''
    }
  }

  app.use(`/${name}`,createProxyMiddleware(proxyOptions));
})




export default app;