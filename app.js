new Vue({
    el: "#app",
    data: {
        name: "Mikhail",
        job: "Front-End developer"
    },
    methods: {
        greet: function() {
            return "Hello my name " + this.name +'!';
        }
    }

})