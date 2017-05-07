namespace filter.Cars {

    class CarsController {
        model : any[]; //<--- field "any[];" could be "string[];" if you just have an array of strings.
        search: string[];  //Versus an object containing strings and numbers.  

        constructor() {
          this.model = [{name:'Telsa', price:140000},
                       {name:'Porsche', price: 210000},
                       {name: 'Audi', price: 85000},
                       {name:'Aston Martin', price: 150000}]

        }
    }
angular.module("filter").controller('CarsController', CarsController);

    /*export class AboutController {
        public message = 'Hello from the about page!';
    }*/

}
