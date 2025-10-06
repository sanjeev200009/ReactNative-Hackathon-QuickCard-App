const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


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
const {connect} = require("mongoose");


const  app = express();
app.use(bodyParser.json())



mongoose.connect('mongodb://127.0.0.1:27017/quick_card_db').then(()=>{
    console.log('Database connected successfully')
}).catch((e)=> {
    console.log(e);
})

app.use('/api/v1/bookmarks', BookmarkRoute);
app.use('/api/v1/cart', CartRoute);
app.use('/api/v1/categories', CategoryRoute);
app.use('/api/v1/deals', DealRoute);
app.use('/api/v1/orders', OrderRoute);
app.use('/api/v1/payments', PaymentRoute);
app.use('/api/v1/payment-methods', PaymentMethodRoute);
app.use('/api/v1/products', ProductRoute);
app.use('/api/v1/refunds', RefundRoute);
app.use('/api/v1/returns', ReturnRoute);
app.use('/api/v1/reviews', ReviewRoute);
app.use('/api/v1/roles', RoleRoute);
app.use('/api/v1/users', UserRoute);
app.use('/api/v1/vouchers', VoucherRoute);
app.use('/api/v1/voucher-details', VoucherDetailsRoute);

app.listen(PORT, ()=> {
    console.log(`Server up & running on port ${PORT}`);
})




