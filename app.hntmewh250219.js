(function(w, d) {
    var urlHash = "";
    document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    function showContent(sectionId) {
        switch (sectionId) {
            case '/viewzb':
            case '/viewzbHome':
                zbPageInit();
                break;
            case '/viewlb':
            case '/viewlbHome':
                lbPageInit();
                break;
            default:
                doDefault();
                break;
        }
    }
    
    function onHashChange() {
        urlHash = window.location.hash.slice(1);
        showContent(urlHash);
    }
    
    onHashChange();
        window.addEventListener('hashchange', onHashChange);
    });
    vxMenuHide();
    
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }
    if(getQueryVariable("vueDebug")=="debug") var vConsole = new window.VConsole();
    var notFoundUrl = 'https://m.jd.com';
    var authData = getQueryVariable(paramKeys);
    if(!authData) window.location.href = notFoundUrl;
    
    var homeInitStatus = 0;
    var currentDomain = "";
    var currentUrl = "";
    var nextUrl = "";
    var apiHost = "//hnvsde.ccdmqor.cn";
    var apiHostBaks = "w2YwxyuxeqR4LAzxzg1YpyMc8rohYf4Ui4JCDvoWun0VMEIGfP78HLHPJaE6mCBbCWtPlMt0TyE5InFFDF55JOYh5IGfXqLDI0E0BDo72Bmr7PCBhPWmpHkOPwJZh0aRkViC/6DB5ddKrd/xS60ZDeWfen1xgh90900TP0Vpits=";
    var apiHostAllLines = [];
    var jsDomain = "";
    var picDomain = "";
    var webType = "";
    var sKey = "";
    var promotion_hash = "";
    var openid = "";
    var sc_switch = 0;
    var lb_free_mv = 0;
    var videoUrl = "";
    var page = 1;
    var nextPage = 1;
    var cfUrl = "";
    var cfUrl2 = "";
    var lbUrl = "";
    var zbUrl = "";
    var ppcnt = "";
    var dzcnt = "";
    var zbSwitch = "";
    var zbTishi = "";
    var currClientCnt = 1;
    var tip1 = "";
    var tip2 = "";
    var tip3 = "";
    var tip4 = "";
    var keyWord = '';
    var showKeyWord = '';
    var auto = false;
    var Application;
    var dz=0;
    var pl=new Array();
    pl[0]=[
    ["管理：","系统检测未邀请好友即将被踢出"],
    ["管理：","未邀请好友入群,即将停止访问,"],
    ["管理：","未邀请好友入群,即将停止访问."],
    ["管理：","未邀请好友入群,即将停止访问,"],
    ["管理：","未邀请好友入群,即将停止访问,"],
    ["管理：","未邀请好友入群,即将停止访问,"],
    ["管理：","未邀请好友入群,即将停止访问."],
    ["游客1258：","住播奶子真好看！！"],
    ["游客0532：","支持你点赞！！"],
    ["游客3410：","哇，这么精彩的嘛"],
    ["游客0005：","这操作亮了丶"],
    ["游客2311：","我已经拉人了"],
    ["游客1006：","拉好人进群了你们呢？"],
    ["游客3342：","快进下个节奏啊！！"],
    ["游客0043：","我喜欢你！"],
    ["游客1456：","支持你点赞！！"],
    ["游客1684：","能给我你的私信方式嘛！"],
    ["游客1573：","来来来刷波车"],
    ["游客1251：","拉人进群了"],
    ["游客3446：","不要踢我，我拉人了"],
    ["游客1464：","拉人就不会被踢吗？"],
    ["游客0909：","我刚被踢出来？"],
    ["游客0098：","大家一起拉人吧主播也不容易！"],
    ["游客1123：","这个主播不错，我很喜欢"],
    ["游客4421：","拉人了"],
    ["游客2463：","我拉了20个人了，主播奖励我什么"],
    ["游客1085：","我拉8个人，主播够意思了吧"],
    ["游客1853：","我朋友就让我推荐给他了"],
    ["游客1244：","都是群里的兄弟吗？"],
    ["游客0443：","奶子好漂亮"],
    ["管理：","系统检测未邀请好友即将被踢出"],
    ["管理：","未邀请好友入群,即将停止访问,"],
    ["管理：","未邀请好友入群,即将停止访问."],
    ["管理：","未邀请好友入群,即将停止访问,"],
    ["管理：","未邀请好友入群,即将停止访问,"],
    ["管理：","未邀请好友入群,即将停止访问,"],
    ["管理：","未邀请好友入群,即将停止访问."] 
    ];
    var p=3;
    var dzs=0;
    var zbKeyIdx = 0;
    var zbKeyWordsParam = ['5Lmx5Lym', '5aaI5aaI', '5oyJ5pGp', '5by65aW4', '5bm85aWz', '5YaF5bCE'];
    
    function checkServiceLine(lineHost, replaceApiHost){
        $.ajax({
            url:lineHost+"/api/checkService",
            type: 'post',
            timeout:5000,
            data: {},
            datatype:"json",
            success:function(e){
                try {
                    if(e.code == 200) {
                        for(var i=0; i<apiHostAllLines.length; i++){
                            if(apiHostAllLines[i].apihost == lineHost) {
                                apiHostAllLines[i].apistatus = 0;
                                apiHostAllLines[i].checkTime = new Date().getTime();
                                break;
                            }
                        }
                        if(replaceApiHost) apiHost = lineHost;
                    }
                } catch (error) {
                    for(var i=0; i<apiHostAllLines.length; i++){
                        if(apiHostAllLines[i].apihost == lineHost) {
                            apiHostAllLines[i].apistatus = 1;
                            apiHostAllLines[i].checkTime = new Date().getTime();
                            break;
                        }
                    }
                }
            },
            error: function (response, textStatus, error) {
                console.log("line network error");
                for(var i=0; i<apiHostAllLines.length; i++){
                    if(apiHostAllLines[i].apihost == lineHost) {
                        apiHostAllLines[i].apistatus = 1;
                        apiHostAllLines[i].checkTime = new Date().getTime();
                        break;
                    }
                }
            }
        })
    }
    
    function getApiHostBaks(){
        let decrypt = new encryptUtil();
        decrypt.data = apiHostBaks;
        let bakLines = JSON.parse(decrypt.decryptLong());
        for(var i=0; i<bakLines.data.length; i++){
            let line = new Object();
            line.apihost = bakLines.data[i];
            line.apistatus = 0;
            line.checkTime = 0;
            apiHostAllLines[i] = line;
        }
        shuffleArray(apiHostAllLines);
        let baseline = new Object();
        baseline.apihost = apiHost;
        baseline.apistatus = 0;
        baseline.checkTime = 0;
        apiHostAllLines[bakLines.data.length] = baseline;
    }
    getApiHostBaks();
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function startCheckServiceLine(){
        if(apiHostAllLines.length>0){
            let lineIdx = random(0, apiHostAllLines.length);
            checkServiceLine(apiHostAllLines[lineIdx].apihost, false);
            setTimeout(startCheckServiceLine, 10000);
        }
    }
    setTimeout(startCheckServiceLine, 1000);
    
    function getCurrentUrlInfo(){
        let localUrl = window.location.href;
        currentUrl = localUrl.replace(window.location.hash, "");
    }
    
    function urlGetPath(url){
        let newUrl = url.indexOf(paramKeys+"=")?(url.split(paramKeys+"=")[0]+paramKeys+"="+authData):url;
        return newUrl;
    }
    
    function getCurrentTime() {
        return new Date().valueOf()
    }
    
    function random(min, max) {
        return Math.floor(min + Math.random() * (max - min))
    }
    
    function myIsNaN(value) {
        return (typeof value === 'number' && !isNaN(value));
    }
    
    function zbPageInit(){
        $("#app").empty();
        addHtUrl("/viewzbHome");
        $(document).prop('title', '\u73b0\u573a\u771f\u4eba\u79c0');
        getCurrentUrlInfo();
        $.ajax({
            url:apiHost+"/api/zb/zbInfo",
            timeout: 5000,
            type: 'post',
            data: {
                data: authData,
                retime: getCurrentTime(),
            },
            datatype:"json",
            success:function(res){
                try{
                    if(res.code == 200){
                        jsDomain = res.jsDomain;
                        picDomain = res.picDomain;
                        let decrypt = new encryptUtil();
                        decrypt.data = res.baseInfo;
                        let e = JSON.parse(decrypt.decryptLong());
                        sc_switch = e.sc_switch;
                        videoUrl = e.videoUrl;
                        cfUrl = e.cfUrl;
                        lbUrl = e.lbUrl;
                        ppcnt = e.ppcnt;
                        dzcnt = e.dzcnt;
                        zbSwitch = e.zbSwitch;
                        tip1 = e.tip1;
                        tip2 = e.tip2;
                        tip3 = e.tip3;
                        tip4 = e.tip4;
                        doZbHtmlInit();
                    }else if(res.code == 201){
                        let decrypt = new encryptUtil();
                        decrypt.data = res.data;
                        var reLogin = JSON.parse(decrypt.decryptLong());
                        window.location.href = reLogin.url;
                    }else if(res.code == 999){
                        window.location.href = notFoundUrl;
                    }else{
                        // window.location.href = 'https://www.163.com';
                    }
                } catch (error) {
                    for(var i=0; i<apiHostAllLines.length; i++){
                        if(apiHostAllLines[i].apistatus == 0){
                            apiHost = apiHostAllLines[i].apihost;
                            checkServiceLine(apiHostAllLines[i].apihost, true);
                            setTimeout(zbPageInit, 1000);
                            break;
                        }
                    }
                }
            },
            error:function(e){
                // console.log("error");
                for(var i=0; i<apiHostAllLines.length; i++){
                    if(apiHostAllLines[i].apistatus == 0){
                        apiHost = apiHostAllLines[i].apihost;
                        checkServiceLine(apiHostAllLines[i].apihost, true);
                        setTimeout(zbPageInit, 1000);
                        break;
                    }
                }
            }
        });
    }
    
    function lbPageInit(){
        $("#app").empty();
        $(document).prop('title', '\u9f99\u817e\u864e\u8dc3');
        getCurrentUrlInfo();
        if (myIsNaN($.cookie('clientCnt'))) currClientCnt = $.cookie('clientCnt');
        else{
            if(typeof $.cookie('clientCnt') == "string") currClientCnt = parseInt($.cookie('clientCnt'));
        }
        $.ajax({
            url:apiHost+"/api/lb/lbInfo",
            type: 'post',
            timeout: 5000,
            data: {
                data: authData,
                retime: getCurrentTime(),
            },
            datatype:"json",
            success:function(res){
                try{
                    if(res.code == 200){
                        jsDomain = res.jsDomain;
                        picDomain = res.picDomain;
                        let decrypt = new encryptUtil();
                        decrypt.data = res.baseInfo;
                        let e = JSON.parse(decrypt.decryptLong());
                        sc_switch = e.sc_switch;
                        cfUrl = e.dashangUrl;
                        zbTishi = e.zbTishi;
                        lb_free_mv = e.lb_free_mv;
                        videoUrl = '';
                        lbUrl = '';
                        ppcnt = 0;
                        dzcnt = 0;
                        zbSwitch = 0;
                        tip1 = '';
                        tip2 = '';
                        tip3 = '';
                        tip4 = '';
                        doLbHtmlInit();
                    }else if(res.code == 201){
                        let decrypt = new encryptUtil();
                        decrypt.data = res.data;
                        var reLogin = JSON.parse(decrypt.decryptLong());
                        window.location.href = reLogin.url;
                    }else if(res.code == 202){
                        window.location.href = urlGetPath(currentUrl)+"#/viewzb";
                    }else if(res.code == 999){
                        window.location.href = notFoundUrl;
                    }else{
                        // window.location.href = 'https://www.163.com';
                    }
                } catch (error) {
                    for(var i=0; i<apiHostAllLines.length; i++){
                        if(apiHostAllLines[i].apistatus == 0){
                            apiHost = apiHostAllLines[i].apihost;
                            checkServiceLine(apiHostAllLines[i].apihost, true);
                            setTimeout(lbPageInit, 1000);
                            break;
                        }
                    }
                }
            },
            error:function(e){
                for(var i=0; i<apiHostAllLines.length; i++){
                    if(apiHostAllLines[i].apistatus == 0){
                        apiHost = apiHostAllLines[i].apihost;
                        checkServiceLine(apiHostAllLines[i].apihost, true);
                        setTimeout(lbPageInit, 1000);
                        break;
                    }
                }
            }
        });
    }
    
    function doZbHtmlInit(){
        let html = initZbHtml();
        $("#app").html(html);
        $('body').css({'background':"url('//"+jsDomain+"/static/zb/download1.jpg') no-repeat", 'background-size':"100% 100%", "background-attachment":"fixed"});
        if(zbSwitch != 'open'){
            $('#my-video').attr('poster', '');
            $("#zbTipId").text("暂无直播");
        }else{
            $("#zbTipId").text("");
            let zbcover = '//'+jsDomain+'/static/zb/bigplay1.png';
            $('#my-video').attr('poster', zbcover);
            setTimeout(showzhongjian, 180000);
        }
        if(sc_switch == 1) {
            $("#scrkDivId").show();
            $("#scrkId").on('click', function () {
                scrk();
            });
        }
        $("#mianfeiId").on('click', function () {
            $('body').css({'background':"", 'background-size':"", "background-attachment":""});
            getCurrentUrlInfo();
            window.location.href = urlGetPath(currentUrl)+"&pageHash=lb"+"#/viewlb";
        });
        doLbPlay();
        $(".f2").on('click', function () {
            if($("#pinglun").val()!=""){
                pl[0].splice(p+1,0,["游客"+Math.round(Math.random()*9000)+"：",$("#pinglun").val()]);
                $("#pinglun").val("");
            }else{
                layer.msg('请输入评论');
            }
         })
        $(".libao").on('click', function () {
            layer.msg('尚未进入房间');
         })
        $(".icon-aixin").on('click', function () {
            if(dz==0){
                $(".icon-aixin").css("color","#F15857");
                dz=1;
            }else{
                $(".icon-aixin").css("color","#fff");
                dz=0;
            }
        });
        initZbTitle();
    }
    
    function doLbHtmlInit(){
        let html = initLbHtml();
        $("#app").html(html);
        $('body').css({'background':"url('//"+jsDomain+"/static/lb/ditu_hn.jpg') no-repeat", 'background-size':"100% 100%", "background-attachment":"fixed"});
        $("#zbTitleId").text(zbTishi);
        zbTitleZmd();
        let zbcover = '//'+jsDomain+'/static/zb/bigplay1.png';
        $('#my-video').attr('poster', zbcover);
        if(sc_switch == 1) {
            $("#scrkDivId").show();
            $("#scrkId").on('click', function () {
                scrk();
            });
        }
        getLbVodUrl(1);
        $("#mianfeiId").on('click', function () {
            getLbVodUrl(1);
        });
        $("#zhiboId").on('click', function () {
            $('body').css({"background":"", "background-size":"", "background-attachment":""});
            getCurrentUrlInfo();
            window.location.href=urlGetPath(currentUrl)+"&pageHash=zb"+"#/viewzb";
        });
        $("#switch").on('click', function () {
            auto = !auto;
            this.innerText = '连续: ' + (auto ? '开' : '关');
        });
        $("#next").on('click', function () {
            doLbPlay();
        });
        $("#next1").on('click', function () {
            getLbVodUrl(page);
        });
        $("#showYqbt1").on('click', function () {
            $("#BDBridgeInviteWrap").hide();
        });
        $("#showYqbt2").on('click', function () {
            $("#BDBridgeInviteWrap").hide();
        });
        setTimeout(showLbzhongjian, 180000);
    }
    
    function getLbVodUrl(page){
        var now = new Date();
        now.setTime(now.getTime() + 1800);
        let cookieDomain = window.location.hostname;
        if(currClientCnt>=lb_free_mv){
            currClientCnt = 1;
            $.cookie('clientCnt', currClientCnt, {
                expires: now,
                path: '/',
                domain: cookieDomain
            });
            window.location.href=cfUrl;
            return false;
        }else{
            currClientCnt = currClientCnt+1;
            $.cookie('clientCnt', currClientCnt, {
                expires: now,
                path: '/',
                domain: cookieDomain
            });
        }
        $.ajax({
            url:apiHost+"/api/lb/lbVodUrl",
            type: 'post',
            timeout: 5000,
            data: {
                data: authData,
                page: page,
                retime: getCurrentTime(),
            },
            datatype:"json",
            success:function(res){
                try{
                    if(res.code == 200){
                        let decrypt = new encryptUtil();
                        decrypt.data = res.data;
                        let videoUrlInfo = JSON.parse(decrypt.decryptLong());
                        videoUrl = videoUrlInfo['videoUrl'];
                        page = videoUrlInfo['curPage'];
                        nextPage = videoUrlInfo['nextPage'];
                        if(videoUrlInfo['keyword']!='0') {
                            keyWord = videoUrlInfo['keyword'];
                            showKeyWord = videoUrlInfo['showword'];
                        }else{
                            keyWord = '';
                            showKeyWord = '';
                        }
                        if(videoUrl != '') doLbPlay();
                    }else{
                        for(var i=0; i<apiHostAllLines.length; i++){
                            if(apiHostAllLines[i].apistatus == 0){
                                apiHost = apiHostAllLines[i].apihost;
                                checkServiceLine(apiHostAllLines[i].apihost, true);
                                break;
                            }
                        }
                    }
                } catch (error) {
                    for(var i=0; i<apiHostAllLines.length; i++){
                        if(apiHostAllLines[i].apistatus == 0){
                            apiHost = apiHostAllLines[i].apihost;
                            checkServiceLine(apiHostAllLines[i].apihost, true);
                            break;
                        }
                    }
                }
            },
            error:function(e){
                console.log("error");
                for(var i=0; i<apiHostAllLines.length; i++){
                    if(apiHostAllLines[i].apistatus == 0){
                        apiHost = apiHostAllLines[i].apihost;
                        checkServiceLine(apiHostAllLines[i].apihost, true);
                        break;
                    }
                }
            }
        })
    }
    
    function doLbPlay(){
        if(Application && Application.$el !== undefined){
            if(videoUrl!='') {
                Application.videoUrl = videoUrl;
                Application.player();
            }
        }else{
            Application = new Vue({
                el: "#appDiv",
                data: {
                    videoUrl:'',
                    pageHash:'',
                    video:null,
                    timer:null,
                    isShow:false,
                    timeIsStart:null,
                },
                mounted: function(){
                    this.videoUrl=videoUrl;
                    this.pageHash=urlHash;
                    this.video=this.$refs.video;
                    this.timeIsStart=0;
                    this.isShow=false;
                    exprotDialog(0);
                },
                methods: {
                    player:function(){
                        exprotDialog(2);
                        if(this.video.paused){
                            // 播放
                            if(this.pageHash == '/viewzb'){
                                if(zbSwitch == 'open') this.video.play();
                            }else this.video.play();
                        }else{
                            // 暂停
                            this.video.pause();
                            // this.video.play();
                        };
                    },
                    timeStart:function(){
                    },
                    onVideoPlay:function(){
                        exprotDialog(2);
                    },
                    handleVideoEnded:function(){
                        exprotDialog(1);
                    }
                }
            });
        }
    }
    
    function exprotDialog(flag){
        if(flag == 1){
            if(keyWord != '0' && keyWord != '') showKeyWordDialog();
            else if (auto) getLbVodUrl(page);
            else if (!auto) doLbPlay();
        } else if(flag == 2) {
            $('body').css({'background':"", 'background-size':"", "background-attachment":""});
            $('body').css({'background-color':"#000000"});
        }
    }
    
    function showKeyWordDialog(){
        layer.confirm(showKeyWord, 
            {title: ['查看完整版', 'font-size:20px;'],
            area:['340px', '200px'], 
            btn: ['立即前往', '继续观看']
            }, function(){
                if (cfUrl.indexOf('#/') !== -1) {
                    window.location.href=cfUrl.split("#/")[0]+"&search_key="+str_encode(keyWord)+"#/";
                } else window.location.href=cfUrl+"&search_key="+str_encode(keyWord);
            }, function(index){
                getLbVodUrl(page);
                layer.close(index);
            }
        );
    }
    
    function showzhongjian() {
        let keyWord = str_decode(zbKeyWordsParam[zbKeyIdx]);
        layer.confirm(keyWord, 
            {title: ['主播推荐精彩资源', 'font-size:20px;'],
            area:['340px', '200px'], 
            btn: ['立即前往', '继续观看']
            }, function(){
                window.location.href=cfUrl.split("#/")[0]+"&search_key="+zbKeyWordsParam[zbKeyIdx]+"#/";
            }, function(index){
                if(zbKeyIdx<zbKeyWordsParam.length-1) zbKeyIdx ++;
                else zbKeyIdx = 0;
                setTimeout(showzhongjian, 180000);
                layer.close(index);
            }
        );
    }
    
    function showLbzhongjian() {
        document.getElementById('BDBridgeInviteWrap').style.display ='block';
        setTimeout(showLbzhongjian, 180000);
    }
    
    function zbTitleZmd(){
        $("#zbTitleId").animate({ left: "-420px" }, 5000, function () {
            $(this).css("left", "100px");
            zbTitleZmd();
        });
    }
    
    function initZbTitle(){
        var t = document.title ;
        var t01 = t + "♪♫¸（ >‿◠）✌";
        var t02 = t + "♪♫¸（⊙‿⊙）✌";
        var t03 = t + "♪♫¸（◠▽◠）✌";
        var t04 = t + "♪♫¸（ ô‿ô ） ✌";
        var t05 = t + "♪♫¸（͡° ʖ ͡°）✌";
        var t06 = t + "♪♫¸（͡ Ö‿Ö ） ✌";
        var t07 = t + "♪♫¸（＾▽＾）✌";
        var t08 = t + "♪♫¸（ •◡• ）✌";
        var t09 = t + "♪♫¸（ ¬‿¬ ）✌";
        var t10 = t + "♪♫¸（◉◡◉）✌";
        var t11 = t + "♪♫¸（◔◡◔）✌";
        var t12 = t + "♪♫¸（ˇωˇ）✌";
        var t13 = t + "♪♫¸（ô ◡ ô）✌";
        var t14 = t + "♪♫¸（∩▽∩）✌";
        var t15 = t + "♪♫¸（⊙△⊙）✌";
        var t16 = t + "♪♫¸（≧▽≦）✌";
        var t17 = t + "♪♫¸（ ^人^ ）✌";
        var t18 = t + "♪♫¸（°ω°）✌";
        var t19 = t + "♪♫¸（ˋωˊ）✌";
        var t20 = t + "♪♫¸（ˋ△ˊ）✌";
        var t21 = t + "♪♫¸（ˇ▽ˇ）✌";
        var t22 = t + "♪♫¸（°ο°）✌";
        var t23 = t + "♪♫¸（ˇ◡ˇ）✌";
        var t24 = t + "♪♫¸（ ⊙ʖ⊙）✌";
        var t25 = t + "♪♫¸（ˉ▽ˉ）✌";
        var t26 = t + "♪♫¸（￣□￣）✌";
        var myObj = {"title":[ t01,t02,t03,t04,t05,t06,t07,t08,t09,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26 ]}
        var x = myObj.title.length;
        var i = 0 ;
        function tit(){document.getElementsByTagName("title")[0].innerText = myObj.title[i];i++;if( i == x ){ i = 0 ;}setTimeout(function (){tit()}, 1000);}
        tit();
    }
    
    function scrk(){
        $.ajax({
            url:apiHost+"/api/lb/boxsclink",
            type: 'post',
            data: {
                data: authData,
                type: 4,
            },
            datatype:"json",
            success:function(e){
                if(e.code == 200){
                    let sharePicLink = e.url;
                    let sharePicHtml = '<img style="width: 300px;" src="'+sharePicLink+'">';
                    layer.open({
                        content: sharePicHtml,
                        skin: 'layerdemo',
                        offset: ['50px'] ,
                        btn: ['长按保存图片到相册', '关闭'],
                        yes: function(index, layero){
                            layer.close(index);
                        },
                        bt2:function (index, layer){
                            layer.close(index);
                        }
                    });
                }else{
                    let msg = e.msg;
                    layer.open({
                        content: msg,
                        skin: 'msg',
                        time: 3000
                    });
                }
            },
            error:function(e){
                console.log("error");
            }
        })
    }
    
    function pinlun(){
        if(p<pl[0].length-1){
            p++;
        }else{
            p=3;
        } 
        $(".n1").html(pl[0][p-3][0]);
        $(".n2").html(pl[0][p-2][0]);
        $(".n3").html(pl[0][p-1][0]);
        $(".n4").html(pl[0][p][0]);
        $(".nr1").html(pl[0][p-3][1]);
        $(".nr2").html(pl[0][p-2][1]);
        $(".nr3").html(pl[0][p-1][1]);
        $(".nr4").html(pl[0][p][1]);
    }
    
    var startx, starty;
    document.addEventListener("touchstart", function(e){
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
    }, false);
    
    function doDefault(){
        $("#app").empty();
        window.location.href = notFoundUrl;
    }
    
    function addHtUrl(pagePath){
        return false;
        var ggym;
        ggym = window.location.href;
        function zp() {
            var a = document.createElement('a');
            a.setAttribute('rel', 'noreferrer');
            a.setAttribute('id', 'm_noreferrer');
            a.setAttribute('href', ggym);
            document.body.appendChild(a); 
            document.getElementById('m_noreferrer').click();
            document.body.removeChild(a);
        }
        history.pushState(history.length + 1, "message", location.href.split('#/')[0] + "#"+pagePath);
        if (navigator.userAgent.indexOf('Android') != -1) {
            if (typeof (tbsJs) != "undefined") {
                tbsJs.onReady('{useCachedApi : "true"}', function (e) {})
                window.onhashchange = function () {
                    zp();
                };
            } else {
                var pop = 0;
                window.onhashchange = function (event) {
                    pop++;
                    if (pop >= 6) {
                        zp();
                    } else {
                        history.go(1);
                    }
                };
                history.go(-1);
            }
        } else {
            window.onhashchange = function () {
                zp();
            };
        }
    }
    
    function initZbHtml(){
        let html = `<div class="top2 jiak">
                <div id="appDiv" class="app">
                    <video preload='auto' id='my-video' ref="video" :src="videoUrl" @click="player" @play="onVideoPlay" @ended="handleVideoEnded" autoplay="autoplay" poster="" webkit-playsinline='true' playsinline='true' x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true'x5-video-ignore-metadata='true' width='100%' height='100%'><p>不支持video</p></video>
                </div>
                <div class="show" id="show" name="show">`+tip1+`<br/><br/></div>
                <div class="show2" id="show2" name="show2">`+tip2+`<br/>`+tip3+`<br/></div>
                <div class="phpaspnet">
                    <div style="position:absolute;top:65px;right:5px;z-index:1;">
                        <a id="mianfeiId" href="javascript:void(0);" style="text-decoration: none;">
                            <img style="height:60px;width:60px;display: block;" src='//`+jsDomain+`/static/lb/duanpian1.png' alt='长腿' />
                            <i style="position:relative;color:red;font-weight: bold;font-style: normal;left:8px;">免费</i>
                        </a>
                    </div>
                    <div  style="position:absolute;top:180px;right:5px;">
                        <a href='`+cfUrl+`' style="text-decoration: none;" >
                            <img src="//`+jsDomain+`/static/lb/003.png" style="height:60px;width:60px;display: block;z-index: 21;">
                            <i style="position:relative;color:red;font-weight: bold;font-style: normal;left:8px;">精品</i>
                        </a>
                    </div>
                    <div id="scrkDivId" style="position:absolute;top:280px;right:5px;display:none;">
                        <a href='javascript:void(0);' id="scrkId" style="text-decoration: none;" >
                            <img src="//`+jsDomain+`/static/lb/004.png" style="height:60px;width:60px;display: block;z-index: 21;">
                            <i style="position:relative;color:red;font-weight: bold;font-style: normal;left:8px;">收藏</i>
                        </a>
                    </div>
                </div>
            </div>`;
            html += `<div class='swtCenter relative' id='showAds' style="height:400px;display:none">
                <span class='closeBtn_swt absolute' id='bridgeinviteclose' onclick='hideAds();'>
                  <img src="//`+jsDomain+`/static/zb/close.png"/>
                </span>
            </div>`;
            html += `<p>&nbsp;</p>
                <p class="STYLE1">&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div><a href="javascript:" class="btn btn_primary jiaru">.</a></div>
                <p align="center">&nbsp;</p>
                <p align="center">&nbsp;</p>
                <p align="center">&nbsp;</p>
                <p align="center" style="position: absolute;top: 45%;left: 35%;background-color: #f59c12;color: #fff;border-radius: 10px;padding: 5px;line-height: 40px;font-size: 25px;" id="zbTipId"></p>
                <p align="center">&nbsp;</p>
                <p align="center">&nbsp;</p>
                <p align="center">&nbsp;</p>
                <div onClick="tz()" class="head">
                </div>
                <div class="h4">`+ppcnt+`人</div>
                <div class="foot"> 
                <div class="f1"><input type="text" placeholder="评论" id="pinglun"></div><div class="f2">发送</div> 
                </div>
                <div class="dianzan">
                    <div class="d1">
                        <i class="icon iconfont icon-aixin"></i>
                        <span><span id="dzs">25343</span>人点赞</span>
                    </div>
                </div>
                <eq name="live" value="true"></eq>
                <canvas width="80" height="200" style="width: 80px; height: 200px;"></canvas>`;
        return html;
    }
    
    function initLbHtml(){
        let html = `<div class="top2 jiak">
                <div style="height:4%; width:100%;color:#ffffff;font-size:16px;margin:0 auto;background:#000; padding-top:6px;">
                        &nbsp;&nbsp;<strong id="zbTitleId" style="font-size:14px;left:50.2484px;position:relative;"></strong>
                </div>
                <div id="appDiv" class="app" style="height:calc(100%-100px);margin-bottom:5px;width:100%;">
                    <video preload='auto' id='my-video' ref="video" :src="videoUrl" @click="player" @play="onVideoPlay" @ended="handleVideoEnded" autoplay="autoplay" poster="" webkit-playsinline='true' playsinline='true' x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true'x5-video-ignore-metadata='true' width='100%' height='100%' controls><p>不支持video</p></video>
                </div>
                <div class="phpaspnet">
                    <div style="position:absolute;top:100px;right:5px;">
                        <a id="mianfeiId" href="javascript:void(0)" style="text-decoration:none;">
                            <img style="height:50px;width:50px;display:block;" src='//`+jsDomain+`/static/lb/duanpian1.png' alt='长腿'/>
                            <i style="position:relative;color:red;font-weight:bold;font-style:normal;left:8px;">免费</i>
                        </a>
                    </div>
                    <div style="position:absolute;top:180px;right:5px;">
                        <a id="zhiboId" href="javascript:void(0)" style="text-decoration:none;" target="_blank">
                            <img src="//`+jsDomain+`/static/lb/jptb.png" style="height:50px;width:50px;display:block;z-index:21;">
                            <i style="position:relative;color:red;font-weight:bold;font-style:normal;left: 8px;">直播</i>
                        </a>
                    </div>
                    <div  style="position:absolute;top:260px;right:5px;">
                        <a href='`+cfUrl+`' style="text-decoration:none;">
                            <img src="//`+jsDomain+`/static/lb/003.png" style="height:50px;width:50px;display:block;z-index:21;">
                            <i style="position:relative;color:red;font-weight:bold;font-style:normal;left:8px;">精选</i>
                        </a>
                    </div>
                    <div style="position:absolute;top:340px;right:5px;">
                        <a id="jingpinId" href="`+cfUrl+`" style="text-decoration:none;" target="_blank">
                            <img src="//`+jsDomain+`/static/lb/007.png" style="height:50px;width:50px;display:block;z-index:21;">
                            <i style="position:relative;color:red;font-weight:bold;font-style:normal;left: 8px;">精品</i>
                        </a>
                    </div>
                    <div id="scrkDivId" style="position:absolute;top:420px;right:5px;display:none;">
                        <a href='javascript:void(0);' id="scrkId" style="text-decoration:none;" >
                            <img src="//`+jsDomain+`/static/lb/004.png" style="height:50px;width:50px;display:block;z-index:21;">
                            <i style="position:relative;color:red;font-weight:bold;font-style:normal;left:8px;">收藏</i>
                        </a>
                    </div>
                </div>
            </div>`;
        html += `<div id="buttons" style="bottom:0px;width:100%;position:fixed;">
                <button id="switch">连续: 关</button>
                <button id="next">点击播放</button>
                <button id="next1">下一个</button>
            </div>
            <div class="phpaspnet">
                <div id="BDBridgeInviteWrap" style="display:none;z-index:100;">
                    <div class='swt_lists absolute'>
                        <a href="javascript:void(0);" target="_self"><img src='//`+jsDomain+`/static/lb/08536d1944213a1632dde5489c0f2e1a.png' alt=''/></a>
                        <div id="showYqbt1" style="width:100%;background-color:#2C7FF2;color:#ECEEF7;font-weight:bold;text-align:center;border-radius:15px;margin-top:-22px;">马 上 邀 请</div>
                    </div>
                </div>
            </div>`;
        return html;
    }
    
    function vxMenuHide(){
        try{
            document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {WeixinJSBridge.call('hideOptionMenu');});
            if (typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function') {
                handleFontSize()
            } else {
                if (document.addEventListener) {
                  document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
                } else if (document.attachEvent) {
                  document.attachEvent('WeixinJSBridgeReady', handleFontSize)
                  document.attachEvent('onWeixinJSBridgeReady', handleFontSize)
                }
            }
            function handleFontSize () {
                // 设置网页字体为默认大小
                WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
                // 重写设置网页字体大小的事件
                WeixinJSBridge.on('menu:setfont', function () {
                  WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
                })
            }
        }catch(e){}
    }
})(window, document);