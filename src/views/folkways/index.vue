<template>
    <div class="folkways-container">
        <!-- 第一幕 -->
        <div class="screen first-screen">
            <div class="left-pattern-container">
                <div class="left-pattern-img"></div>
                <div class="left-cloud-img-1"></div>
                <div class="left-cloud-img-2"></div>
            </div>
            <div class="background-people-img"></div>
            <div class="center-title-container">
                <div class="title-img"></div>
                <div class="subtitle-img"></div>
            </div>
            <div class="right-pattern-container">
                <div class="right-pattern-img"></div>
                <div class="right-ribbon-img"></div>
                <div class="right-human-img"></div>
            </div>
        </div>
        <!-- 第二幕 -->
        <div class="screen second-screen">
            <div class="text-container">
                <div class="text-header-img"></div>
                <div class="text-content text-font">在辽阔的青藏高原之上，各民族习俗是比山谷更深邃、比河流更绵长的文化记忆。火把节、雪顿节、望果节等节日编织出高原民族的欢庆画卷；酥油茶、青稞酒散发出独特的雪域风味；传统医药则承载着高原人民对生命与自然的深刻理解。</div>
            </div>
            <div class="picture-container">
                <img class="picture-img" src="../../assets/images/folkways/folkways-image-1.png"></img>
                <div class="illustration-title-font">
                    <DotPopover class="dot-popover" title="内容来自" content="《中国藏餐》 四川民族出版社 2023"></DotPopover>
                    <span>牛排糌粑丸</span>
                </div>
            </div>
            <div class="background-img"></div>
        </div>
        <!-- 第三幕 -->
        <div class="screen third-screen">
            <div class="background-pattern-img-1"></div>
            <div class="picture-container">
                <img class="picture-img" src="../../assets/images/folkways/folkways-image-2.png" alt="">
                <div class="illustration-title-font">
                    <span>冬虫夏草：藏药珍贵药材，有补肺益肾，止血止痛，止咳化痰等功效。</span>
                    <DotPopover class="dot-popover" title="内容来自" content="《晶珠本草药录》 四川民族出版社 2017 "></DotPopover>
                </div>
            </div>
            <div class="text-container">
                <div class="text-header-img"></div>
                <div class="text-content text-font">
                    <p>作为中国重要的藏羌彝聚居区，四川具有得天独厚的民族文化资源，医药资源即是其中的瑰宝，它既造就了各民族医药既竞相生发又兼容并蓄的历史图景，也反映出各民族长期交往交流交融的历史事实。</p>
                    <p>藏医药源远流长，是藏族人民长期在与自然环境抗争中不断积累和总结的成果。其在发展过程中广泛吸收了中医、古印度医药和大食医药的精华，经过历代藏医的补充与完善，最终形成了体系完整、理论成熟的民族医学，是我国传统医学的重要组成部分。</p>
                </div>
            </div>
            <div class="background-pattern-img-2"></div>
        </div>
        <!-- 第四幕 -->
        <div class="screen forth-screen">
            <div class="text-container">
                <div class="text-title-img"></div>
                <div class="text-font">彝医药则在继承中华古代医药思想的基础上，与彝族文化、信仰、习俗及其特定的自然环境相结合，并在长期实践中发展出独具特色的理论体系。</div>
            </div>
            <div class="picture-container">
                <img class="picture-img" src="../../assets/images/folkways/folkways-image-3.png" alt="">
                <div class="illustration-title-font">
                    <DotPopover class="dot-popover" title="内容来自" content="《晶珠本草药录》 四川民族出版社 2017 "></DotPopover>
                    <span>菊科植物短葶飞蓬，是彝医药代表性品种灯盏细辛（改都诺起）的基材，有活血通络止痛，祛风散寒的功效。</span>
                </div>
            </div>
            <div class="background-img-1"></div>
            <div class="background-img-2"></div>
        </div>
        <!-- 第五幕 -->
        <div class="screen fifth-screen"></div>
        <!-- 第六幕 -->
        <!-- <div class="screen sixth-screen"></div> -->
        <!-- 第七幕 -->
        <!-- <div class="screen seventh-screen"></div> -->
        <!-- 第八幕 -->
        <!-- <div class="screen eighth-screen"></div> -->
    </div>
</template>
<script setup>
import DotPopover from '../../components/dotPopover.vue';
</script>

