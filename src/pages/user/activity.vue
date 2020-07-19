<template>
    <div>
        <b-card title="活动情况">
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
                height: `300px`,
                position: 'relative'
            },
            variant: 'warning',
            advice:'分析建议：增加活动时间。'
        }),
        async mounted () {
            this.loaded = false
            try {
                //const { userlist } = await fetch('/api/userlist')
                this.chartdata = {
                    labels: ['7.10', '7.11', '7.12', '7.13', '7.14', '7.15', '7.16'],
                    datasets: [{
                        label: '活动时间占比',
                        data: [22,25,28,17,30,33,35],
                        backgroundColor: [
                            'rgba(106,96,169,0.2)'
                        ],
                        borderColor: [
                            'rgba(106,96,169,1)'
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