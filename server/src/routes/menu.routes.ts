import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
     const menuItems = [
  {
    name: 'Espresso',
    price: 120,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500'
  },
  {
    name: 'Cappuccino',
    price: 180,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500'
  },
  {
    name: 'Latte',
    price: 200,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500'
  },
  {
    name: 'Cold Coffee',
    price: 220,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500'
  },
  {
    name: 'Masala Tea',
    price: 60,
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500'
  },
  {
    name: 'Green Tea',
    price: 80,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500'
  },
  {
    name: 'Ginger Tea',
    price: 70,
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500'
  },
  {
    name: 'Lemon Tea',
    price: 75,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500'
  },
  {
    name: 'Veg Sandwich',
    price: 120,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500'
  },
  {
    name: 'French Fries',
    price: 140,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500'
  },
  {
    name: 'Veg Puff',
    price: 50,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500'
  },
 {
  name: 'Samosa',
  price: 40,
  image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500'
},
  {
    name: 'Chocolate Brownie',
    price: 110,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500'
  },
  {
    name: 'Cheese Burger',
    price: 180,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
  },
  {
    name: 'Veg Pizza',
    price: 250,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
  },
  {
    name: 'Chocolate Cake',
    price: 150,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'
  }
];
res.json(menuItems);
})

export default router;