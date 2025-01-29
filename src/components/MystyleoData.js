import Image from "next/image";
import SubNavMen from "./header/subNav/SubNavMen";
import SubWomen from "./header/subNav/SubWomen";
import SubKids from "./header/subNav/SubKids";
import SubHomeLiving from "./header/subNav/SubHomeLiving";
import SubBeauty from "./header/subNav/SubBeauty";
import DownArrayIcon from "@/components/icons/DownArrayIcon";
import PlusIcon from "@/components/icons/PlusIcons";
import MinusIcon from "@/components/icons/MinusIcon";
export const mystyleo = {
  header: [
    {
      id: "1",
      name: "MEN",
      url: "/men",
      subNavHover: () => <SubNavMen />,
      DownArray: <DownArrayIcon />,
      plusIcon: <PlusIcon />,
      minusIcon: <MinusIcon />,
    },
    {
      id: "2",
      name: "WOMEN",
      url: "/women",
      subNavHover: () => <SubWomen />,
      DownArray: <DownArrayIcon />,
      plusIcon: <PlusIcon />,
      minusIcon: <MinusIcon />,
    },
    {
      id: "3",
      name: "KIDS",
      url: "/kids",
      subNavHover: () => <SubKids />,
      DownArray: <DownArrayIcon />,
      plusIcon: <PlusIcon />,
      minusIcon: <MinusIcon />,
    },
    {
      id: "4",
      name: "HOME & LIVING",
      url: "/homeliving",
      subNavHover: () => <SubHomeLiving />,
      DownArray: <DownArrayIcon />,
      plusIcon: <PlusIcon />,
      minusIcon: <MinusIcon />,
    },
    {
      id: "5",
      name: "BEAUTY",
      url: "/beauty",
      subNavHover: () => <SubBeauty />,
      DownArray: <DownArrayIcon />,
      plusIcon: <PlusIcon />,
      minusIcon: <MinusIcon />,
    },
  ],
  menHoverData: [
    {
      id: 1,
      heading: "FashionAccessories",
      url: "#",
      points: [
        { name: "Wallets", url: "#" },
        { name: "Belts", url: "#" },
        { name: "Perfumes & Body Mists", url: "#" },
        { name: "Trimmers", url: "#" },
        { name: "Deodorants", url: "#" },
        // { name: "Ties, Cufflinks & Pocket Squares", url: "#" },
        { name: "Accessory Gift Sets", url: "#" },
        { name: "Caps & Hats", url: "#" },
        { name: "Mufflers, Scarves & Glovers", url: "#" },
        { name: "Phone Cases", url: "#" },
        { name: "Rings & wristwear", url: "#" },
        { name: "Helmets", url: "#" },
      ],
    },

    {
      id: 2,
      heading: "Indian & Festive Wear",
      url: "#",
      points: [
        { name: "Kurtas & Kurta Sets", url: "#" },
        { name: "Sherwains", url: "#" },
        { name: "Sherwains", url: "#" },
        { name: "Dhotis", url: "#" },
      ],
    },
    {
      id: 3,
      heading: "topWear",
      url: "#",
      points: [
        { name: "T-shirts", url: "#" },
        { name: "Casual Shirts", url: "#" },
        { name: "Formal Shirts", url: "#" },
        { name: "SweatShirts", url: "#" },
        { name: "Sweaters", url: "#" },
        { name: "Jackets", url: "#" },
        { name: "Blazers & Coats", url: "#" },
        { name: "Suits", url: "#" },
        { name: "Rain Jackets", url: "#" },
      ],
    },
    {
      id: 4,
      heading: "BottomWear",
      url: "#",
      points: [
        { name: "Jeans", url: "#" },
        { name: "Casual Trousers", url: "#" },
        { name: "Formal Trousers", url: "#" },
        { name: "Shorts", url: "#" },
        { name: "Track Pants & Joggers", url: "#" },
      ],
    },
    {
      id: 5,
      heading: "Innerwear & Sleepwear",
      url: "#",
      points: [
        { name: "Briefs & Trunks", url: "#" },
        { name: "Boxers", url: "#" },
        { name: "Verts", url: "#" },
        { name: "Sleepwear & Loungwear", url: "#" },
        { name: "Thermals", url: "#" },
      ],
    },
    {
      id: 6,
      heading: "Footwear",
      url: "#",
      points: [
        { name: "Casual Shoes", url: "#" },
        { name: "Sports Shoes", url: "#" },
        { name: "Formal Shoes", url: "#" },
        { name: "Sneakers Shoes", url: "#" },
        { name: "Sandals & Floaters", url: "#" },
        { name: "Flip Flops", url: "#" },
        { name: "Socks", url: "#" },
      ],
    },

    {
      id: 7,
      heading: "SportsActiveWear",
      url: "#",
      points: [
        { name: "Sports Shoes", url: "#" },
        { name: "Sports Sandals", url: "#" },
        { name: "Active T-shirts", url: "#" },
        { name: "Track Pants & Shorts", url: "#" },
        { name: "Tracksuits", url: "#" },
        { name: "Jackets & Sweatshirts", url: "#" },
        { name: "Sports Accessories", url: "#" },
        { name: "Swimwear", url: "#" },
      ],
    },
    {
      id: 8,
      heading: "Gedgets",
      url: "#",
      points: [
        { name: "Smarts Wearables", url: "#" },
        { name: "Fitness Gadgets", url: "#" },
        { name: "Headphones", url: "#" },
        { name: "Speakers", url: "#" },
      ],
    },
  ],

  womenHoverData: [
    {
      id: 1,
      heading: "indian & Fusion Wear ",
      url: "#",
      points: [
        { name: "Kurtas & Suits", url: "#" },
        { name: "Kurtas, Tunics & Tops", url: "#" },
        { name: "Sarees", url: "#" },
        { name: "Ethnic Wear", url: "#" },
        { name: "Leggings, Salwars & Churidars", url: "#" },
        { name: "Skirts & Palazzos", url: "#" },
        { name: "Dress Materials", url: "#" },
        { name: "Lehenga Cholis", url: "#" },
        { name: "Dupattas & Shawls", url: "#" },
        { name: "Jackets", url: "#" },
      ],
    },
    {
      id: 2,
      heading: "Sport & Active Wear",
      url: "#",
      points: [
        { name: "Clothing", url: "#" },
        { name: "Footerwear", url: "#" },
        { name: "Sports Accessories", url: "#" },
        { name: "Sports Equipments", url: "#" },
      ],
    },
    {
      id: 3,
      heading: "Western Wear",
      url: "#",
      points: [
        { name: "Dresses", url: "#" },
        { name: "Tops", url: "#" },
        { name: "Tshirt", url: "#" },
        { name: "Jeans", url: "#" },
        { name: "Trousers & Capris", url: "#" },
        { name: "Shorts & Skirts", url: "#" },
        { name: "Co-ords", url: "#" },
        { name: "Playsuits", url: "#" },
        { name: "Jumpsuits", url: "#" },
        { name: "Shrugs", url: "#" },
        { name: "Sweaters & Sweatshirts", url: "#" },
        { name: "Jackets & Coats", url: "#" },
        { name: "Blazer & Waistcoats", url: "#" },
      ],
    },
    {
      id: 4,
      heading: "FootWear",
      url: "#",
      points: [
        { name: "Flats", url: "#" },
        { name: "Casual Shoes", url: "#" },
        { name: "Heels", url: "#" },
        { name: "Boots", url: "#" },
        { name: "Sports Shoes & Floaters", url: "#" },
      ],
    },

    {
      id: 5,
      heading: "Lingerie & Sleepwear",
      url: "#",
      points: [
        { name: "Bra", url: "#" },
        { name: "Briefs", url: "#" },
        { name: "Shapewear", url: "#" },
        { name: "Sleepwear & Loungewear", url: "#" },
        { name: "Swimwear", url: "#" },
        { name: "Camisoles & Thermals", url: "#" },
      ],
    },
    {
      id: 6,
      heading: "Beauty & Personal Care",
      url: "#",
      points: [
        { name: "Makeup", url: "#" },
        { name: "Skincare", url: "#" },
        { name: "Premiume Beauty", url: "#" },
        { name: "Lipsticks", url: "#" },
        { name: "Fragrances", url: "#" },
      ],
    },
    {
      id: 7,
      heading: "Gadgets",
      url: "#",
      points: [
        { name: "Smart Wearables", url: "#" },
        { name: "Fitness Gadgest", url: "#" },
        { name: "HeadPhones", url: "#" },
        { name: "Speakers", url: "#" },
      ],
    },
    {
      id: 8,
      heading: "Jewellery",
      url: "#",
      points: [
        { name: "Fashion", url: "#" },
        { name: "Fine Jewellery", url: "#" },
        { name: "Earring", url: "#" },
      ],
    },
  ],

  homeLivingData: [
    {
      id: 1,
      heading: "Bed Linen & Furnishing",
      url: "#",
      points: [
        { name: "Bed Runners", url: "#" },
        { name: "Mattress Protectors", url: "#" },
        { name: "BedSheets", url: "#" },
        { name: "Bedding Sets", url: "#" },
        { name: "Blankets, Quilts & Dohars", url: "#" },
        { name: "Pillows & Pillow Covers", url: "#" },
        { name: "Bed Covers", url: "#" },
        { name: "Diwan Sets", url: "#" },
        { name: "Chair Pads & Covers", url: "#" },
        { name: "Sofa Covers", url: "#" },
      ],
    },
    {
      id: 2,
      heading: "Florring",
      url: "#",
      points: [
        { name: "Floor Runners", url: "#" },
        { name: "Carpets", url: "#" },
        { name: "Floor Mats & Dhurries", url: "#" },
        { name: "Doors Mats", url: "#" },
      ],
    },
    {
      id: 3,
      heading: "Bath",
      url: "#",
      points: [
        { name: "Bath Towels", url: "#" },
        { name: "Hand & Face Towals", url: "#" },
        { name: "Beach Towels", url: "#" },
        { name: "Towels Set", url: "#" },
        { name: "Bath Rugs", url: "#" },
        { name: "Bath Robes", url: "#" },
        { name: "Bathroom Accessories", url: "#" },
        { name: "Shower Curtains", url: "#" },
      ],
    },
    {
      id: 4,
      heading: "Lamps & Lighting",
      url: "#",
      points: [
        { name: "Floor Lamps", url: "#" },
        { name: "Ceiling Lamps", url: "#" },
        { name: "Table Lamps", url: "#" },
        { name: "wall Lamps", url: "#" },
        { name: "Outdoor Lamps", url: "#" },
        { name: "String Lamps", url: "#" },
      ],
    },
    {
      id: 5,
      heading: "HomeDecor",
      url: "#",
      points: [
        { name: "Plants & Planters", url: "#" },
        { name: "Aromas & Candles", url: "#" },
        { name: "Clocks", url: "#" },
        { name: "Mirrors", url: "#" },
        { name: "Wall Decor", url: "#" },
        { name: "Pooja Essentials", url: "#" },
        { name: "Wall Shelves", url: "#" },
        { name: "Fountains", url: "#" },
        { name: "Showpieces & Vases", url: "#" },
        { name: "Ottoman", url: "#" },
      ],
    },
    {
      id: 7,
      heading: "Storage",
      url: "#",
      points: [
        { name: "Bins", url: "#" },
        { name: "Hangers", url: "#" },
        { name: "Organisers", url: "#" },
        { name: "Hooks & Holders", url: "#" },
        { name: "Laundry Bags", url: "#" },
      ],
    },
    {
      id: 6,
      heading: "Kitchen & Table",
      url: "#",
      points: [
        { name: "Table Runners", url: "#" },
        { name: "Dinnerware & Servewear", url: "#" },
        { name: "Cups and Mugs", url: "#" },
        { name: "Bakewear & Cookwear", url: "#" },
        { name: "Kitchen Storage & Tools", url: "#" },
        { name: "Bar & Drinkwear", url: "#" },
        { name: "Table Covers & Furnishings", url: "#" },
      ],
    },
  ],

  sliderPeopleDate: [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_640.jpg",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/12/35/woman-1845100_640.jpg",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_640.jpg",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/12/27/blonde-1845052_640.jpg",
    },
    {
      id: 5,
      image:
        "https://t3.ftcdn.net/jpg/06/26/62/62/240_F_626626201_2DWnuA2ZdlsFXKMIXH8D65S723l8dtUc.jpg",
    },
    {
      id: 6,
      image:
        "https://cdn.pixabay.com/photo/2020/01/11/14/36/woman-4757707_640.jpg",
    },
    {
      id: 7,
      image:
        "https://t3.ftcdn.net/jpg/06/48/03/46/240_F_648034617_IaQvxPzzGIS8I9qtr74oZJBX8ceGfEHW.jpg",
    },
  ],
  profile: [
    { name: "Orders", url: "#" },
    { name: "Whislist", url: "#" },
    { name: "Contacts Us", url: "#" },
    { name: "Coupons", url: "#" },
    { name: "Save Cards", url: "#" },
  ],
  profileLoginSign: [
    { name: "LOGIN /", url: "/login" },
    { name: "SIGNUP", url: "/singup" },
  ],
  sliderDesignDate: [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/female-fashion-designers-working-atelier-checking-garment-dress-form_23-2148846719.jpg?uid=R183893488&ga=GA1.1.35620851.1737443900&semt=ais_hybrid",
      name: "Styles Cloth",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1040384/pexels-photo-1040384.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "New Designs",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/women-trying-clothes-store_23-2148915563.jpg?uid=R183893488&ga=GA1.1.35620851.1737443900&semt=ais_hybrid",
      name: "Fashion",
    },
    // {
    //   id: 4,
    //   image:
    //     "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   name: "Women Cloth",
    // },
  ],
  carouselData: [
    {
      name: "Jacket",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      type: "Clothing",
    },
    {
      name: "Sneakers",
      image:
        "https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17549.jpg?semt=ais_hybrid",
      type: "Footwear",
    },
    {
      name: "T-Shirt",
      image:
        "https://img.freepik.com/premium-photo/stylist-designer-helping-choose-clothes-dress-customer-client_183314-13528.jpg?semt=ais_hybrid",
      type: "Clothing",
    },
    {
      name: "Boots",
      image:
        "https://img.freepik.com/premium-photo/side-view-couple-standing-home_1048944-19673739.jpg?semt=ais_hybrid",
      type: "Footwear",
    },
    {
      name: "Jeans",
      image:
        "https://img.freepik.com/free-photo/seductive-girl-wearing-distressed-jeans-denim-jacket-looking-camera-while-sitting-chair-fitting-room-clothing-store_613910-20033.jpg?semt=ais_hybrid",
      type: "Clothing",
    },
    {
      name: "Sandals",
      image:
        "https://img.freepik.com/premium-photo/woman-dress-clothes-store-with-tailor-high-quality-photo_470178-20972.jpg?semt=ais_hybrid",
      type: "Footwear",
    },
    {
      name: "Hoodie",
      image:
        "https://img.freepik.com/premium-photo/full-length-portrait-young-man-sitting-doorway_1048944-22568403.jpg?semt=ais_hybrid",
      type: "Clothing",
    },
    {
      name: "Oxfords",
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/18/38/woman-1854284_640.jpg",
      type: "Footwear",
    },
    {
      name: "Loafers",
      image:
        "https://img.freepik.com/premium-photo/full-length-portrait-young-man-sitting-doorway_1048944-22568403.jpg?semt=ais_hybrid",
      type: "Footwear",
    },
    {
      name: "Sweater",
      image:
        "https://img.freepik.com/free-photo/guy-smiling-gently-black-leather-jacket-indicates-with-fore-finger-copy-space-advertisment-promotional-text-handsome-stylish-male-with-dark-hair-blue-eyes-points-into-distance_176420-13375.jpg?semt=ais_hybrid",
      type: "Clothing",
    },
    {
      name: "Running Shoes",
      image:
        "https://img.freepik.com/free-photo/woman-model-demonstrating-winter-cloths_1303-16967.jpg?semt=ais_hybrid",
      type: "Footwear",
    },
    {
      name: "Blazer",
      image:
        "https://img.freepik.com/premium-photo/young-caucasian-woman-blue-wall-laughs-happily-has-fun-keeping-hands-stomach_1187-78064.jpg?semt=ais_hybrid",
      type: "Clothing",
    },
    {
      name: "Flip-Flops",
      image:
        "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg",
      type: "Footwear",
    },
    {
      name: "Skirt",
      image:
        "https://cdn.pixabay.com/photo/2017/12/06/20/23/accessory-3002608_640.jpg",
      type: "Clothing",
    },
    {
      name: "Heels",
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/20/17/catwalk-1840941_640.jpg",
      type: "Footwear",
    },
    {
      name: "Scarf",
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/16/01/woman-1846127_640.jpg",
      type: "Clothing",
    },
    {
      name: "Slippers",
      image:
        "https://cdn.pixabay.com/photo/2015/01/15/13/06/woman-600238_640.jpg",
      type: "Footwear",
    },
    {
      name: "Tracksuit",
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/17/25/woman-1853939_640.jpg",
      type: "Clothing",
    },
    {
      name: "Clogs",
      image:
        "https://cdn.pixabay.com/photo/2019/01/25/11/18/girl-3954232_640.jpg",
      type: "Footwear",
    },
    {
      name: "Vest",
      image:
        "https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_640.jpg",
      type: "Clothing",
    },
    {
      name: "Oxfords",
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/18/38/woman-1854284_640.jpg",
      type: "Footwear",
    },
  ],
  ProductsData: [
    {
      heading: "SELECT PRODUCTS FOR MYSTYLEO",
      url: "#",
      prouData: [
        {
          url: "#",
          name: "Casual Shirt",
          discount: "40% OFF",
          image:
            "https://img.freepik.com/premium-photo/arafed-man-black-shirt-jeans-with-black-bag_988987-23991.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Jacket",
          discount: "50% OFF",
          image:
            "https://img.freepik.com/premium-photo/hipster-fashion-man-stylish-clothes-with-sunglasses_338491-8012.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Leather Jacket",
          discount: "45% OFF",
          image:
            "https://img.freepik.com/premium-photo/stylish-handsome-young-man-black-sunglasses-fashionable-clothes-with-hairstyle-sitting-striped-black-yellow-concrete-slab-outdoors-near-white-metal-gates-american-modern-guy_338491-6635.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Formal Coat",
          discount: "50% OFF",
          image:
            "https://img.freepik.com/free-photo/man-with-camera-yellow-scene_23-2148184796.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Backpack",
          discount: "40% OFF",
          image:
            "https://img.freepik.com/free-psd/male-model-wearing-blank-black-t-shirt-isolated-white-background-with-clipping-path_1142-60652.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Inner",
          discount: "50% OFF",
          image:
            "https://img.freepik.com/free-photo/outdoor-fashion-portrait-glamour-sensual-young-stylish-woman-wearing-trendy-fall-outfit-black-hat-grey-sweater-leather-bag-bright-red-lips-old-city-background_273443-690.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Inner",
          discount: "40% OFF",
          image:
            "https://img.freepik.com/free-photo/city-life-young-beautiful-girl-warm-clothes-have-walk-city-her-weekends-time_146671-16847.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Denim Coat",
          discount: "50% OFF",
          image:
            "https://img.freepik.com/free-photo/outdoor-hight-fashion-portrait-stylish-casual-woman-black-hat-pink-suit-white-blouse-posing-old-street_273443-1186.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Woolen Sweater",
          discount: "45% OFF",
          image:
            "https://img.freepik.com/premium-photo/beautiful-girl-posing-street-urban-style-street-fashion_226451-593.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Denim pant",
          discount: "40% OFF",
          image:
            "https://img.freepik.com/free-photo/man-jeans-with-cardboard-bouquet-flowers_114579-2389.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Sneakers",
          discount: "50% OFF",
          image:
            "https://img.freepik.com/free-photo/crop-loving-couple-kissing-seafront_23-2147738350.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Shoes",
          discount: "40% OFF",
          image:
            "https://img.freepik.com/premium-photo/stylish-leather-boots-collection-posters_984027-211144.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Shoes",
          discount: "50% OFF",
          image:
            "https://img.freepik.com/premium-photo/vintage-set-fashion-accessories-autumn-season-hat-shoes-sunglasses-belt-be-stylish-lady_161568-2641.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Shoes",
          discount: "40% OFF",
          image:
            "https://img.freepik.com/premium-psd/transparent-background-isolates-female-leather-shoe_410516-110916.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Leather Wallet",
          discount: "50% OFF",
          image:
            "https://img.freepik.com/free-photo/modern-businesswoman-with-bag_23-2148012916.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Handbag",
          discount: "40% OFF",
          image:
            "https://img.freepik.com/premium-photo/dressed-red-woman-holding-luxury-handbag_267395-1105.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "HandBag",
          discount: "50% OFF",
          image:
            "https://img.freepik.com/premium-photo/fashion-clutch-bag-stylish-gold-jewelry-trends-lady-accessories_161568-8553.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Travel Duffel Bag",
          discount: "45% OFF",
          image:
            "https://img.freepik.com/premium-photo/girl-holding-red-bag-hands_266151-174.jpg?ga=GA1.1.1318752428.1737651426&semt=ais_hybrid",
        },
        {
          url: "#",
          name: "Female Style",
          discount: "40% OFF",
          image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        },
        {
          url: "#",
          name: "Women Bag",
          discount: "50% OFF",
          image:
            "https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R5bGV8ZW58MHx8MHx8fDA%3D",
        },
        {
          url: "#",
          name: "Winter Gloves",
          discount: "50% OFF",
          image:
            "https://images.unsplash.com/photo-1506667527953-22eca67dd919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0eWxlfGVufDB8fDB8fHww",
        },
        {
          url: "#",
          name: "Leather Belt",
          discount: "45% OFF",
          image:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN0eWxlfGVufDB8fDB8fHww",
        },
        {
          url: "#",
          name: "Cargo Pants",
          discount: "50% OFF",
          image:
            "https://images.unsplash.com/photo-1571867424485-369464ed33cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHN0eWxlfGVufDB8fDB8fHww",
        },
        {
          url: "#",
          name: "Overcoat",
          discount: "40% OFF",
          image:
            "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzdHlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
  ],
  footer: {
    product: [
      { id: 1, name: "Mystyleo Safe 3", url: "#" },
      { id: 2, name: "Model One", url: "#" },
      { id: 3, name: "Model T", url: "#" },
      { id: 4, name: "Mystyleo Keep", url: "#" },
      { id: 5, name: "Mystyleo Expert", url: "#" },
      { id: 6, name: "Compare wallets", url: "#" },
      { id: 7, name: "Mystyleo Suite", url: "#" },
      {
        id: 8,
        name: "All products & accessories",
        url: "#",
      },
    ],
    learn: [
      { id: 1, name: "Supported Coins", url: "#" },
      { id: 2, name: "Blog", url: "#" },
      { id: 3, name: "Privacy and Security", url: "#" },
      { id: 4, name: "About Company", url: "#" },
      { id: 5, name: "Support", url: "#" },
      { id: 6, name: "Knowledge Base", url: "#" },
      { id: 7, name: "Forum", url: "#" },
    ],
    other: [
      { id: 1, name: "FAQs", url: "#" },
      { id: 2, name: "Terms of Use", url: "#" },
      { id: 3, name: "Affiliate Program", url: "#" },
      { id: 4, name: "Reseller Program", url: "#" },
      { id: 5, name: "Resellers", url: "#" },
      { id: 6, name: "GitHub", url: "#" },
      { id: 7, name: "Press & Media", url: "#" },
      { id: 8, name: "Careers", url: "#" },
    ],
  },
  productSelectImage: [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvzcXGl8H5O0SUr-MYu4DicMjKa3QBo1yA5oX_0hf8MYArU3I__NTWHnEVAh_bNI8fFc&usqp=CAU",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2cUYuOyowA8TlZMjP2x-fL0-J1jFpBJBXQ&s",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7hveppQ2ZjPqEHlWD6PDWKk3xtF_XVos3Bq73FwrE_2V_UgtOTpN-RQt0h5525Rqmuc&usqp=CAU",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97F4PX8yB3wFosb4_gTD3FB6VdjZeGKCymfOclLtJxmxJ_zvWW0vZUk5fe7owzFw8Mjs&usqp=CAU",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyG94MnfQ8IhgF2dG_kUknlExVKwtqtXNYuFY7QVlLn1hBdJl_RVuR-a4lM5h5izjcVs&usqp=CAU",
    },
  ],
  threeImageData: [
    {
      id: 1,
      name: "Show product",
      url: "#",
      img: "https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/banner4-h17.jpg",
    },
    {
      id: 2,
      name: "Show product",
      url: "#",
      img: "https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/banner5-h17.jpg",
    },
    {
      id: 3,
      name: "Show product",
      url: "#",
      img: "https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/banner6-h17.jpg",
    },
  ],
};
