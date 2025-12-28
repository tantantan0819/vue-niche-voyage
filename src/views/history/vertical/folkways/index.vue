<template>
    <div class="folkways-container">
        <div class="screen"></div>
        <!-- 第一幕 -->
        <div 
            class="screen first-screen"
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="100"
            data-parallax-to="-100"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true">
            <div class="left-pattern-container">
                <div class="left-pattern-img"></div>
                <div
                    class="first-screen-cloud-container"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true"
                >
                <div class="left-cloud-img-1"></div>
                <div class="left-cloud-img-2"></div>
            </div>
            </div>
            <div class="background-people-img"></div>
            <div class="center-title-container">
                <div 
                    class="title-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="subtitle-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="300"
                    data-parallax-to="-300"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
            </div>
            <div class="right-pattern-container">
                <div class="right-pattern-img"></div>
                <div 
                    class="right-ribbon-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="right-human-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true"></div>
            </div>
        </div>
        <!-- 第二幕 -->
        <div class="screen second-screen">
            <div class="text-container">
                <div 
                    class="text-header-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="text-content text-font second-screen-text-content"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">在辽阔的青藏高原之上，各民族习俗是比山谷更深邃、比河流更绵长的文化记忆。火把节、雪顿节、望果节等节日编织出高原民族的欢庆画卷；酥油茶、青稞酒散发出独特的雪域风味；传统医药则承载着高原人民对生命与自然的深刻理解。</div>
            </div>
            <div 
                class="picture-container"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true">
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
            <div 
                class="background-pattern-img-1"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="150"
                data-parallax-to="-150"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true"></div>
            <div 
                class="picture-container" data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="250"
                data-parallax-to="-250"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true">
                <img class="picture-img" src="@/assets/images/folkways/folkways-image-2.png" alt="">
                <div class="illustration-title-font">
                    <span>冬虫夏草：藏药珍贵药材，有补肺益肾，止血止痛，止咳化痰等功效。</span>
                    <DotPopover class="dot-popover" title="内容来自" content="《晶珠本草药录》 四川民族出版社 2017 "></DotPopover>
                </div>
            </div>
            <div class="text-container">
                <div 
                    class="text-header-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="text-content text-font third-screen-text-content"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">
                    <p>作为中国重要的藏羌彝聚居区，四川具有得天独厚的民族文化资源，医药资源即是其中的瑰宝，它既造就了各民族医药既竞相生发又兼容并蓄的历史图景，也反映出各民族长期交往交流交融的历史事实。</p>
                    <p>藏医药源远流长，是藏族人民长期在与自然环境抗争中不断积累和总结的成果。其在发展过程中广泛吸收了中医、古印度医药和大食医药的精华，经过历代藏医的补充与完善，最终形成了体系完整、理论成熟的民族医学，是我国传统医学的重要组成部分。</p>
                </div>
            </div>
            <div class="background-pattern-img-2"></div>
        </div>
        <!-- 第四幕 -->
        <div class="screen forth-screen">
            <div class="text-container">
                <div 
                    class="text-title-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="text-font forth-screen-text-content"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">彝医药则在继承中华古代医药思想的基础上，与彝族文化、信仰、习俗及其特定的自然环境相结合，并在长期实践中发展出独具特色的理论体系。</div>
            </div>
            <div class="picture-container">
                <div
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true">
                    <img class="picture-img" src="@/assets/images/folkways/folkways-image-3.png" alt="">
                </div>
                <div 
                    class="illustration-title-font"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">
                    <DotPopover class="dot-popover" title="内容来自" content="《晶珠本草药录》 四川民族出版社 2017 "></DotPopover>
                    <span>菊科植物短葶飞蓬，是彝医药代表性品种灯盏细辛（改都诺起）的基材，有活血通络止痛，祛风散寒的功效。</span>
                </div>
            </div>
            <div
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="100"
                data-parallax-to="-100"
                data-parallax-speed="1.1"
                data-parallax-center-lock="true">
                <div class="background-img-1"></div>
                <div class="background-img-2"></div>
            </div>
        </div>
        <!-- 第五幕 -->
        <div class="screen fifth-screen">
            <div class="picture-container">
                <div
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true">
                    <img src="@/assets/images/folkways/folkways-image-4.png" alt="" class="picture-img">
                </div>
                <div 
                    class="illustration-title-font"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">
                    <span>高山龙胆（日达姆郎帕）是羌医药代表性品种，具有泻火镇咳、利咽、止痒等功效。</span>
                    <DotPopover class="dot-popover" title="内容来自" content="《晶珠本草药录》 四川民族出版社 2017 "></DotPopover>
                </div>
            </div>
            <div class="text-container">
                <div 
                    class="text-header-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="text-font fifth-screen-text-content"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">
                    <span>羌医药因为受到历史变迁和战争影响，明清以后文献大多散佚，典籍多由家族嫡传而鲜有公开，因此主要通过民间口授、家传和方药交换的方式延续。</span>
                    <DotPopover class="dot-popover" title="内容来自" content="《四川藏羌彝民族医药图鉴》 四川民族出版社 2020"></DotPopover>
                </div>
            </div>
        </div>
        <!-- 第六幕 -->
        <div class="screen sixth-screen">
            <div 
                class="left-fire-img"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true"></div>
            <div class="text-container">
                <div 
                    class="text-header-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="text-font sixth-screen-text-content"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">而在青藏高原东缘，每年盛夏，人们点燃火把，载歌载舞，庆祝丰收与吉祥。这种以点燃火把为主要庆祝方式的节日就是火把节。火把节不仅是彝族、白族、纳西族等民族最重要的传统节日，也承载了祭祀祖先、祈求风调雨顺的文化意涵。熊熊火光映照高原的夜空，舞蹈和歌声在山谷间回响，人们将土地、火焰同生命的节奏紧密相连</div>
            </div>
            <div 
                class="picture-container"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="200"
                data-parallax-to="-200"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true">
                <div
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true">
                    <img src="@/assets/images/folkways/folkways-image-5.jpg" alt="" class="picture-img">
                </div>
                <div class="illustration-title-font">
                    <span>彝族火把节场景</span>
                    <DotPopover class="dot-popover" title="内容来自" content="《中国凉山彝族火把节》 四川民族出版社 2020"></DotPopover>
                </div>

            </div>
            <div 
                class="right-fire-container"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="100"
                data-parallax-to="-100"
                data-parallax-speed="1.1"
                data-parallax-center-lock="true">
                <div class="right-fire-img-1"></div>
                <div class="right-fire-img-2"></div>
            </div>
        </div>
        <!-- 第七幕 -->
        <div class="screen seventh-screen">
           <div 
            class="left-pattern-img"
            data-parallax="true"
            data-parallax-axis="y"
            data-parallax-from="200"
            data-parallax-to="-200"
            data-parallax-speed="1.1"
            data-parallax-center-lock="true"></div>
           <div class="text-container">
                <div 
                    class="text-header-img"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="text-font seventh-screen-text-content"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">每年火把节期间，无论男女老少都会盛装出席——古朴的纹饰、浓烈的色彩、精美的刺绣……每一处细节都承载着人们对自然的礼敬、对生活的热望和对美的追求，在火光与歌舞交织的夜晚共同织绘出高原民族热烈奔放的节日华彩。</div>
            </div>
            <div class="right-pattern-container">
                <div 
                    class="right-pattern-img-1"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="300"
                    data-parallax-to="-300"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true"></div>
                <div 
                    class="right-pattern-img-2"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true"></div>
            </div>
        </div>
        <!-- 第八幕 -->
        <div class="screen eighth-screen">
            <div class="left-pattern-container">
                <div 
                    class="left-pattern-img-1"
                    ></div>
                <div 
                    class="left-pattern-img-2"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
            </div>
            <div class="picture-container">
                <div
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.2"
                    data-parallax-center-lock="true">
                    <img src="@/assets/images/folkways/folkways-image-6.png" alt="" class="picture-img-1">
                    <img src="@/assets/images/folkways/folkways-image-7.jpg" alt="" class="picture-img-2">
                </div>
                <div class="illustration-title-font">
                    <DotPopover class="dot-popover" title="内容来自" content="《中国彝族传统服饰图典籍》四川民族出版社 2019"></DotPopover>
                    <span>此为彝族青年女性盛装。整套服饰由罩衣、长衫、百褶裙、三角包、针包组成，全套为土布（棉）质地。</span>
                </div>
            </div>
            <div class="right-pattern-container">
                <div 
                    class="right-pattern-img-1"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="100"
                    data-parallax-to="-100"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true"></div>
                <div class="right-pattern-img-2"></div>
            </div>
        </div>
        <!-- 第九幕 -->
        <div class="screen ninth-screen">
            <div 
                class="back-pattern-img"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="100"
                data-parallax-to="-100"
                data-parallax-speed="1.1"
                data-parallax-center-lock="true"></div>
            <div 
                class="front-pattern-img"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="300"
                data-parallax-to="-300"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true"></div>
        </div>
        <!-- 第十幕 -->
        <div class="screen tenth-screen">
            <div 
                class="left-pattern-contain"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="100"
                data-parallax-to="-100"
                data-parallax-speed="1.1"
                data-parallax-center-lock="true">
                <div class="left-cloud-img-1"></div>
                <div class="left-cloud-img-2"></div>
            </div>
            <div 
                class="right-cloud-img"
                data-parallax="true"
                data-parallax-axis="y"
                data-parallax-from="300"
                data-parallax-to="-300"
                data-parallax-speed="1.2"
                data-parallax-center-lock="true"></div>
            <div class="text-container">
                <div>
                    <div 
                        class="big-content"
                        data-parallax="true"
                        data-parallax-axis="y"
                        data-parallax-from="100"
                        data-parallax-to="-100"
                        data-parallax-speed="1.1"
                        data-parallax-center-lock="true">
                        <p>恭喜您，您已经在“极境之旅”跨越亿万年，领略了</p>
                        <p>这片雪域之上自然的壮美和历史文化的厚重。</p>
                        <p>现在，是时候开启属于您的荣誉挑战了！</p>
                        <p>立即答题，收获属于你的“极境荣誉”！</p>
                         <div class="answer-btn text-font" @click="toAnswerPage">立即答题</div>
                    </div>
                </div>
                <div 
                    class="small-content"
                    data-parallax="true"
                    data-parallax-axis="y"
                    data-parallax-from="200"
                    data-parallax-to="-200"
                    data-parallax-speed="1.1"
                    data-parallax-center-lock="true">参与“极境智旅”互动答题，您将有机会获取积分解锁精品图书在线阅读！</div>
            </div>
        </div>
        <!-- 第十一幕 -->
        <div class="eleventh-screen">
            <div class="container-header">
                <p>参考资料</p>
                <div class="cloud-img"></div>
                <div class="header-divider-img"></div>
            </div>
            <div class="books-resource-container">
                <p class="books-resource-header">图书资源</p>
                <div>
                    <p>·《物里中华——一文一物话西藏》，四川大学中国藏学研究所编著，霍巍主编，四川民族出版社，2025.4</p>
                    <p>·《浸润与融通：西藏各民族交往、交流与交融的故事·古代卷》，黄维忠、喜饶尼玛主编，四川民族出版社，2022.10</p>
                    <p>·《藏族史要》，王辅仁、索文清编著，四川民族出版社，1982</p>
                    <p>·《藏族史要》，王辅仁、索文清编著，四川民族出版社，1982</p>
                    <p>·《嘉绒藏族古碉文明：藏、汉》，红音著，阿坝州藏族历史文化古籍研究协会编，四川民族出版社，2020.9</p>
                    <p>·《羌族建筑：汉、羌》，《中华羌族历史文化集成》编纂委员会编，张曦主编，四川民族出版社，2021.1</p>
                    <p>·《建筑艺术.民居建筑.川滇卷:藏汉对照》，《藏族美术集成》编撰委员会编，杨环主编，四川民族出版社, 2023.8</p>
                    <p>·《绘画艺术.唐卡.格萨尔卷.2:藏汉对照》，降边嘉措主编，《藏族美术集成》编撰委员会编，四川民族出版社，2018.11</p>
                    <p>·《绘画艺术.壁画.日喀则卷.1:藏汉对照》，和靖主编，《藏族美术集成》编撰委员会编，2018.12</p>
                    <p>·《绘画艺术.壁画.四川卷2:藏汉对照》，《藏族美术集成》编撰委员会编，根秋多吉主编，四川民族出版社,2021.12</p>
                    <p>·《工艺美术·织毯卷：藏汉对照》，陆晋生主编；《藏族美术集成》编撰委员会编，四川民族出版社，2018.12</p>
                    <p>·《文成公主；诺桑王子》，赤烈曲扎译，四川民族出版社, 2023.12</p>
                    <p>·《中国藏餐》，尕藏才旦、高老著，四川民族出版社，2023.2</p>
                    <p>·《晶珠本草药录》，罗达尚主编，四川民族出版社，2017</p>
                    <p>·《四川藏羌彝民族医药图鉴》，赖先荣、杨福寿、张丹编著，四川民族出版社，2020.4</p>
                    <p>·《情系高原：新藏画精品细赏》，梅定开编著，四川民族出版社, 2025.6</p>
                    <p>·《藏族传统工艺美术新作集锦:藏汉对照》，根秋多吉主编，四川民族出版社, 2021.12</p>
                    <a href="" class="more-link">更多图书资源，点击在线阅读平台跳转阅读</a>
                </div>
            </div>
            <div class="other-literature-container">
                <p>其他文献</p>
                <div>
                    <p>·《青藏高原的核心来自南半球冈瓦纳大陆》，丁林、李震宇、宋培平，中国科学院院刊，2017</p>
                    <p>·《特提斯地球动力系统研究新进展》，丁林，中国科学：地球科学，2024</p>
                    <p>·《青藏高原气候区划》，林振耀、吴祥定，地理学报，1981</p>
                    <p>·《横断山——中国冰川的“绿色”故乡》，张文敬，今日科苑，2013</p>
                    <p>·《青藏高原冰川资源及其分布特征》，刘宗香、苏珍、姚檀栋、王文悌、邵文章，资源科学，2000</p>
                    <p>·《青藏高原地热资源与地壳结构》，白嘉启、梅琳、杨美伶，地质力学学报，2006</p>
                    <p>·《阿里高原象雄考古揭秘“王侯”丝绸与黄金面罩》，崔巍，大众考古，2015</p>
                    <p>·《再探古老的象雄文明》，才让太，中国藏学，2005</p>
                    <p>·《明茶马贸易<四川省四路关驿图>考》，蓝勇，中国边疆史地研究，2013</p>
                    <p>·《简论1904年江孜抗英保卫战》，陈钢、黄维伟、李永琴，西藏民族学院学报（哲学社会科学版），2004</p>
                    <p>·《论隆吐山战役及其在中国近代史上的地位》，苏发祥，中央民族大学学报（哲学社会科学版），2006</p>
                    <p>·《青藏高原民族建筑研究70年回眸》，马扎·索南周扎，建筑，2021</p>
                    <p>·《羌族民居建筑艺术的审美意味及其当代价值》，罗晓飞，中外艺术研究，2021</p>
                    <p>·《羌族碉楼建筑与嘉绒藏族碉楼建筑对比研究》，何威，中国民族美术，2017</p>
                </div>
            </div>
            <div class="end-resource-container">
                <p>·张镱锂. (2019). 青藏高原边界数据总集. 国家青藏高原科学数据中心. https://doi.org/10.11888/Geogra.tpdc.270099</p>
                <p>·Cao, W., Zahirovic, S., Flament, N., Williams, S., Golonka, J., and Müller, R. D., 2017, Improving global paleogeography since the late Paleozoic using paleobiology: Biogeosciences, v. 14, no. 23, p. 5425-5439, DOI:10.5194/bg-14-5425-2017.</p>
                <p>·Müller, R. D., Cannon, J., Tetley, M., Williams, S. E., Cao, X., Flament, N., Bodur, Ö. F., Zahirovic, S., and Merdith, A., 2022, A tectonic-rules based mantle reference frame since 1 billion years ago–implications for supercontinent cycles and plate-mantle system evolution: Solid Earth, p. 1-42, doi: 10.5194/se-13-1127-2022</p>
                <p>·Merdith, A., Williams, S. E., Collins, A. S., Tetley, M. G., Mulder, J. A., Blades, M. L., Young, A., Armistead, S., Cannon, J., Zahirovic, S., and Müller, R. D., 2021, Extending Whole-Plate Tectonic Models into Deep Time: Linking the Neoproterozoic and the Phanerozoic: Earth Science Reviews, v. 214.</p>
                <p>·国家地理信息公共服务平台</p>
                <p>·资源环境科学数据平台</p>
                <p>·丝绸之路历史地理信息开放平台</p>
                <p>·中国古典文献资源导航系统</p>
                <p>·中国科学院中国生物物种名录2025版</p>
                <p>·中国科学院青藏高原研究所官方网站</p>
                <p>·故宫博物院官方网站</p>
                <p>·中华珍宝馆官方网站</p>
                <p>·中国藏学研究中心官方网站</p>
                <p>·中国气象局官方网站</p>
                <p>·中国文化研究院官方网站</p>
                <p>·中国政府网</p>
                <p>·新华网</p>
                <p>·西藏自治区文化和旅游厅官方网站</p>
                <p>·国家能源局官方网站</p>
                <p>·青藏高原国家种质资源库官方网站</p>
                <p>·中国国家地理官方网站</p>
                <p>·道孚县人民政府官方网站</p>
                <p>·湖南省博物馆官方网站</p>
                <p>·四川省文物考古研究院官方网站</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { pxToVw, pxToVh } from '@/utils/viewportUtils';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DotPopover from '@/components/dotPopover.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const initGsapAnimation = () => {
    gsap.to('.second-screen-text-content', {
        y: pxToVh(-100),
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.second-screen-text-content', // 触发元素
            start: 'bottom center+=400',
            end: 'top top',
        }
    })
    gsap.to('.third-screen-text-content', {
        y: pxToVh(-100),
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.third-screen-text-content', // 触发元素
            start: 'bottom center+=400',
            end: 'top top',
        }
    })
    gsap.to('.forth-screen-text-content', {
        y: pxToVh(-100),
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.forth-screen-text-content', // 触发元素
            start: 'bottom center+=400',
            end: 'top top',
        }
    })
    gsap.to('.fifth-screen-text-content', {
        y: pxToVh(-100),
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.fifth-screen-text-content', // 触发元素
            start: 'bottom center+=400',
            end: 'top top',
        }
    })
    gsap.to('.sixth-screen-text-content', {
        y: pxToVh(-100),
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.sixth-screen-text-content', // 触发元素
            start: 'bottom center+=400',
            end: 'top top',
        }
    })
    gsap.to('.seventh-screen-text-content', {
        y: pxToVh(-100),
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: '.seventh-screen-text-content', // 触发元素
            start: 'bottom center+=400',
            end: 'top top',
        }
    })
}

