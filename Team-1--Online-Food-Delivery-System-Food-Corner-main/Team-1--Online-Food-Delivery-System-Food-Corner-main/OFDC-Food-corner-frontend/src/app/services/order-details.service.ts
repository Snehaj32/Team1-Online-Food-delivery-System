import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:" Paneer Burger is a unique and delicious burger recipe and is an Indian fusion recipe. The burger is a part of western cuisine originally.",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
    {
      id:7,
      foodName:"Onion Rings",
      foodDetails:"Crispy Onion rings filled with cheese and onion and comes with Schezwan, mint and white sause",
      foodPrice:150,
      foodImg:"/assets/img/Onion -ring.jfif"
    },
    {
      id:8,
      foodName:"Cheese balls",
      foodDetails:"Crispy cheese balls that tastes delicious with great flavors. These potato cheese balls make for a great party snack.",
      foodPrice:250,
      foodImg:"/assets/img/food 6.jfif"
    },
    {
      id:9,
      foodName:"Chicken soup",
      foodDetails:". The classic chicken soup consists of a clear chicken broth, often with pieces of chicken or vegetables; common additions are pasta, noodles, dumplings, or grains such as rice and barley.",
      foodPrice:90,
      foodImg:"/assets/img/food 9.jfif"
    }
    ,
    {
      id:10,
      foodName:"Cold coffee",
      foodDetails:"Cold coffee is a creamy and popular cold beverage, that has mainly three ingredients – instant coffee, milk, and sugar. it is a perfect drink to sip on during hot days of summers.",
      foodPrice:70,
      foodImg:"/assets/img/food 3.jpg"
    }
    ,
    {
      id:11,
      foodName:"Cup Cake",
      foodDetails:"A cupcake (also British English: fairy cake; Hiberno-English: bun) is a small cake designed to serve one person",
      foodPrice:50,
      foodImg:"/assets/img/food 1.jpg"
    }
    ,
    {
      id:12,
      foodName:"Potato fries",
      foodDetails:"French fries or simply fries or chips, are pieces of potato that have been deep-fried. ",
      foodPrice:120,
      foodImg:"/assets/img/food 2.jfif"
    }
    
  ]


  

}
