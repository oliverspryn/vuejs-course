new Vue({
    el: '#app',
    data: {
        counter : 0,
        secondCounter: 0
    },
    computed: {
        output: function() {
            // Intelligently run only when "counter" is updated
            console.log('Computed')
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    },
    methods: {
        result: function() {
            // Run on every digest cycle, since Vue has no idea if property
            // changes from above affect this method

            // Best to use this approach when data needs to be re-evaulated
            // on every digest cycle
            console.log('Method')
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    }
});