<style scoped>
    .text-font{
        font: 33px/54px "Alibaba-PuHuiTi-Regular";
        color: #534833;
    }
    .illustration-title-font{
        font-size: 33px;
        font-weight: 300;
        font-family: 'Alibaba-PuHuiTi-Light';
        line-height: 54px;
        color: #534833;
    }
    .screen {
        position: relative;
        width: 100vw;
        height: 100vh;
    }
    .folkways-container {
        width: 100vw;
        /* height: 1000vh; */
        overflow-x: hidden;
        background: url('../../assets/images/folkways/folkways-bg.png') no-repeat center center / cover;
    }
    .first-screen{
        .background-people-img{
            position: absolute;
            top: -360px;
            left: 0;
            width: 1910px;
            height: 1218px;
            background: url('../../assets/images/folkways/folkways-element-1-1.png') no-repeat center center / cover;
        }
        .left-pattern-img{
            position: absolute;
            top: 160px;
            width: 501px;
            height: 1114px;
            background: url('../../assets/images/folkways/folkways-element-1-4.png') no-repeat center center / cover;
        }
        .left-cloud-img-1{
            position: absolute;
            left: 160px;
            bottom: -100px;
            width: 775px;
            height: 570px;
            background: url('../../assets/images/folkways/folkways-element-1-6.png') no-repeat center center / cover;
        }
        .left-cloud-img-2{
            position: absolute;
            left: 700px;
            bottom: -150px;
            width: 703px;
            height: 448px;
            background: url('../../assets/images/folkways/folkways-element-1-7.png') no-repeat center center / cover;
        }
        .center-title-container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .title-img{
                width: 1383px;
                height: 331px;
                background: url('../../assets/images/folkways/folkways-character-1.png') no-repeat center center / cover;
            }
            .subtitle-img{
                position: relative;
                top: -60px;
                left: 50%;
                transform: translateX(-50%);
                width: 469px;
                height: 152px;
                background: url('../../assets/images/folkways/folkways-character-2.png') no-repeat center center / cover;
            }
        }
        .right-pattern-img{
            position: absolute;
            top: -120px;
            right: 0;
            width: 718px;
            height: 1089px;
            background: url('../../assets/images/folkways/folkways-element-1-3.png') no-repeat center center / cover;
        }
        .right-ribbon-img{
            position: absolute;
            top: -40px;
            right: 0;
            width: 363px;
            height: 542px;
            background: url('../../assets/images/folkways/folkways-element-1-2.png') no-repeat center center / cover;
        }
        .right-human-img{
            position: absolute;
            right: -40px;
            bottom: -140px;
            width: 748px;
            height: 718px;
            background: url('../../assets/images/folkways/folkways-element-1-5.png') no-repeat center center / cover;
        }
    }
    .second-screen{
        .text-container{
            position: absolute;
            top: 220px;
            left: 160px;
            width: 801px;
            .text-header-img{
                width: 801px;
                height: 102px;
                margin-bottom: 40px;
                background: url('../../assets/images/folkways/folkways-element-2-1.png') no-repeat center center / cover;
            }
        }
        .picture-container{
            position: absolute;
            top: 380px;
            right: 160px;
            .picture-img{
                width: 700px;
                background: url('../../assets/images/folkways/folkways-element-2-2.png') no-repeat center center / cover;
            }
            .dot-popover{
                top: 50px;
            }
            >>> .popover-container{
                top: -100px;
                right: 100px;
            }
        }
        .background-img{
            position: absolute;
            top: 0;
            right: 0;
            width: 519px;
            height: 922px;
            background: url('../../assets/images/folkways/folkways-element-1-8.png') no-repeat center center / cover;
        }
    }
    .third-screen{
        .background-pattern-img-1{
            position: absolute;
            top: -200px;
            left: 0;
            width: 339px;
            height: 597px;
            background: url('../../assets/images/folkways/folkways-element-3-1.png') no-repeat center center / cover;
        }
        .picture-container{
            position: absolute;
            top: 100px;
            left: 300px;
            width: 450px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .picture-img{
                height: 500px;
                background: url('../../assets/images/folkways/folkways-element-3-2.png') no-repeat center center / cover;
            }
            .dot-popover{
                top: 50px;
                left: 30px;
            }
            >>> .popover-container{
                top: -60px;
                left: 50px;
            }
        }
        .text-container{
            position: absolute;
            top: 100px;
            right: 200px;
            width: 821px;
            .text-header-img{
                width: 821px;
                height: 102px;
                margin-bottom: 40px;
                background: url('../../assets/images/folkways/folkways-element-2-2.png') no-repeat center center / cover;
            }
        }
        .background-pattern-img-2{
            position: absolute;
            top: 0p;
            right: 10px;
            width: 552px;
            height: 908px;
            background: url('../../assets/images/folkways/folkways-element-3-2.png') no-repeat center center / cover;
        }
    }
    .forth-screen{
        .text-container{
            position: absolute;
            top: 100px;
            left: 100px;
            width: 819px;
            .text-title-img{
                width: 819px;
                height: 102px;
                margin-bottom: 40px;
                background: url('../../assets/images/folkways/folkways-element-2-3.png') no-repeat center center / cover;
            }
        }
        .picture-container{
            position: absolute;
            top: 100px;
            right: 300px;
            width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .picture-img{
                width: 360px;
            }
            .dot-popover{
                top: 200px;
                right: 40px;
            }
            >>> .popover-container{
                top: -40px;
                right: 100px;
            }
        }
        .background-img-1{
            position: absolute;
            top: 0;
            right: 0;
            width: 273px;
            height: 495px;
            background: url('../../assets/images/folkways/folkways-element-3-3.png') no-repeat center center / cover;
        }
        .background-img-2{
            position: absolute;
            top: 520px;
            right: 0;
            width: 149px;
            height: 291px;
            background: url('../../assets/images/folkways/folkways-element-3-4.png') no-repeat center center / cover;
        }
    }
     .third-screen{
        
    }
     .third-screen{
        
    }
     .third-screen{
        
    }
     .third-screen{
        
    }
    .third-screen{
        
    }
</style>