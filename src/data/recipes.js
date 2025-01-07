// Resim importları
// const karniyarikImage = require('../../assets/images/karniyarik.jpg');
// const mercimekImage = require('../../assets/images/mercimek.jpg');
// const iclikofteImage = require('../../assets/images/iclikofte.jpg');

export const recipes = {
  '1': {
    id: '1',
    title: 'Karnıyarık',
    difficulty: 'Orta',
    duration: '45',
    servings: '4-6 kişilik',
    ingredients: 7,
    category: 'Ana Yemek',
    image: 'https://images.unsplash.com/photo-1662981654550-da87c50e8314?w=800&auto=format&fit=crop',
    ingredientsList: [
      '4 adet patlıcan',
      '300 gr kıyma',
      '2 adet soğan',
      '2 adet domates',
      '2 adet yeşil biber',
      'Tuz, karabiber',
      'Sıvı yağ'
    ],
    instructions: [
      'Patlıcanları alacalı soyup tuzlu suda bekletin.',
      'Kıymayı soğan, domates ve biberle kavurun.',
      'Patlıcanları kızartıp ortalarını yarın.',
      'İç harcı patlıcanların içine doldurun.',
      '180 derece fırında 20-25 dakika pişirin.'
    ]
  },
  '2': {
    id: '2',
    title: 'Mercimek Çorbası',
    difficulty: 'Kolay',
    duration: '30',
    servings: '6-8 kişilik',
    ingredients: 6,
    category: 'Çorba',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop',
    ingredientsList: [
      '1 su bardağı kırmızı mercimek',
      '1 adet soğan',
      '1 adet havuç',
      '2 yemek kaşığı un',
      'Tuz, karabiber',
      'Sıvı yağ'
    ],
    instructions: [
      'Mercimekleri yıkayıp süzün.',
      'Soğan ve havucu doğrayıp kavurun.',
      'Mercimek ve suyu ekleyip pişirin.',
      'Blenderdan geçirip pürüzsüz hale getirin.',
      'Tuz ve baharatları ekleyin.'
    ]
  },
  '3': {
    id: '3',
    title: 'İçli Köfte',
    difficulty: 'Zor',
    duration: '90',
    servings: '8-10 kişilik',
    ingredients: 5,
    category: 'Ana Yemek',
    image: 'https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?w=800&auto=format&fit=crop',
    ingredientsList: [
      '500 gr köftelik bulgur',
      '250 gr kıyma',
      '2 adet soğan',
      'Maydanoz',
      'Tuz, karabiber, pul biber'
    ],
    instructions: [
      'Bulguru ıslatıp yoğurun.',
      'İç harcı için kıymayı soğanla kavurun.',
      'Köfte hamurunu inceltip iç harcı koyun.',
      'Köfteleri kapatıp şekil verin.',
      'Kaynar suda haşlayıp servis yapın.'
    ]
  },
  '4': {
    id: '4',
    title: 'Sütlaç',
    difficulty: 'Orta',
    duration: '40',
    servings: '6-8 kişilik',
    ingredients: 6,
    category: 'Tatlı',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop',
    ingredientsList: [
      '1 litre süt',
      '1 su bardağı pirinç',
      '1 su bardağı şeker',
      '2 yemek kaşığı pirinç unu',
      '1 paket vanilya',
      '2 su bardağı su'
    ],
    instructions: [
      'Pirinci yıkayıp suda haşlayın.',
      'Süt ve şekeri ekleyip karıştırın.',
      'Pirinç ununu ekleyip koyulaşana kadar pişirin.',
      'Vanilyayı ekleyip karıştırın.',
      'Güveçlere paylaştırıp fırınlayın.'
    ]
  },
  '5': {
    id: '5',
    title: 'Kısır',
    difficulty: 'Kolay',
    duration: '20',
    servings: '4-6 kişilik',
    ingredients: 8,
    category: 'Salata',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&auto=format&fit=crop',
    ingredientsList: [
      '2 su bardağı ince bulgur',
      '2 adet domates',
      '3 adet yeşil soğan',
      '1 demet maydanoz',
      'Pul biber, karabiber',
      'Zeytinyağı',
      'Nar ekşisi',
      'Limon suyu'
    ],
    instructions: [
      'Bulguru sıcak suyla ıslatın.',
      'Sebzeleri ince ince doğrayın.',
      'Baharatları ve sosları ekleyin.',
      'Tüm malzemeleri karıştırın.',
      'Servis öncesi dinlendirin.'
    ]
  },
  '6': {
    id: '6',
    title: 'Mantı',
    difficulty: 'Zor',
    duration: '120',
    servings: '6-8 kişilik',
    ingredients: 8,
    category: 'Ana Yemek',
    image: 'https://images.unsplash.com/photo-1639667851375-85ca0f48b298?w=800&auto=format&fit=crop',
    ingredientsList: [
      '3 su bardağı un',
      '1 adet yumurta',
      '300 gr kıyma',
      '2 adet soğan',
      'Yoğurt',
      'Salça',
      'Tereyağı',
      'Tuz, karabiber'
    ],
    instructions: [
      'Hamur için malzemeleri yoğurun.',
      'İnce açıp küçük kareler kesin.',
      'İç harcı hazırlayıp hamurları doldurun.',
      'Kaynayan suda haşlayın.',
      'Üzerine sosları ekleyip servis yapın.'
    ]
  },
  '7': {
    id: '7',
    title: 'Kabak Mücver',
    difficulty: 'Kolay',
    duration: '30',
    servings: '4-6 kişilik',
    ingredients: 7,
    category: 'Ana Yemek',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop',
    ingredientsList: [
      '3 adet kabak',
      '2 adet yumurta',
      '3 yemek kaşığı un',
      '1 demet dereotu',
      'Peynir (isteğe bağlı)',
      'Tuz, karabiber',
      'Sıvı yağ'
    ],
    instructions: [
      'Kabakları rendeleyin ve suyunu sıkın.',
      'Tüm malzemeleri karıştırın.',
      'Kızgın yağda kaşık yardımıyla kızartın.',
      'Fazla yağını kağıt havluyla alın.',
      'Sıcak servis yapın.'
    ]
  },
  '8': {
    id: '8',
    title: 'Baklava',
    difficulty: 'Zor',
    duration: '150',
    servings: '10-12 kişilik',
    ingredients: 6,
    category: 'Tatlı',
    image: 'https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?w=800&auto=format&fit=crop',
    ingredientsList: [
      '1 paket yufka',
      '500 gr ceviz içi',
      '250 gr tereyağı',
      '2 su bardağı şeker',
      '2 su bardağı su',
      '1 tatlı kaşığı limon suyu'
    ],
    instructions: [
      'Yufkaları teker teker yağlayın.',
      'Cevizli katları hazırlayın.',
      'Baklava dilimi şeklinde kesin.',
      'Kalan yağı üzerine dökün ve pişirin.',
      'Ilık şerbeti soğuk baklavanın üzerine dökün.'
    ]
  },
  '9': {
    id: '9',
    title: 'Yayla Çorbası',
    difficulty: 'Kolay',
    duration: '35',
    servings: '6-8 kişilik',
    ingredients: 6,
    category: 'Çorba',
    image: 'https://images.unsplash.com/photo-1616501268209-edfcb4b6ff84?w=800&auto=format&fit=crop',
    ingredientsList: [
      '1 su bardağı pirinç',
      '1 su bardağı yoğurt',
      '1 yumurta sarısı',
      '2 yemek kaşığı un',
      'Nane',
      'Tuz'
    ],
    instructions: [
      'Pirinci haşlayın.',
      'Yoğurt, yumurta ve unu çırpın.',
      'Çorbaya ekleyip karıştırın.',
      'Üzerine naneli sos hazırlayın.',
      'Sıcak servis yapın.'
    ]
  },
  '10': {
    id: '10',
    title: 'Domates Çorbası',
    difficulty: 'Kolay',
    duration: '25',
    servings: '4-6 kişilik',
    ingredients: 7,
    category: 'Çorba',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop',
    ingredientsList: [
      '5 adet domates',
      '1 adet soğan',
      '2 diş sarımsak',
      '2 yemek kaşığı un',
      'Tereyağı',
      'Tuz, karabiber',
      'Krema'
    ],
    instructions: [
      'Sebzeleri kavurun.',
      'Un ekleyip kavurmaya devam edin.',
      'Su ekleyip kaynatın.',
      'Blenderdan geçirin.',
      'Krema ekleyip servis yapın.'
    ]
  },
  '11': {
    id: '11',
    title: 'Roka Salatası',
    difficulty: 'Kolay',
    duration: '15',
    servings: '4 kişilik',
    ingredients: 7,
    category: 'Salata',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    ingredientsList: [
      '2 demet roka',
      'Cherry domates',
      'Parmesan peyniri',
      'Ceviz içi',
      'Zeytinyağı',
      'Limon suyu',
      'Tuz'
    ],
    instructions: [
      'Rokaları yıkayıp süzün.',
      'Domatesleri ikiye bölün.',
      'Cevizleri kırın.',
      'Peyniri rendeleyin.',
      'Sosu hazırlayıp karıştırın.'
    ]
  },
  '12': {
    id: '12',
    title: 'Rus Salatası',
    difficulty: 'Orta',
    duration: '45',
    servings: '6-8 kişilik',
    ingredients: 8,
    category: 'Salata',
    image: 'https://images.unsplash.com/photo-1640719028782-8230f1bdc0b1?w=800&auto=format&fit=crop',
    ingredientsList: [
      'Haşlanmış patates',
      'Haşlanmış havuç',
      'Konserve bezelye',
      'Turşu',
      'Mayonez',
      'Krema',
      'Tuz, karabiber',
      'Dereotu'
    ],
    instructions: [
      'Sebzeleri küp küp doğrayın.',
      'Mayonez ve kremayı karıştırın.',
      'Tüm malzemeleri birleştirin.',
      'Baharatları ekleyin.',
      'Buzdolabında dinlendirin.'
    ]
  },
  '13': {
    id: '13',
    title: 'Künefe',
    difficulty: 'Zor',
    duration: '60',
    servings: '6-8 kişilik',
    ingredients: 6,
    category: 'Tatlı',
    image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=800&auto=format&fit=crop',
    ingredientsList: [
      'Kadayıf',
      'Tuzsuz peynir',
      'Tereyağı',
      'Şeker',
      'Su',
      'Antep fıstığı'
    ],
    instructions: [
      'Kadayıfı inceltip yağlayın.',
      'Peyniri yerleştirin.',
      'Altını üstünü kızartın.',
      'Sıcak şerbeti dökün.',
      'Fıstık serperek servis yapın.'
    ]
  },
  '14': {
    id: '14',
    title: 'Kazandibi',
    difficulty: 'Orta',
    duration: '50',
    servings: '8-10 kişilik',
    ingredients: 7,
    category: 'Tatlı',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&auto=format&fit=crop',
    ingredientsList: [
      '1 litre süt',
      '2 su bardağı şeker',
      '2 yemek kaşığı pirinç unu',
      '3 yemek kaşığı un',
      '1 paket vanilya',
      'Tereyağı',
      '2 yumurta'
    ],
    instructions: [
      'Muhallebiyi pişirin.',
      'Tepsiye tereyağı sürün.',
      'Muhallebiyi dökün.',
      'Altını yakın.',
      'Soğutup dilimleyin.'
    ]
  },
  '15': {
    id: '15',
    title: 'İskender',
    difficulty: 'Zor',
    duration: '90',
    servings: '4-6 kişilik',
    ingredients: 8,
    category: 'Ana Yemek',
    image: 'https://images.unsplash.com/photo-1644364935906-792b2245a2c0?w=800&auto=format&fit=crop',
    ingredientsList: [
      'Döner eti',
      'Pide ekmek',
      'Domates sosu',
      'Tereyağı',
      'Yoğurt',
      'Közlenmiş biber',
      'Domates',
      'Maydanoz'
    ],
    instructions: [
      'Pideleri küçük parçalara bölün.',
      'Üzerine döner eti koyun.',
      'Domates sosunu hazırlayın.',
      'Kızdırılmış tereyağı gezdirin.',
      'Yoğurt ile servis yapın.'
    ]
  },
  '16': {
    id: '16',
    title: 'Patlıcan Musakka',
    difficulty: 'Orta',
    duration: '60',
    servings: '6-8 kişilik',
    ingredients: 9,
    category: 'Ana Yemek',
    image: 'https://images.unsplash.com/photo-1662981654550-da87c50e8314?w=800&auto=format&fit=crop',
    ingredientsList: [
      '4 adet patlıcan',
      '400 gr kıyma',
      '2 adet soğan',
      '4 adet domates',
      'Biber',
      'Sarımsak',
      'Beşamel sos',
      'Kaşar peyniri',
      'Tuz, karabiber'
    ],
    instructions: [
      'Patlıcanları kızartın.',
      'Kıymalı harcı hazırlayın.',
      'Beşamel sosu yapın.',
      'Malzemeleri tepsiye dizin.',
      'Fırında pişirin.'
    ]
  }
};
