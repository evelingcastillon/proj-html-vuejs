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
        ]
    },
    methods: {
        prev() {
            if(this.counter === 0){
                return this.counter = this.tastes.length - 1;
            }
            return this.counter -= 1;
        }
    },

})