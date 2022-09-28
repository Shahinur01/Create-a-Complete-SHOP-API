/* - Customers
name, email, cell, location, zip code, shipping address, billing
address,
- Product
name, slug, regular price, sale price, stock, short desc, long
desc, category, tag
- Category
name, slug, photo
- Tag
name, slug */
const express=require('express');
const dotenv= require('dotenv').config();

// init environment variables
const PORT=process.env.PORT || 3000;

// express init
const app=express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// listen port
app.listen(PORT,(req, res) =>{
    console.log(`server is listening http://localhost:${PORT}`);
})