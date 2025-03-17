const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT | 3000;


const BookmarkRoute = require('./route/BookmarkRoute');
const CartRoute = require('./route/CartRoute');
const CategoryRoute = require('./route/CategoryRoute');
const DealRoute = require('./route/DealRoute');
const OrderRoute = require('./route/OrderRoute');
const PaymentRoute = require('./route/PaymentRoute');
const PaymentMethodRoute = require('./route/PaymentMethodRoute');
const ProductRoute = require('./route/ProductRoute');
const RefundRoute = require('./route/RefundRoute');
const ReturnRoute = require('./route/ReturnRoute');
const ReviewRoute = require('./route/ReviewRoute');
const RoleRoute = require('./route/RoleRoute');
const UserRoute = require('./route/UserRoute');
const VoucherRoute = require('./route/VoucherRoute');
const VoucherDetailsRoute = require('./route/VoucherDetailsRoute');


const  app = express();
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:28000/quick_cart_db').then(()=>{
    console.log('Database connected successfully')
}).catch((e)=> {
    console.log(e);
})

app.use('/api/v1/bookmarks',BookmarkRoute);
app.use('/api/v1/bookmarks',CartRoute);
app.use('/api/v1/bookmarks',CategoryRoute);
app.use('/api/v1/bookmarks',DealRoute);
app.use('/api/v1/bookmarks',OrderRoute);
app.use('/api/v1/bookmarks',PaymentRoute);
app.use('/api/v1/bookmarks',PaymentMethodRoute);
app.use('/api/v1/bookmarks',ProductRoute);
app.use('/api/v1/bookmarks',RefundRoute);
app.use('/api/v1/bookmarks',ReturnRoute);
app.use('/api/v1/bookmarks',ReviewRoute);
app.use('/api/v1/bookmarks',RoleRoute);
app.use('/api/v1/bookmarks',UserRoute);
app.use('/api/v1/bookmarks',VoucherRoute);
app.use('/api/v1/bookmarks',VoucherDetailsRoute);

app.listen(PORT, ()=> {
    console.log(`Server up & running on port ${PORT}`);
})




