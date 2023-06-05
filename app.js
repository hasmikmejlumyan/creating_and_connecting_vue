const app = Vue.createApp({
    data() {
       return {
           counter: 10,
           name: '',
           confirmedName: '',
           // fullname: '',
           lastName: '',
       }
    },

    watch: {
        // name(value) {
        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = value + ' ' + 'Hasmik';
        //     }
        // }
    },

    computed: {
        fullname() {
            if (this.name === ''){
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },

    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitFrom(event) {
            alert('Submited!');
        },
        outputFullname() {
            if (this.name === ''){
                return '';
            }
            return this.name + ' ' + 'Mejlumyan';
        },
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = '';
        },
    }
});

app.mount('#events');