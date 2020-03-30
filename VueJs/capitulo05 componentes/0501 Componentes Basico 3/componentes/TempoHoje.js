const URL_TO_FETCH = "https://www.metaweather.com/api/location/455825/"

const InfoTemperatura = {
    name: 'TempoHoje',
    data() {
        return {
            infoTemperatura: 0
        }
    },
    template: `
        <div>
        <p v-if="infoTemperatura === undefined">Carregando </p>        
        <p :v-if="infoTemperatura !== undefined"> Temperatura Rio de Janeiro Atual: {{infoTemperatura}} ºC </p>
            
        </div>
    `
    ,

    methods: {
        puxarInfo() {
            fetch(URL_TO_FETCH)
                .then(response => response.json().then(result => this.infoTemperatura = result.consolidated_weather[0].the_temp.toFixed(2))).catch(res => console.log(res))

        }

    },
    created() {
        this.puxarInfo();
    }

}

export default InfoTemperatura;



