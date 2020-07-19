<template>
    <div>
        <b-card title="家庭湿度">
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
            variant: 'danger',
            advice:'分析建议：湿度过低，建议开启加湿器。'
        }),
        async mounted () {
            this.loaded = false
            try {
                //const { userlist } = await fetch('/api/userlist')
                this.chartdata = {
                    labels: ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15', '7.16'],
                    datasets: [{
                        label: '平均湿度',
                        data: [12,15,67,34,22,19,28],
                        backgroundColor: [
                            'rgba(105,175,134,0.2)'
                        ],
                        borderColor: [
                            'rgba(105,175,134,1)'
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