onMounted(() => {
    initGsapAnimation()
})

const toAnswerPage = () =>{
  router.push('/voyage/unopen')
}
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
        height: 1500vh;
        overflow-x: hidden;
        background: url('@/assets/images/folkways/folkways-bg.png') no-repeat center center;
        background-size: 100vw 1500vh;
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
            top: 200px;
            width: 501px;
            height: 1114px;
            background: url('@/assets/images/folkways/folkways-element-1-4.png') no-repeat center center / cover;
        }
        .left-cloud-img-1{
            position: absolute;
            left: 160px;
            top: 740px;
            width: 775px;
            height: 570px;
            background: url('@/assets/images/folkways/folkways-element-1-6.png') no-repeat center center / cover;
        }
        .left-cloud-img-2{
            position: absolute;
            left: 700px;
            top: 860px;
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
                z-index: 99;
                background: url('@/assets/images/folkways/folkways-character-1.png') no-repeat center center / cover;
            }
            .subtitle-img{
                position: relative;
                top: -100px;
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
        margin-top: 100px;
        .text-container{
            position: absolute;
            top: 220px;
            left: 160px;
            width: 801px;
            .text-content{
                opacity: 0;
            }
            .text-header-img{
                width: 801px;
                height: 102px;
                margin-bottom: 80px;
                background: url('@/assets/images/folkways/folkways-element-2-1.png') no-repeat center center / cover;
            }
        }
        .picture-container{
            position: absolute;
            top: 420px;
            right: 160px;
            z-index: 999;
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
            top: -300px;
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
                margin-bottom: 80px;
                background: url('@/assets/images/folkways/folkways-element-2-2.png') no-repeat center center / cover;
            }
            .text-content{
                opacity: 0;
            }
        }
        .background-pattern-img-2{
            position: absolute;
            top: -80px;
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
                margin-bottom: 80px;
                background: url('@/assets/images/folkways/folkways-element-2-3.png') no-repeat center center / cover;
            }
            .forth-screen-text-content{
                opacity: 0;
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
             .illustration-title-font{
                position: absolute;
                top: 400px;

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
            .illustration-title-font{
                position: absolute;
                top: 400px;
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
                margin-bottom: 80px;
                background: url('@/assets/images/folkways/folkways-element-2-4.png') no-repeat center center / cover;
            }
            .fifth-screen-text-content{
                opacity: 0;
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
                margin-bottom: 80px;
                background: url('@/assets/images/folkways/folkways-element-2-5.png') no-repeat center center / cover;
            }
            .sixth-screen-text-content{
                opacity: 0;
            }
        }
        .picture-container{
            position: absolute;
            right: 200px;
            top: 320px;
            .picture-img{
                width: 700px;
                margin-bottom: 20px;
            }
            .illustration-title-font{
                position: absolute;
                top: 500px;
            }
            .dot-popover{
                top: 30px;
                left: 40px;
            }
            >>> .popover-container{
                top: -20px;
                left: 40px;
            }
        }
       
        .right-fire-img-1{
            position: absolute;
            right:0;
            top: 300px;
            width: 184px;
            height: 419px;
            background: url('@/assets/images/folkways/folkways-element-3-6.png') no-repeat center center / cover;
        }
        .right-fire-img-2{
            position: absolute;
            right:0;
            top: 600px;
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
                margin-bottom: 80px;
                background: url('@/assets/images/folkways/folkways-element-2-6.png') no-repeat center center / cover;
            }
            .seventh-screen-text-content{
                opacity: 0;
            }
        }
        .right-pattern-img-1{
            position: absolute;
            right: 0;
            top: 180px;
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
            top: 0px;
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
                margin-top: 100px;
            }
            .illustration-title-font{
                position: absolute;
                top: 500px;
            }
            .dot-popover{
                top: 80px;
                left: -40px;
            }
            >>> .popover-container{
                top: -100px;
                right: 80px;
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
        .right-pattern-img-2{
            position: absolute;
            top: -20px;
            right: 200px;
            width: 331px;
            height: 882px;
            background: url('@/assets/images/folkways/folkways-element-3-14.png') no-repeat center center / cover;
        }
    }
    .ninth-screen{
        margin-top: 100px;
        .back-pattern-img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 959px;
            height: 931px;
            background: url('@/assets/images/folkways/folkways-element-3-15.png') no-repeat center center / cover;
        }
        .front-pattern-img{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100vw;
            height: 510px;
            background: url('@/assets/images/folkways/folkways-element-3-16.png') no-repeat center center / cover;
        }
    }
    .tenth-screen{
        .left-pattern-contain{
            position: absolute;
            left: 0;
            bottom:100px;
        }
        .left-cloud-img-1{
            position: absolute;
            left: 0;
            bottom: 180px;
            width: 212px;
            height: 206px;
            background: url('@/assets/images/folkways/folkways-element-4-2.png') no-repeat center center / cover;
        }
        .left-cloud-img-2{
            position: absolute;
            left: 0;
            bottom: 0px;
            width: 659px;
            height: 240px;
            background: url('@/assets/images/folkways/folkways-element-4-3.png') no-repeat center center / cover;
        }
        .right-cloud-img{
            position: absolute;
            top: 250px;
            right: 0;
            width: 555px;
            height: 208px;
            background: url('@/assets/images/folkways/folkways-element-4-1.png') no-repeat center center / cover;
        }
        .text-container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            width: 1200px;
            .big-content p{
                font-family: 'EarlySummerSerif-Bold' !important;
                font-size: 36px;
                line-height: 72px;
                color: #534833;
            }
            .answer-btn{
                display: inline-block;
                width: 290px;
                height: 80px;
                line-height: 80px;
                margin-top: 40px;
                cursor: pointer;
                background: url('@/assets/images/folkways/end-ui.png') no-repeat center center / cover;
            }
            .small-content{
                font-size: 33px;
                font-weight: 300;
                font-family: 'Alibaba-PuHuiTi-Light';
                line-height: 54px;
                color: #534833;
            }
        }
    }
    .eleventh-screen{
        position: relative;
        box-sizing: border-box;
        width: 100vw;
        padding: 100px 120px;
        .container-header{
            padding: 20px 0;
            font-size: 33px;
            line-height: 54px;
            color: #8d613a;
            border-bottom: 4px solid;
            border-image: url('@/assets/images/folkways/end-line.png') 30 30 round;
            .header-divider-img{
                position: absolute;
                top: 20px;
                right: 100px;
                width: 424px;
                height: 142px;
                background: url('@/assets/images/folkways/folkways-element-4-4.png') no-repeat center center / cover;
            }
        }
        .books-resource-container{
            margin-top: 20px;
            p{
                font-size: 25px;
                line-height: 50px;
                color: #8d613a;
            }
            .more-link{
                font-family: 'Alibaba-PuHuiTi-Regular', 'Alibaba-PuHuiTi-Light', sans-serif;
                font-size: 25px;
                line-height: 50px;
                color: #0d86c4;
            }
        }
        .other-literature-container{
            margin-top: 40px;
            p{
                font-size: 25px;
                line-height: 50px;
                color: #8d613a;
            }
        }
        .end-resource-container{
            margin-top: 40px;
            p{
                font-size: 25px;
                line-height: 50px;
                color: #8d613a;
            }
        }
    }
</style>