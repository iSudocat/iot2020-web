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
                height: `300px`,
                position: 'relative'
            },
            variant: 'warning',
            advice:'分析建议：加强运动。'
        }),
        async mounted () {
            this.loaded = false
            try {
                //const { userlist } = await fetch('/api/userlist')
                this.chartdata = {
                    labels: ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15', '7.16'],
                    datasets: [{
                        label: '步数',
                        data: [2124,2534,2894,1626,3540,3805,4215],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'
                        ]
                    }]
                }
                this.chartoption = {
                    maintainAspectRatio:false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
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