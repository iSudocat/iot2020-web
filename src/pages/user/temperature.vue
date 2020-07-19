<template>
    <div>
        <b-card title="体温">
            <b-alert show :variant='variant'>{{ advice }}</b-alert>
            <div>
                <line-chart
                        v-if="loaded"
                        :chartdata="chartdata"
                        :options="chartoption"
                        :styles="myStyles"
                />
            </div>
        </b-card>
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
            variant: 'success',
            advice:'分析建议：体温正常。'
        }),
        async mounted () {
            this.loaded = false
            try {
                //const { userlist } = await fetch('/api/userlist')
                this.chartdata = {
                    labels: ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15', '7.16'],
                    datasets: [{
                        label: '平均体温',
                        data: [36.5,36.2,37.1,36.4,36.3,36.6,36.5],
                        backgroundColor: [
                            'rgba(240,120,24,0.2)'
                        ],
                        borderColor: [
                            'rgba(240,120,24,1)'
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