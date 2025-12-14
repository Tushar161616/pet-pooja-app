const FoodData = [
  {
    "id": 1,
    "food_name": "Aloo Paratha",
    "food_categroy": "breakfast",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://kashkandhaba.com/wp-content/uploads/2025/01/ALOOParatha.jpeg",
    "price": 80
  },
  {
    "id": 2,
    "food_name": "Masala Omelette",
    "food_categroy": "breakfast",
    "food_type": "Non-Veg",
     "food_quantity": 1,
    "food_image": "https://foodschmooze.org/wp-content/uploads/2014/08/Flavorwalla_Floyd-Cardoz_Sunday-Morning-Masala-Omelet_slider.jpg",
    "price": 60
  },
  {
    "id": 3,
    "food_name": "Poha",
    "food_categroy": "breakfast",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://thumbs.dreamstime.com/b/indian-vegetarian-glutenfree-snack-poha-indian-street-food-snack-poha-also-served-breakfast-madhya-pradesh-112711698.jpg",
    "price": 40
  },
  {
    "id": 4,
    "food_name": "Idli Sambhar",
    "food_categroy": "breakfast",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://www.mapsofindia.com/ci-moi-images/my-india/Idli-Sambhar.jpg",
    "price": 60
  },
  {
    "id": 5,
    "food_name": "Paneer Sandwich",
    "food_categroy": "breakfast",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://www.ruchikrandhap.com/wp-content/uploads/2017/09/Paneer-Corn-Spinach-Sandwich-4-1.jpg",
    "price": 70
  },

  {
    "id": 6,
    "food_name": "Tomato Soup",
    "food_categroy": "soup",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://www.allrecipes.com/thmb/EGp48npVJqDku38H1CFWwgwfAmM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/57661-tomato-bisque-iii-VAT-007-4x3-44151fe6eccf42e2b7fecb632f3ff198.jpg",
    "price": 90
  },
  {
    "id": 7,
    "food_name": "Sweet Corn Soup",
    "food_categroy": "soup",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://www.indianrecipeinfo.com/wp-content/uploads/2011/12/Sweet-Corn-Soup.jpg",
    "price": 80
  },
  {
    "id": 8,
    "food_name": "Hot & Sour Soup",
    "food_categroy": "soup",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://streamofflavors.com/wp-content/uploads/2021/08/Chicken-Hot-and-Sour-Soup-Logo-1.jpg",
    "price": 95
  },
  {
    "id": 9,
    "food_name": "Chicken Soup",
    "food_categroy": "soup",
    "food_type": "Non-Veg",
    "food_quantity": 1,
    "food_image": "https://www.seriouseats.com/thmb/2nouHHsjM0bN1vwXMOZGUkLFsJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg",
    "price": 120
  },
  {
    "id": 10,
    "food_name": "Manchow Soup",
    "food_categroy": "soup",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://www.awesomecuisine.com/wp-content/uploads/2010/03/Vegetable-Manchow-Soup.jpg",
    "price": 100
  },

  {
    "id": 11,
    "food_name": "White Sauce Pasta",
    "food_categroy": "pasta",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://www.natashamohan.com/wp-content/uploads/2024/11/white-sauce-pasta-scaled.webp",
    "price": 150
  },
  {
    "id": 12,
    "food_name": "Red Sauce Pasta",
    "food_categroy": "pasta",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://patelcafenrestro.com/wp-content/uploads/2024/08/DM-2024-08-09T122142.723.png",
    "price": 140
  },
  {
    "id": 13,
    "food_name": "Arrabiata Pasta",
    "food_categroy": "pasta",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://www.giallozafferano.com/images/260-26061/Penne-all-arrabbiata_1200x800.jpg",
    "price": 160
  },
  {
    "id": 14,
    "food_name": "Chicken Alfredo Pasta",
    "food_categroy": "pasta",
    "food_type": "Non-Veg",
    "food_quantity": 1,
    "food_image": "https://www.allrecipes.com/thmb/ziUOvj4f_me5yvZhYCUy0n4IKbQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/276725-creamy-chicken-alfredo-VAT-001-Beauty-4x3-c4b026db5cb349f4b8fd627c56f91a42.jpg",
    "price": 220
  },
  {
    "id": 15,
    "food_name": "Mac & Cheese",
    "food_categroy": "pasta",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://hips.hearstapps.com/hmg-prod/images/mac-and-cheese-index-64d25bdf03b98.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    "price": 170
  },

  {
    "id": 16,
    "food_name": "Margherita Pizza",
    "food_categroy": "pizza",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2w-6ljxAJtEImAJ4zBsRnou1CoSAVmgvQw&s",
    "price": 249
  },
  {
    "id": 17,
    "food_name": "Farmhouse Pizza",
    "food_categroy": "pizza",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://assets.foodhub.com/static/7d67b21e4d82f6fc549386661f29be8a/img/1705585058phppHrtD5.jpg",
    "price": 299
  },
  {
    "id": 18,
    "food_name": "Paneer Tikka Pizza",
    "food_categroy": "pizza",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://cdn.indiaphile.info/wp-content/uploads/2012/10/tandooripizza-2349.jpg?width=1200&crop_gravity=center&aspect_ratio=auto&q=75",
    "price": 320
  },
  {
    "id": 19,
    "food_name": "Pepperoni Pizza",
    "food_categroy": "pizza",
    "food_type": "Non-Veg",
     "food_quantity": 1,
    "food_image": "https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=",
    "price": 349
  },
  {
    "id": 20,
    "food_name": "Chicken BBQ Pizza",
    "food_categroy": "pizza",
    "food_type": "Non-Veg",
     "food_quantity": 1,
    "food_image": "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
    "price": 379
  },

  {
    "id": 21,
    "food_name": "Veg Burger",
    "food_categroy": "burger",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://www.yummyfoodrecipes.com/resources/picture/org/Veg-Burger-Recipe.jpg",
    "price": 99
  },
  {
    "id": 22,
    "food_name": "Paneer Burger",
    "food_categroy": "burger",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://mcdonaldsblog.in/wp-content/uploads/2016/06/mcspicy-paneer-1-1.jpg",
    "price": 120
  },
  {
    "id": 23,
    "food_name": "Cheese Burger",
    "food_categroy": "burger",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://www.oliveandmango.com/images/uploads/2021_06_21_classic_grilled_cheeseburger_1.jpg",
    "price": 110
  },
  {
    "id": 24,
    "food_name": "Chicken Burger",
    "food_categroy": "burger",
    "food_type": "Non-Veg",
    "food_quantity": 1,
    "food_image": "https://media.istockphoto.com/id/172449461/photo/chicken-burger.jpg?s=612x612&w=0&k=20&c=hxb7Yr7ZtGbfJGeHWMMBFl-VdiDoZdKd7TeZHj3wFEs=",
    "price": 130
  },
  {
    "id": 25,
    "food_name": "Double Patty Chicken Burger",
    "food_categroy": "burger",
    "food_type": "Non-Veg",
    "food_quantity": 1,
    "food_image": "https://images.ctfassets.net/uexfe9h31g3m/7LNhZll33W8WVw3m0wDkq7/e10ddf2ab94bb21837d38e19b16c80ba/double_chicken_burger_1024x768.png?w=2000&h=1500&fm=webp&fit=thumb&q=100",
    "price": 160
  },

  {
    "id": 26,
    "food_name": "Veg Thali",
    "food_categroy": "thali",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://b.zmtcdn.com/data/dish_photos/94c/d664afc8b10cccf8ee72acbd958d494c.jpg",
    "price": 180
  },
  {
    "id": 27,
    "food_name": "Deluxe Veg Thali",
    "food_categroy": "thali",
    "food_type": "Veg",
     "food_quantity": 1,
    "food_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcL0lsMcDNmGuI3JJ4p2D0NyoA4ugg8j6Aw&s",
    "price": 230
  },
  {
    "id": 28,
    "food_name": "Gujarati Thali",
    "food_categroy": "thali",
    "food_type": "Veg",
    "food_quantity": 1,
    "food_image": "https://www.gujaratexpert.com/blog/wp-content/uploads/2024/01/Gujarati-Thali.jpg",
    "price": 200
  },
  {
    "id": 29,
    "food_name": "Chicken Thali",
    "food_categroy": "thali",
    "food_type": "Non-Veg",
     "food_quantity": 1,
    "food_image": "https://img.freepik.com/premium-photo/special-chicken-thali-food-platter-consists-variety-veggieschicken-meat-lentilsrice-sweet-dish-snacks-etc-selective-focus_726363-556.jpg?semt=ais_hybrid&w=740&q=80",
    "price": 250
  },
  {
    "id": 30,
    "food_name": "Fish Thali",
    "food_categroy": "thali",
    "food_type": "Non-Veg",
     "food_quantity": 1,
    "food_image": "https://static.wixstatic.com/media/798804_2c52eea0fee94049ad5ba69a8d0ed6fb~mv2.webp/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/798804_2c52eea0fee94049ad5ba69a8d0ed6fb~mv2.webp",
    "price": 300
  }
];

export default FoodData;
