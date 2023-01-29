const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderItemSchema = Schema({
  name: {
    type: String,
    minlength: [5, 'panjang nama makanan minimal 5 karakter'],
    required: [true, 'name must be filled'],
  },
  price: {
    type: Number,
    required: [true, 'harga item harus di isi'],
  },
  qty: {
    type: Number,
    minlength: [5, 'panjang nama makanan minimal 5 karakter'],
    required: [true, 'kualitas harus di isi !'],
    min: [1, 'kualitas minimal 1'],
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
  },
});

module.exports = model('OrderItem', orderItemSchema);
