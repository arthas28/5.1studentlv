/**
 * Created by YANG on 15/9/21.
 */

function levelScore(){
    var num = document.getElementById('score').value;//获得input的分数数值
    var lev = document.getElementById("level");
    if(num>=0&&num<=100&&(num!='')){//switch判断分数等级
        switch (true){
            case num<=100&&num>=90:lev.innerHTML = '一等生';break;
            case num<90&&num>=80:lev.innerHTML = '二等生';break;
            case num<80&&num>=70:lev.innerHTML = '三等生';break;
            case num<70&&num>=60:lev.innerHTML = '四等生';break;
            case num<60&&num>=50:lev.innerHTML = '五等生';break;
            case num<50&&num>=40:lev.innerHTML = '六等生';break;
            case num<40&&num>=30:lev.innerHTML = '七等生';break;
            case num<30&&num>=20:lev.innerHTML = '八等生';break;
            case num<20&&num>=10:lev.innerHTML = '九等生';break;
            case num<10&&num>=0:lev.innerHTML = '十等生';break;
        }
    }
    else{
        lev.innerHTML = '';
        alert("请输入范围0～100的分数！");
    }

}