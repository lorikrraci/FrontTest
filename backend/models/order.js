// models/orderModel.js

const db = require('../config/database'); // a mysql2 Pool or Connection

module.exports = {
  // 1. Get all orders for a specific user
  getOrdersByUserId: async (userId) => {
    const sql = 'SELECT * FROM orders WHERE userId = ?';
    const [rows] = await db.execute(sql, [userId]);
    return rows; // array of order objects
  },

  // 2. Create new order
  createOrder: async (orderData) => {
    const {
      userId,
      orderItems,
      shippingInfo, // If you want to store shippingInfo, either add column or merge it into orderItems/paymentInfo
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = orderData;

    // Note: You have a `paidAt` field in your Sequelize model; set it if needed
    const paidAt = new Date(); // or Date.now()
    
    const sql = `
      INSERT INTO orders (
        userId, 
        orderItems, 
        paymentInfo, 
        paidAt, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice,
        createdAt, 
        updatedAt
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;
    
    const [result] = await db.execute(sql, [
      userId,
      JSON.stringify(orderItems), // convert array/object to JSON string
      paymentInfo ? JSON.stringify(paymentInfo) : null,
      paidAt,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    ]);

    // return the newly created order ID
    return result.insertId;
  },

  // 3. Get single order by id (and optional userId)
  getOrderByIdAndUserId: async (orderId, userId) => {
    const sql = `SELECT * FROM orders WHERE id = ? AND userId = ? LIMIT 1`;
    const [rows] = await db.execute(sql, [orderId, userId]);
    return rows[0]; // single order object or undefined
  },

  // 4. Get single order by id (no user constraint) - for Admin or general usage
  getOrderById: async (orderId) => {
    const sql = `SELECT * FROM orders WHERE id = ? LIMIT 1`;
    const [rows] = await db.execute(sql, [orderId]);
    return rows[0];
  },

  // 5. Update order status
  updateOrderStatus: async (orderId, status, deliveredAt) => {
    // set `deliveredAt` if needed
    const fields = ['orderStatus = ?'];
    const values = [status];

    if (status === 'Delivered') {
      fields.push('deliveredAt = ?');
      values.push(new Date());
    }

    fields.push('updatedAt = NOW()');

    const sql = `
      UPDATE orders
      SET ${fields.join(', ')}
      WHERE id = ?
    `;
    values.push(orderId);

    const [result] = await db.execute(sql, values);
    return result.affectedRows;
  },

  // 6. Delete order
  deleteOrder: async (orderId) => {
    const sql = `DELETE FROM orders WHERE id = ?`;
    const [result] = await db.execute(sql, [orderId]);
    return result.affectedRows;
  }
};
