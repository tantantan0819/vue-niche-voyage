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
                <img class="picture-img" src="@/assets/images/folkways/folkways-image-1.png"></img>
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
                <img class="picture-img" src="@/assets/images/folkways/folkways-image-2.png" alt="">
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
                <img class="picture-img" src="@/assets/images/folkways/folkways-image-3.png" alt="">
                <div class="illustration-title-font">
                    <DotPopover class="dot-popover" title="内容来自" content="《晶珠本草药录》 四川民族出版社 2017 "></DotPopover>
                    <span>菊科植物短葶飞蓬，是彝医药代表性品种灯盏细辛（改都诺起）的基材，有活血通络止痛，祛风散寒的功效。</span>
                </div>
            </div>
            <div class="background-img-1"></div>
            <div class="background-img-2"></div>
        </div>
        <!-- 第五幕 -->
        <div class="screen fifth-screen">
            <div class="picture-container">
                <img src="@/assets/images/folkways/folkways-image-4.png" alt="" class="picture-img">
                <div class="illustration-title-font">
                    <span>高山龙胆（日达姆郎帕）是羌医药代表性品种，具有泻火镇咳、利咽、止痒等功效。</span>
                    <DotPopover class="dot-popover" title="内容来自" content="《晶珠本草药录》 四川民族出版社 2017 "></DotPopover>
                </div>
            </div>
            <div class="text-container">
                <div class="text-header-img"></div>
                <div class="text-font">
                    <span>羌医药因为受到历史变迁和战争影响，明清以后文献大多散佚，典籍多由家族嫡传而鲜有公开，因此主要通过民间口授、家传和方药交换的方式延续。</span>
                    <DotPopover class="dot-popover" title="内容来自" content="《四川藏羌彝民族医药图鉴》 四川民族出版社 2020"></DotPopover>
                </div>
            </div>
        </div>
        <!-- 第六幕 -->
        <div class="screen sixth-screen">
            <div class="left-fire-img"></div>
            <div class="text-container">
                <div class="text-header-img"></div>
                <div class="text-font">而在青藏高原东缘，每年盛夏，人们点燃火把，载歌载舞，庆祝丰收与吉祥。这种以点燃火把为主要庆祝方式的节日就是火把节。火把节不仅是彝族、白族、纳西族等民族最重要的传统节日，也承载了祭祀祖先、祈求风调雨顺的文化意涵。熊熊火光映照高原的夜空，舞蹈和歌声在山谷间回响，人们将土地、火焰同生命的节奏紧密相连</div>
            </div>
            <div class="picture-container">
                <img src="@/assets/images/folkways/folkways-image-5.jpg" alt="" class="picture-img">
            </div>
            <div class="right-fire-container">
                <div class="right-fire-img-1"></div>
                <div class="right-fire-img-2"></div>
            </div>
        </div>
        <!-- 第七幕 -->
        <div class="screen seventh-screen">
           <div class="left-pattern-img"></div>
           <div class="text-container">
                <div class="text-header-img"></div>
                <div class="text-font">每年火把节期间，无论男女老少都会盛装出席——古朴的纹饰、浓烈的色彩、精美的刺绣……每一处细节都承载着人们对自然的礼敬、对生活的热望和对美的追求，在火光与歌舞交织的夜晚共同织绘出高原民族热烈奔放的节日华彩。</div>
            </div>
            <div class="right-pattern-container">
                <div class="right-pattern-img-1"></div>
                <div class="right-pattern-img-2"></div>
            </div>
        </div>
        <!-- 第八幕 -->
        <div class="screen eighth-screen">
            <div class="left-pattern-container">
                <div class="left-pattern-img-1"></div>
                <div class="left-pattern-img-2"></div>
            </div>
            <div class="picture-container">
                <div>
                    <img src="@/assets/images/folkways/folkways-image-6.png" alt="" class="picture-img-1">
                    <img src="@/assets/images/folkways/folkways-image-6.png" alt="" class="picture-img-2">
                </div>
                <div class="illustration-title-font">
                    <DotPopover class="dot-popover" title="内容来自" content="《中国彝族传统服饰图典籍》四川民族出版社 2019"></DotPopover>
                    <span>此为彝族青年女性盛装。整套服饰由罩衣、长衫、百褶裙、三角包、针包组成，全套为土布（棉）质地。</span>
                </div>
            </div>
            <div class="right-pattern-container">
                <div class="right-pattern-img-1"></div>
                <div class="right-pattern-img-2"></div>
            </div>
        </div>
        <!-- 第九幕 -->
        <!-- <div class="screen ninth-screen"></div> -->
        <!-- 第十幕 -->
        <!-- <div class="screen tenth-screen"></div> -->
        <!-- 第十一幕 -->
        <!-- <div class="screen eleventh-screen"></div> -->
    </div>
