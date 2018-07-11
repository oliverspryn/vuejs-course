new Vue({
    el: '#app',
    data: {
        counter : 0,
        secondCounter: 0
    },
    computed: {
        output: function() {
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    },
    watch: {
        counter: function(value) {
            // Value of upcoming change
            // Generally, computed properties are more optimized
            // Good for cases when you need to react to async tasks, computed
            // properties do not perform well in those cases; they must run
            // synchronously

            var vm = this;

            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function() {
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    }
});