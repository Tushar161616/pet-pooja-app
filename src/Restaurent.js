const Restaurent = [
  { "id": 1, "name": "Spice Villa", "image": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1660793744/ooubslgivq58ilrlpw0u.jpg", "rating": 4.6, "location": "Vaishali Nagar, Jaipur", "is_open": true, "distance": "1.2 km" },
  
  { "id": 2, "name": "Burger Hub", "image": "https://b.zmtcdn.com/data/pictures/chains/1/123091/53b848212b0dcd170b7668a3579d87d6.png", "rating": 4.3, "location": "Malviya Nagar, Jaipur", "is_open": true, "distance": "2.5 km" },
  
  { "id": 3, "name": "Pizza Point", "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/2b/3b/19/aradiginiz-lezzet-iste.jpg?w=500&h=-1&s=1", "rating": 4.4, "location": "Tonk Road, Jaipur", "is_open": false, "distance": "3.1 km" },
  
  { "id": 4, "name": "Royal Thali", "image": "https://b.zmtcdn.com/data/pictures/2/21568562/fb804bca7efe42ed54eca2573b92cecd.jpeg?fit=around|960:500&crop=960:500;*,*", "rating": 4.7, "location": "C-Scheme, Jaipur", "is_open": true, "distance": "1.8 km" },
  
  { "id": 5, "name": "South Indian Express", "image": "https://content.jdmagicbox.com/comp/vadodara/p8/0265px265.x265.170612153206.a2p8/catalogue/sach-me-south-express-alkapuri-vadodara-south-indian-restaurants-2a8vviv.jpg", "rating": 4.2, "location": "Mansarovar, Jaipur", "is_open": true, "distance": "2.9 km" },
  
  { "id": 6, "name": "Chinese Wok", "image": "https://b.zmtcdn.com/data/pictures/7/21030667/9a32477d552e0233e9b5546ae3f49e53.jpg", "rating": 4.1, "location": "Jagatpura, Jaipur", "is_open": false, "distance": "4.0 km" },
  
  { "id": 7, "name": "Cafe Jaipur", "image": "https://b.zmtcdn.com/data/pictures/6/21607486/1f92d869b87584ded2954e2ec8c1513e.jpg?fit=around|960:500&crop=960:500;*,*", "rating": 4.5, "location": "Bapu Nagar, Jaipur", "is_open": true, "distance": "1.5 km" },
  
  { "id": 8, "name": "Desi Tadka", "image": "https://content3.jdmagicbox.com/comp/jabalpur/z6/9999px761.x761.210930202817.p8z6/catalogue/desi-tadka-vijay-nagar-colony-jabalpur-jabalpur-desi-tadka-iu1kawcmjw.jpg", "rating": 4.0, "location": "Shyam Nagar, Jaipur", "is_open": true, "distance": "3.6 km" },
  
  { "id": 9, "name": "Urban Bites", "image": "https://content.jdmagicbox.com/comp/aurangabad-maharashtra/e5/9999px240.x240.220405215559.e9e5/catalogue/urban-bites-cafe-cidco-n-4-aurangabad-maharashtra-fch6n01gtj.jpg", "rating": 4.4, "location": "Civil Lines, Jaipur", "is_open": true, "distance": "2.0 km" },
  
  { "id": 10, "name": "Tandoori Nights", "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/4c/8c/85/tandoori-night-s-original.jpg?w=500&h=-1&s=1", "rating": 4.6, "location": "Raja Park, Jaipur", "is_open": true, "distance": "2.7 km" },
  
  { "id": 11, "name": "Biryani House", "image": "https://images.unsplash.com/photo-1631515242808-497c3fbd3972", "rating": 4.3, "location": "Gopalpura, Jaipur", "is_open": false, "distance": "3.4 km" },
  
  { "id": 12, "name": "Street Zaika", "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", "rating": 4.1, "location": "Ajmer Road, Jaipur", "is_open": true, "distance": "4.2 km" },
  
  { "id": 13, "name": "Veggie Delight", "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", "rating": 4.5, "location": "Sodala, Jaipur", "is_open": true, "distance": "2.1 km" },
  
  { "id": 14, "name": "Kebab Corner", "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b", "rating": 4.2, "location": "Hasanpura, Jaipur", "is_open": false, "distance": "3.8 km" },
  
  { "id": 15, "name": "Cafe Pink City", "image": "https://b.zmtcdn.com/data/pictures/6/18858316/4829e305e75094c083ca5ceabadbfd1a_featured_v2.jpg", "rating": 4.6, "location": "MI Road, Jaipur", "is_open": true, "distance": "1.6 km" },
  
  { "id": 16, "name": "Roll Express", "image": "https://content.jdmagicbox.com/comp/chandigarh/p3/0172px172.x172.220413151259.q9p3/catalogue/-9yv1e9y4v6.jpg", "rating": 4.0, "location": "Pratap Nagar, Jaipur", "is_open": true, "distance": "4.8 km" },
  
  { "id": 17, "name": "Grill Nation", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQHkLCN10QBTYu6UY6MJAxsS1e8UBZOJdPg&s", "rating": 4.7, "location": "Jawahar Circle, Jaipur", "is_open": true, "distance": "3.0 km" },
  
  { "id": 18, "name": "Food Factory", "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", "rating": 4.1, "location": "Kalwar Road, Jaipur", "is_open": false, "distance": "5.0 km" },
  
  { "id": 19, "name": "Chaat Bazaar", "image": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/29/b5/be/chaat-bazaar-al-nahda.jpg", "rating": 4.3, "location": "Johari Bazaar, Jaipur", "is_open": true, "distance": "1.9 km" },
  
  { "id": 20, "name": "Hungry Birds", "image": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445", "rating": 4.2, "location": "Sindhi Camp, Jaipur", "is_open": true, "distance": "2.6 km" },
  
  { "id": 21, "name": "Masala Junction", "image": "https://b.zmtcdn.com/data/pictures/3/21550803/e93c069272b66a66744d4e6a619c23b5.jpg?fit=around|960:500&crop=960:500;*,*", "rating": 4.5, "location": "Ram Nagar, Jaipur", "is_open": true, "distance": "2.3 km" },
  
  { "id": 22, "name": "Urban Rasoi", "image": "https://content.jdmagicbox.com/comp/ambikapur/h8/9999p7774.7774.230102022738.y5h8/catalogue/urban-rasoi-ambikapur-restaurants-72m1jml9l4.jpg", "rating": 4.4, "location": "Adarsh Nagar, Jaipur", "is_open": false, "distance": "3.2 km" },
  
  { "id": 23, "name": "Taste of Rajasthan", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwRVSfswkFjkGzngDL_zp-p1k2Tu8ds6wNg&s", "rating": 4.8, "location": "Amer Road, Jaipur", "is_open": true, "distance": "4.5 km" },
  
  { "id": 24, "name": "Bistro 57", "image": "https://images.unsplash.com/photo-1559339352-11d035aa65de", "rating": 4.1, "location": "Shivaji Nagar, Jaipur", "is_open": true, "distance": "2.4 km" },
  
  { "id": 25, "name": "Night Owl Cafe", "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0", "rating": 4.6, "location": "Lal Kothi, Jaipur", "is_open": true, "distance": "1.7 km" },
  
  { "id": 26, "name": "Spicy Street", "image": "https://b.zmtcdn.com/data/pictures/0/20376990/5ff52d798be7152c6cebfddd63724e1d.jpg", "rating": 4.0, "location": "Vidhyadhar Nagar, Jaipur", "is_open": false, "distance": "5.2 km" },
  
  { "id": 27, "name": "Daily Dosa", "image": "https://b.zmtcdn.com/data/pictures/1/20298191/ad9e7b663580d782f438516049f6c288.jpeg", "rating": 4.3, "location": "Sanganer, Jaipur", "is_open": true, "distance": "4.6 km" },
  
  { "id": 28, "name": "Mughal Darbar", "image": "https://content.jdmagicbox.com/comp/howrah/m6/9999p3214.3214.151109161658.i8m6/catalogue/mughal-darbar-restrauant-howrah-dsr1t8rig9.jpg", "rating": 4.7, "location": "Subhash Nagar, Jaipur", "is_open": true, "distance": "3.9 km" },
  
  { "id": 29, "name": "Quick Bites", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qYCdLcwa5YHFXBU8--Yxpve9PXjULj2O7g&s", "rating": 4.1, "location": "Khatipura, Jaipur", "is_open": true, "distance": "4.1 km" },
  
  { "id": 30, "name": "Foodies Hub", "image": "https://b.zmtcdn.com/data/pictures/6/20292316/e97f002576de05a4359e0cc8e2cebc68.jpeg", "rating": 4.5, "location": "Govind Nagar, Jaipur", "is_open": true, "distance": "2.8 km" }
];

export default Restaurent;