</template>
<script setup>
import DotPopover from '@/components/dotPopover.vue';
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
        background: url('@/assets/images/folkways/folkways-bg.png') no-repeat center center / cover;
    }
    .first-screen{
        .background-people-img{
            position: absolute;
            top: -360px;
            left: 0;
            width: 1910px;
            height: 1218px;
            background: url('@/assets/images/folkways/folkways-element-1-1.png') no-repeat center center / cover;
        }
        .left-pattern-img{
            position: absolute;
            top: 160px;
            width: 501px;
            height: 1114px;
            background: url('@/assets/images/folkways/folkways-element-1-4.png') no-repeat center center / cover;
        }
        .left-cloud-img-1{
            position: absolute;
            left: 160px;
            bottom: -100px;
            width: 775px;
            height: 570px;
            background: url('@/assets/images/folkways/folkways-element-1-6.png') no-repeat center center / cover;
        }
        .left-cloud-img-2{
            position: absolute;
            left: 700px;
            bottom: -150px;
            width: 703px;
            height: 448px;
            background: url('@/assets/images/folkways/folkways-element-1-7.png') no-repeat center center / cover;
        }
        .center-title-container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .title-img{
                width: 1383px;
                height: 331px;
                background: url('@/assets/images/folkways/folkways-character-1.png') no-repeat center center / cover;
            }
            .subtitle-img{
                position: relative;
                top: -60px;
                left: 50%;
                transform: translateX(-50%);
                width: 469px;
                height: 152px;
                background: url('@/assets/images/folkways/folkways-character-2.png') no-repeat center center / cover;
            }
        }
        .right-pattern-img{
            position: absolute;
            top: -120px;
            right: 0;
            width: 718px;
            height: 1089px;
            background: url('@/assets/images/folkways/folkways-element-1-3.png') no-repeat center center / cover;
        }
        .right-ribbon-img{
            position: absolute;
            top: -40px;
            right: 0;
            width: 363px;
            height: 542px;
            background: url('@/assets/images/folkways/folkways-element-1-2.png') no-repeat center center / cover;
        }
        .right-human-img{
            position: absolute;
            right: -40px;
            bottom: -140px;
            width: 748px;
            height: 718px;
            background: url('@/assets/images/folkways/folkways-element-1-5.png') no-repeat center center / cover;
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
                background: url('@/assets/images/folkways/folkways-element-2-1.png') no-repeat center center / cover;
            }
        }
        .picture-container{
            position: absolute;
            top: 380px;
            right: 160px;
            .picture-img{
                width: 700px;
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
            background: url('@/assets/images/folkways/folkways-element-1-8.png') no-repeat center center / cover;
        }
    }
    .third-screen{
        .background-pattern-img-1{
            position: absolute;
            top: -200px;
            left: 0;
            width: 339px;
            height: 597px;
            background: url('@/assets/images/folkways/folkways-element-3-1.png') no-repeat center center / cover;
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
                background: url('@/assets/images/folkways/folkways-element-3-2.png') no-repeat center center / cover;
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
                background: url('@/assets/images/folkways/folkways-element-2-2.png') no-repeat center center / cover;
            }
        }
        .background-pattern-img-2{
            position: absolute;
            top: 0p;
            right: 10px;
            width: 552px;
            height: 908px;
            background: url('@/assets/images/folkways/folkways-element-3-2.png') no-repeat center center / cover;
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
                background: url('@/assets/images/folkways/folkways-element-2-3.png') no-repeat center center / cover;
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
            background: url('@/assets/images/folkways/folkways-element-3-3.png') no-repeat center center / cover;
        }
        .background-img-2{
            position: absolute;
            top: 520px;
            right: 0;
            width: 149px;
            height: 291px;
            background: url('@/assets/images/folkways/folkways-element-3-4.png') no-repeat center center / cover;
        }
    }
    .fifth-screen{
        .picture-container{
            position: absolute;
            top: 100px;
            left: 160px;
            width: 640px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .picture-img{
                width: 350px;
            }
            .dot-popover{
                top: 50px;
                left: 40px;
            }
        }
        .text-container{
            position: absolute;
            top: 100px;
            right: 180px;
            width: 800px;
            .text-header-img{
                width: 800px;
                height: 102px;
                margin-bottom: 40px;
                background: url('@/assets/images/folkways/folkways-element-2-4.png') no-repeat center center / cover;
            }
            .dot-popover{
                top: 40px;
                left: 30px;
            }
            >>> .popover-container{
                right: 80px;
            }
        }
    }
    .sixth-screen{
        .left-fire-img{
            position: absolute;
            top: 0;
            width: 259px;
            height: 625px;
            background: url('@/assets/images/folkways/folkways-element-3-5.png') no-repeat center center / cover;
            z-index: 2;
        }
        .text-container{
            position: absolute;
            top: 200px;
            left: 140px;
            width: 821px;
           
            .text-header-img{
                width: 821px;
                height: 102px;
                margin-bottom: 40px;
                background: url('@/assets/images/folkways/folkways-element-2-5.png') no-repeat center center / cover;
            }
        }
        .picture-img{
            position: absolute;
            right: 200px;
            top: 200px;
            width: 700px;
        }
        .right-fire-img-1{
            position: absolute;
            right:0;
            bottom: 200px;
            width: 184px;
            height: 419px;
            background: url('@/assets/images/folkways/folkways-element-3-6.png') no-repeat center center / cover;
        }
        .right-fire-img-2{
            position: absolute;
            right:0;
            bottom: 100px;
            width: 102px;
            height: 228px;
            background: url('@/assets/images/folkways/folkways-element-3-7.png') no-repeat center center / cover;
        }
    }
    .seventh-screen{
        .left-pattern-img{
            position: absolute;
            top: 150px;
            left: 180px;
            width: 331px;
            height: 882px;
            background: url('@/assets/images/folkways/folkways-element-3-10.png') no-repeat center center / cover;
        }
        .text-container{
            position: absolute;
            top: 400px;
            left: 140px;
            width: 821px;
            .text-header-img{
                width: 821px;
                height: 102px;
                margin-bottom: 40px;
                background: url('@/assets/images/folkways/folkways-element-2-6.png') no-repeat center center / cover;
            }
        }
        .right-pattern-img-1{
            position: absolute;
            right: 0;
            top: 80px;
            width: 603px;
            height: 1010px;
            background: url('@/assets/images/folkways/folkways-element-3-8.png') no-repeat center center / cover;
        }
        .right-pattern-img-2{
            position: absolute;
            right: 0;
            top: 150px;
            width: 552px;
            height: 931px;
            background: url('@/assets/images/folkways/folkways-element-3-9.png') no-repeat center center / cover;
        }
    }
    .eighth-screen{
        .left-pattern-img-1{
            position: absolute;
            top: 20px;
            left: 0;
            width: 453px;
            height: 930px;
            background: url('@/assets/images/folkways/folkways-element-3-11.png') no-repeat center center / cover;
        }
        .left-pattern-img-2{
            position: absolute;
            top: 20px;
            left: 0;
            width: 563px;
            height: 1068px;
            background: url('@/assets/images/folkways/folkways-element-3-12.png') no-repeat center center / cover;
        }
        .picture-container{
            position: absolute;
            top: 150px;
            right: 150px;
            width: 850px;
            .picture-img-1{
                width: 400px;
            }
            .picture-img-2{
                width: 400px;
                margin-left: 50px;
            }
            .illustration-title-font{
                margin-top: 20px;
            }
            .dot-popover{
                
            }
        }
        .right-pattern-img-1{
            position: absolute;
            right: 0;
            bottom: -160px;
            width: 149px;
            height: 758px;
            background: url('@/assets/images/folkways/folkways-element-3-13.png') no-repeat center center / cover;
        }
    }
    .third-screen{
        
    }
     .third-screen{
        
    }
     .third-screen{
        
    }
</style>