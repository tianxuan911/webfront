/**
 * Created by 旋 on 2015-9-2.
 */
window.onload=function(){
    var summaryTemplate = "<div class=\"summary\">     <a class=\"img\"        style='background-image: url(\"http://b.36krcnd.com/nil_class/bc95af75-70e7-4a6d-8a96-4ad45cf0f4e6/Her-Movie-siri-operating-system-ftr.jpg!feature\");'>         <span class=\"tag\">极客</span>     </a>      <div class=\"desc\">         <!--<p class=\"title\">智能个人助手距离 her 还有多远？</p>-->         <a class=\"title\" href=\"http://www.baidu.com\">智能个人助手距离 her 还有多远？</a>          <div class=\"author\">             <a href=\"javascript:void(0)\">                 <span                         class=\"authorFace\"                         style='background-image: url(\"http://krid-assets.b0.upaiyun.com/uploads/user/avatar/365758/cd7e967d-2363-4ed7-98bb-8a57dcf819b6.jpg!320x320\");'></span>                 <span class=\"authorName\">田旋</span>             </a>             <span>1小时前</span>         </div>         <div class=\"comment\">Facebook 的虚拟助手 “M” 进入 beta 测试阶段了。</div>     </div>     <div class=\"clear\"></div> </div>";
    for(i=0;i<10;i++){
        document.getElementById("b1").insertAdjacentHTML("beforeEnd",summaryTemplate);
    }
}