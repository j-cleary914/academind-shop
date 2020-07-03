import moment from 'moment';

const { loadAsync } = require('expo-font');

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    // return this.date.toLocaleDateString('en-GB', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    return moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default Order;
