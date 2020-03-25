const app = new Vue({
    el: "#app",
    data: {
        camisa: {
            preco: 49,
            total: 0
        }


        //,
        //numero: this.numero()




    },
    methods: {
        obterDados: function () {
            return {
                preco: 49,
                total: 0
            };
        },
        addCamisa: function () {
            this.camisa.total++;
            //this.camisa.preco += this.obterDados().preco;

        },
        removerCamisa: function () {
            this.camisa.total--;
            //this.camisa.preco -= this.obterDados().preco;
        }

        //,
        //numero: function () {
        //     console.log("Ta eai?")
        // return 3
        // }
    }
})