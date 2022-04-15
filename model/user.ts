import { Order } from './orders';

//might have to change user_id to string bc it's 18 digits
export interface User {
	user_id: number;
	money: number;
	orders: Order[];
}
