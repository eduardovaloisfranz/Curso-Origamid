function VueClone(options) {
    this.options = options;
    this.el = document.querySelector(options.el)
    this.data = options.data;
}

const vmClone = new VueClone({
    el: "#app",
    data: {
        nome: 'teste'
    }
});

console.log(vmClone)




const vm = new Vue({
    el: "#app",
    data: {
        instrumento: 'Violão'
    }
});
console.log(vm);

