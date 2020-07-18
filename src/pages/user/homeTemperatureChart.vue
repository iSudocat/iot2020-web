<template>
    <div class="container">
        <b-alert show :variant='variant'>{{ advice }}</b-alert>
        <div>
            <line-chart
                    v-if="loaded"
                    :chartdata="chartdata"
                    :options="chartoption"
                    :styles="myStyles"
            />
        </div>

    </div>
</template>

<script>
    import LineChart from './LineChart.js'

    export default {
        name: 'LineChartContainer',
        components: { LineChart },
        data: () => ({
            loaded: false,
            chartdata: {},
            chartoption: {},
            myStyles: {
                height: `200px`,
                position: 'relative'
            },
            variant: 'warning',
            advice:'分析建议：室温偏高，建议开启空调。'
        }),
        async mounted () {
            this.loaded = false
            try {
                //const { userlist } = await fetch('/api/userlist')
                this.chartdata = {
                    labels: ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15', '7.16'],
                    datasets: [{
                        label: '平均室温',
                        data: [37.5,36.2,28.3,35.8,38.4,37.7,37.5],
                        backgroundColor: [
                            'rgba(32,147,139,0.2)'
                        ],
                        borderColor: [
                            'rgba(32,147,139,1)'
                        ]
                    }]
                }
                this.chartoption = {
                    maintainAspectRatio:false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:false
                            }
                        }]
                    }
                }
                this.loaded = true
            } catch (e) {
                console.error(e)
            }
        }
    }
</script>

<style>

</style>