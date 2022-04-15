import { Schema, model } from 'mongoose';
import { User } from '../model/user';
import { Order } from '../model/orders';

const userSchema = new Schema({
	user_id: { type: Number, required: true },
	money: { type: Number, default: 10000 },
	orders: []
});

const ordersSchema = new Schema({
	ticker: { type: String, required: true },
	amount: { type: Number, required: true },
	price: { type: Number, required: true }
});

const UserModel = model<User>('User', userSchema);
const OrderModel = model<Order>('Order', ordersSchema);

module.exports = {
	UserModel: UserModel,
	OrderModel: OrderModel
};
