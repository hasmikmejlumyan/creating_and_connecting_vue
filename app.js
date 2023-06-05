const app = Vue.createApp({
    data() {
       return {
           counter: 0,
           name: '',
           confirmedName: '',
       }
    },

    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitFrom(event) {
            alert('Submited!');
        },
        setName(event, name) {
            this.name = event.target.value + ' ' + name;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        }
    }
});

app.mount('#events');