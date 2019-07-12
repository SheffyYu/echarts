/**
 * Created by yushihui on 2019/7/10.
 * Description : 包括各类型饼图
 */

/**
 * Description 基础饼图
 * @param id
 * @param data [{name:"",value:""},{name:"",value:""}]
 */
function basePie(id,data){
    var mchart=echarts.init(document.getElementById(id));
    var option = {
        color: ['#F0CF68','#8DD259','#70AFEC','#9F8BF0','#E37668','#E79D6C'],       //饼图主体颜色
        tooltip: {      //提示
            trigger: 'item',
            formatter: "{b}:<br/> {c} ({d}%)"
        },
        legend: {       //图例
            orient: 'horizontal',       //图例列表朝向 horizontal/vertical
            bottom:10,      //离底部距离，
            left: 'center',     //居中
            textStyle:{
                color:'rgba(255, 255, 255, 0.5)'
            },
            data:data.name
        },
        series : [
            {
                name: 'data',
                type: 'pie',
                radius: '60%',
                data:data
            }
        ]
    };
    mchart.setOption(option);
}

/**
 * Description 南丁格尔玫瑰图
 * @param id
 * @param data [{name:"",value:""},{name:"",value:""}]
 * @param color 南丁格尔图主体颜色
 */
function Nightingale(id,data,color) {
    var mchart=echarts.init(document.getElementById(id));
    var option = {
        tooltip: {      //提示
            trigger: 'item',
            formatter: "{b}: <br/>{c} ({d}%)"
        },
        // legend: {       //图例
        //     orient: 'horizontal',       //图例列表朝向 horizontal/vertical
        //     bottom:10,      //离底部距离
        //     left: 'center',     //居中
        //     textStyle:{
        //         color:'rgba(255, 255, 255, 0.5)'
        //     },
        //     data:data.name
        // },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]   //明暗度变化范围
            }
        },
        series : [
            {
                name: 'data',
                type: 'pie',
                radius: '60%',
                data:data,
                roseType: 'angle',
                //---去掉这部分，可设置文字和引导线的颜色与饼图对应扇形区的颜色相同---//
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)' //文字颜色
                            // fontStyle:'normal'||'italic'||'oblique'
                            // fontSize:12     //文字大小
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'  //引导线颜色
                        }
                    }
                },
                //------------------------------------------------------------//
                itemStyle: {
                    normal: {
                        color: color,  //饼图主体颜色
                        shadowBlur: 20,  //阴影范围
                        shadowColor: 'rgba(0, 0, 0, 0.5)'  //阴影颜色
                    }
                }
            }
        ]
    };
    mchart.setOption(option);
}

/**
 * Description 多色南丁格尔玫瑰图
 * @param id
 * @param data [{name:"",value:""},{name:"",value:""}]
 */
function mulNightingale(id,data) {
    var mchart=echarts.init(document.getElementById(id));
    var option = {
        // backgroundColor: '#2c343c',
        color: ['#F2637B','#DC81D2','#975FE5','#9F8BF0','#3AA1FF','#88D1EA','#36CBCB','#82DFBE','#4ECB73','#ACDF82','#FBD437','#EAA674'],       //饼图主体颜色
        tooltip: {      //提示
            trigger: 'item',
            formatter: "{b}: <br/>{c} ({d}%)"
        },
        legend: {       //图例
            orient: 'vertical',     //图例列表朝向 horizontal/vertical
            left:0,     //离左边距离
            data:data.name,
            textStyle:{
                color:'rgba(255, 255, 255, 0.5)'
            }
        },
        series : [
            {
                name: 'data',
                type: 'pie',
                radius: '75%',
                data:data,
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            // color: 'rgba(255, 255, 255, 0.3)' //文字颜色
                            // fontStyle:'normal'||'italic'||'oblique'
                            fontSize:12     //文字大小
                        }
                    }
                },
                labelLine: {        //引导线
                    normal: {
                        show: true,
                        smooth: 0.2,        //平滑度
                        length: 1,      //第一项长度
                        length2: 2      //第二项长度
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 20,  //阴影范围
                        shadowColor: 'rgba(0, 0, 0, 0.5)'  //阴影颜色
                    }
                }
            }
        ]
    };
    mchart.setOption(option);
}