<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.min.js" integrity="sha512-L0Shl7nXXzIlBSUUPpxrokqq4ojqgZFQczTYlGjzONGTDAcLremjwaWv5A+EDLnxhQzY5xUZPWLOLqYRkY0Cbw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>-->
<script setup>
    import { ref } from 'vue'
    const message2 = ref('都道府県ごとの人口グラフ')
    // component logic
    // declare some reactive state here.
    import axios from 'axios';
    import Chart from 'chart.js/auto';
</script>

<script>
    //ここがチェックボックスのスクリプト
    export default {
        data() {
            return {
                checkedpref: [],
                checkedpref2: [],
                datacollection: {
                    labels: ["1960", "1970", "1980", "1990", "2000", "2010", "2020"],
                    datasets: [
                        {
                            label: "人口グラフ",
                            backgroundColor: "#f87979",
                            data: [0, 0, 0, 0, 0, 0, 0]
                        }
                    ]

                },
                loaded: false,
                //lastcheck: -1,//最後にチェックされた数字。チェックボックスの選択数制限で１個に制限しようとした際に使用(現在不使用。)
                graph: null,
                prefectures: null,
                jinkoudata: null,
            }
        },

        //apidata() {
        //    return {
        //        prefectures: null,
        //        jinkoudata: null,
                
        //    }
        //},
        mounted() {
            var prefectures_url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
            axios
                .get(prefectures_url, { headers: { 'X-API-KEY': process.env.VUE_APP_APIKEY } })
                .then(response => {
                    this.prefectures = response.data.result;//完成まで残しておくこと。
                    this.loaded = true;
                    //-----------------------------
                    console.log("APIを用いて都道府県一覧を取得しました。");
                });

            //やろうとしてること
            //グラフ→1本は表示できた。しかしエラーが残っている。(https://maps.multisoup.co.jp/blog/5180/や https://stackblitz.com/github/apertureless/vue-chartjs/tree/main/sandboxes/line?file=src%2FApp.vue,src%2FchartConfig.ts,index.ts を参考とする予定)
        },


        methods: {
            //以下、人口を取得してグラフ表示
            changed(item, itemname) {
                this.lastcheck = item;
                console.log(this.checkedpref.includes(item));
                //console.log(this.lastcheck);
                //console.log("checkedpref.length…" + this.checkedpref.length);
                
                var jinkou_url = 'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=' + item;
                if (this.checkedpref.includes(item) == true) {
                    //if (this.checkedpref.length > 1) this.checkedpref.splice(0, 1, this.lastcheck)
                    //if (this.checkedpref.length > 1) this.checkedpref.splice(1, 1);
                    this.loaded = false;
                    if (this.graph) this.graph.destroy();
                    axios
                        .get(jinkou_url, { headers: { 'X-API-KEY': process.env.VUE_APP_APIKEY } })
                        .then(response => {
                            this.jinkoudata = response.data.result;
                            //-----------------------------
                            console.log("人口の取得の実行がされました。");
                            this.datacollection.labels = [this.jinkoudata.data[0].data[0].year, this.jinkoudata.data[0].data[2].year, this.jinkoudata.data[0].data[4].year, this.jinkoudata.data[0].data[6].year, this.jinkoudata.data[0].data[8].year, this.jinkoudata.data[0].data[10].year, this.jinkoudata.data[0].data[12].year]
                            this.datacollection.datasets.data = [this.jinkoudata.data[0].data[0].value, this.jinkoudata.data[0].data[2].value, this.jinkoudata.data[0].data[4].value, this.jinkoudata.data[0].data[6].value, this.jinkoudata.data[0].data[8].value, this.jinkoudata.data[0].data[10].value, this.jinkoudata.data[0].data[12].value]
                            //-----------------
                            this.loaded = true;
                            this.graph = new Chart("glaphspace", {
                                type: "line",
                                data: {
                                    labels: this.datacollection.labels,
                                    datasets: [
                                        {
                                            label: itemname,
                                            data: this.datacollection.datasets.data,
                                            backgroundColor: this.datacollection.datasets.backgroundColor,
                                        },
                                        
                                    ],

                                },
                                options: {
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: "bottom",
                                        },
                                    },
                                    maintainAspectRatio: false,//これを追加、

                                }
                            });
                            //-----------------
                        });
                }
                
            },

        }
    }
    
</script>




<template>
    <h1>{{ message2 }}</h1>
    <!-- ここからチェックボックスのエリア(Check_Box) -->
    <div class="prefbox">
        <div v-for="n in this.prefectures" :key="n.prefName" class="prefcheck" >
            <input type="checkbox" v-model="checkedpref" :id="n.prefCode" :value="n.prefCode" @change="changed(n.prefCode,n.prefName)"/>
            {{ n.prefName }}
        </div>
    </div>
    <div class="glaph">
        <canvas id="glaphspace" :v-if="loaded" >{{ this.graph }}</canvas>
    </div>
</template>

<style>
    h1 {
        border-bottom: 1px solid #000;
        text-align: center;
    }
    .prefcheck {
        float: left; /* 回り込み指定 */
        background-color: skyblue;
    }
    .prefbox {
        width: 90%;
        margin: 0 auto;
    }
    .glaph {
        clear: left;
        width: 90%;
        margin: 0 auto;
    }
    canvas {
        position: relative; 
        height: 200px;
    }
</style>