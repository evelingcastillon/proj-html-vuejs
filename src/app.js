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
        mision: ' "FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"'
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