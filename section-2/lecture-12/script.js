new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://www.google.com/'
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});