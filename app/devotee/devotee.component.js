angular
    .module('devotee')
        .component('devotee',{
            template: '<h1>This is a test {{devotee.name}}</h1>',
            controller: [
                '$routeParams',
                function DevoteeController($routeParam) {
                    this.devotee = {
                        name: 'manibhai'
                    }
                }
            ]

})