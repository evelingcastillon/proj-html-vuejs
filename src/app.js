let app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        tastes: [
            '2',
            '4',
            '6'
        ],
        nameTastes: [
            '1',
            '3',
            '5'
        ],
        mision: ' "FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"',
        pizzas: [
            {
                imgPizza: 'h3-product-img-1a-100x100.png',
                namePizza: 'BISKMARCK',
                pricePizza: '$25,00 - $30,00'
            },
            {
                imgPizza: 'h3-product-img-2a-150x150.png',
                namePizza: 'FIORI DI ZUCCA',
                pricePizza: '$47,00 - $50,00'
            },
            {
                imgPizza: 'h3-product-img-3a-150x150.png',
                namePizza: 'VALDOSTANA',
                pricePizza: '$50,00'
            },
            {
                imgPizza: 'h3-product-img-4a-150x150.png',
                namePizza: 'PIZZA TARTUFATA',
                pricePizza: '$45,00'
            },
            {
                imgPizza: 'h3-product-img-5a-150x150.png',
                namePizza: 'FRANCESCANA',
                pricePizza: '$25,00'
            },
            {
                imgPizza: 'h3-product-img-6a-100x100.png',
                namePizza: 'CAMPAGNOLA',
                pricePizza: '$50,00 - $95,00'
            }
        ]
    },
    methods: {
        prev() {
            if(this.counter === 0){
                return this.counter = 2 ;
            }
            return this.counter -= 1;
        },
        next() {
            if(this.counter === 2) {
                return this.counter = 0;
            }
            return this.counter += 1;
        }
    },

})