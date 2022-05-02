//Shop_________________________________________________//

const bd = [{
        id: 0,
        name: 'Chaleco misiones gris',
        price: 1851,
        imga: '../img/products/1a.jpg',
        imgb: '../img/products/1a.jpg',
        imgc: '../img/products/1a.jpg'
    },
    {
        id: 1,
        name: 'Kimono sastrero beige',
        price: 3160,
        imga: '../img/products/2a.jpeg',
        imgb: '../img/products/2a.jpeg',
        imgc: '../img/products/2a.jpeg'
    },
    {
        id: 2,
        name: 'Maxi sweater griselda gris',
        price: 3160,
        imga: '../img/products/3a.jpeg',
        imgb: '../img/products/3a.jpeg',
        imgc: '../img/products/3a.jpeg'
    },
    {
        id: 3,
        name: 'Ruana sabrina rosa',
        price: 3534,
        imga: '../img/products/4a.jpg',
        imgb: '../img/products/4a.jpg',
        imgc: '../img/products/4a.jpg'
    },
    {
        id: 4,
        name: 'Poncho Vera Beige',
        price: 4095,
        imga: '../img/products/5a.jpeg',
        imgb: '../img/products/5a.jpeg',
        imgc: '../img/products/5a.jpeg'
    },
    {
        id: 5,
        name: 'Remeron federica blanco',
        price: 2599,
        imga: '../img/products/6a.jpg',
        imgb: '../img/products/6a.jpg',
        imgc: '../img/products/6a.jpg'
    },
    {
        id: 6,
        name: 'Remeron lea negro',
        price: 1480,
        imga: '../img/products/7a.jpeg',
        imgb: '../img/products/7a.jpeg',
        imgc: '../img/products/7a.jpeg'
    },
    {
        id: 7,
        name: 'Remeron marriot gris',
        price: 2225,
        imga: '../img/products/8a.jpeg',
        imgb: '../img/products/8a.jpeg',
        imgc: '../img/products/8a.jpeg'
    }, {
        id: 8,
        name: 'Sweater eco negro',
        price: 2786,
        imga: '../img/products/9a.jpeg',
        imgb: '../img/products/9a.jpeg',
        imgc: '../img/products/9a.jpeg'
    }, {
        id: 9,
        name: 'Sweater rocio rosa',
        price: 2973,
        imga: '../img/products/10a.jpeg',
        imgb: '../img/products/10a.jpeg',
        imgc: '../img/products/10a.jpeg'
    }, {
        id: 10,
        name: 'Sweater santa fe rosa',
        price: 2973,
        imga: '../img/products/11a.jpg',
        imgb: '../img/products/11a.jpg',
        imgc: '../img/products/11a.jpg'
    }, {
        id: 11,
        name: 'Vestido belinda blanco',
        price: 2973,
        imga: '../img/products/12a.jpeg',
        imgb: '../img/products/12a.jpeg',
        imgc: '../img/products/12a.jpeg'
    }, {
        id: 12,
        name: 'Vestido chiara blanco',
        price: 2973,
        imga: '../img/products/13a.jpeg',
        imgb: '../img/products/13a.jpeg',
        imgc: '../img/products/13a.jpeg'
    }, {
        id: 13,
        name: 'Vestido leonor Gris',
        price: 2363,
        imga: '../img/products/14a.jpeg',
        imgb: '../img/products/14a.jpeg',
        imgc: '../img/products/14a.jpeg'
    }, {
        id: 14,
        name: 'Vestido maluco negro',
        price: 2599,
        imga: '../img/products/15a.jpeg',
        imgb: '../img/products/15a.jpeg',
        imgc: '../img/products/15a.jpeg'
    },
    {
        id: 15,
        name: 'Vestido night rojo',
        price: 2973,
        imga: '../img/products/16a.jpeg',
        imgb: '../img/products/16a.jpeg',
        imgc: '../img/products/16a.jpeg'
    },
    {
        id: 16,
        name: 'Vestido maluco blanco',
        price: 2973,
        imga: '../img/products/17a.jpeg',
        imgb: '../img/products/17a.jpeg',
        imgc: '../img/products/17a.jpeg'
    },
    {
        id: 17,
        name: 'Maxi sweater reyna camel',
        price: 2599,
        imga: '../img/products/18a.jpeg',
        imgb: '../img/products/18a.jpeg',
        imgc: '../img/products/18a.jpeg'
    },
    {
        id: 18,
        name: 'Sweater oro camel',
        price: 2599,
        imga: '../img/products/19a.jpeg',
        imgb: '../img/products/19a.jpeg',
        imgc: '../img/products/19a.jpeg'
    },

];

bd.forEach(function(info) {
    document.write('<figure id="shop_section-info-1a"><figcaption itemprop="name" class="shop-p0" id="shop-p0-' + info.id + '" value="' + info.name + '" >' + info.name + '</figcaption><div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img class="d-block-w-10" src=" ' + info.imga + ' " alt="First slide"></div><div class="carousel-item"><img class="d-block-w-10" src=" ' + info.imgb + ' " alt="Second slide"></div><div class="carousel-item"><img class="d-block-w-10" src=" ' + info.imgc + ' " alt="Third slide"></div></div></div><p class="shop-p1" id="shop-p1-' + info.id + '" value="' + info.price + '">$' + info.price + '</p><button class="shop-button" id="shop-button-' + info.id + '">+</button><button class="shop-button"><a>Comprar</a></button></figure>');
});


//_________________________________________________//