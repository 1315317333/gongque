$(function(){
	$(".support").tabs();
	$(".villac").tabs();
	$(".jin6 ul li:first-of-type").tabs();
	$(".jin6 ul li:nth-of-type(2)").tabs();
    var data1=['<li class="slide"><img src="static/img/1-1.jpeg"/></li><li class="slide"><img src="static/img/1-2.jpeg"/></li>',
	'<li class="slide"><img src="static/img/2-1.jpeg"/></li><li class="slide"><img src="static/img/2-2.jpeg"/></li><li class="slide"><img src="static/img/2-3.jpeg"/></li><li class="slide"><img src="static/img/2-4.jpeg"/></li><li class="slide"><img src="static/img/2-5.jpeg"/></li><li class="slide"><img src="static/img/2-6.jpeg"/></li>',
	'<li class="slide"><img src="static/img/3-1.jpeg"/></li><li class="slide"><img src="static/img/3-2.jpeg"/></li><li class="slide"><img src="static/img/3-3.jpeg"/></li><li class="slide"><img src="static/img/3-4.jpeg"/></li>',
	'<li class="slide"><img src="static/img/4-1.jpeg"/></li><li class="slide"><img src="static/img/4-2.jpeg"/></li>',
	'<li class="slide"><img src="static/img/5-1.jpeg"/></li>',
	'<li class="slide"><img src="static/img/6-1.jpeg"/></li>',
	'<li class="slide"><img src="static/img/7-1.jpeg"/></li><li class="slide"><img src="static/img/7-2.jpeg"/></li><li class="slide"><img src="static/img/7-3.jpeg"/></li><li class="slide"><img src="static/img/7-4.jpeg"/></li><li class="slide"><img src="static/img/7-5.jpeg"/></li><li class="slide"><img src="static/img/7-6.jpeg"/></li>',
	'<li class="slide"><img src="static/img/8-1.jpeg"/></li><li class="slide"><img src="static/img/8-2.jpeg"/></li>',
    ];
	var screenInd = 0;//记录当前是第几屏
	$("#main").fullpage({
	 	afterLoad:function(anchor,index){
			screenInd = index;
            /*anchors: ['page1','page2','page3','page4','page5','page6'],//导航链接锚点
            menu: '.mainnav',//作为导航的元素*/
		}
	});
	//显示页脚    何时显示页脚   1，鼠标滚动后   2，鼠标向下滚动后   3，当是第6屏时候
	window.addEventListener("mousewheel",wheelHd,false);
	//添加鼠标滚动事件监听
	function wheelHd(e){
		if(screenInd==6){
			if(e.wheelDelta<0){
				showFooter();
			}else{
				hideFooter();
			}
		}
	}
	//如何显示页脚
	function showFooter(){
		$.fn.fullpage.setAllowScrolling(false);//不让插件滚动
		$("#main").css("margin-top",-128);
		$(".footer").css("bottom",0);
	}
	function hideFooter(){
		$.fn.fullpage.setAllowScrolling(true);//让插件滚动
		$("#main").css("margin-top",0);
		$(".footer").css("bottom",-128);
	}
	
	
	//鼠标点击滚动
	$(".container").find("li").click(function(){
		var h=$(".section").height();
		var a=$(this).index();
		$("#main").animate({"top":-a*h},1000);
		$(this).addClass("active").siblings(".mainnav li").removeClass("active");
	});
	
	
	
    var index=$(".s1 ul:first-of-type li").length;
	function fade(){		
		index--;
		if(index<0){
			index=$(".s1 ul:first-of-type li").length;
		}
		$(".s1 ul:first-of-type li").eq(index).fadeIn(1000).siblings(".s1 ul:first-of-type li").fadeOut(1000);
		$(".s1 ul:nth-of-type(2) li").eq(index).css("background","#000").siblings(".s1 ul:nth-of-type(2) li").css("background","#ccc");
	}
	setInterval(fade,2000);
	
	$(".s1 ul:nth-of-type(2) li").click(function(){
		var a=$(this).index();
		$(".s1 ul:first-of-type li").eq(a).fadeIn(1000).siblings(".s1 ul:first-of-type li").fadeOut(1000);
	    $(this).css("background","#000").siblings(".s1 ul:nth-of-type(2) li").css("background","#ccc");
	});
	
	
	var i=0;
	$(".l").click(function(){
		i++;
		var w=$(this).parents(".section").find(".jin li").width();
		if(i>$(this).parents(".section").find(".jin li").length-1){
			i=0;
		}
		$(".jin ul").animate({"left":-i*w},500);
	});
	$(".r").click(function(){
		i--;
		var w=$(this).parents(".section").find(".jin li").width();
		if(i<0){
			i=$(this).parents(".section").find(".jin li").length-1;
		}
		$(".jin ul").animate({"left":-i*w},500);
	});
	

	$(".q").click(function(){
		var a=$(this).index();
		$(this).css("background","#595959").siblings("span").css("background","transparent");
		$(this).parent("p").prev("p").children("img").eq(a).css("display","block").siblings("img").css("display","none");
	})
	
	$(".qh span").click(function(){
		var a=$(this).index();
		$(this).addClass("active").siblings("span").removeClass("active");
		$(this).parents(".tabc").children("img").eq(a).fadeIn().siblings("img").fadeOut();
	})
	
	$(".garden ul li").click(function(){
		var ind1=$(this).parents(".section").index();
		var ind2=$(this).index();
		$(".model").fadeIn();
//		$.fn.fullpage.moveTo(ind1+1,ind2);
//      $(".mod").eq(ind2).fadeIn().siblings(".mod").fadeOut();
        for(var i=0;i<data1.length;i++){
        	$(".model").find(".slider_content").html(data1[ind2])
        }
        $(".model").slider();
	    
	})

	
	
	$(".fan").click(function(){
		$(this).parents(".jin").fadeOut(500);
		$(".right").fadeIn(500);
		$.fn.fullpage.setAllowScrolling(true);
	})
	$(".enter").click(function(){
		$(this).parents(".section").find(".jin").fadeIn();
		$(".right").fadeOut(500);
		$.fn.fullpage.setAllowScrolling(false);
	});
	$(".close").click(function(){
		$(this).parents(".model").fadeOut();		
	})
	
	
	$(".zz li").click(function(){
		var a=$(this).index();		
        var w=$(".jin ul li").width();
		$(this).parents(".section").find(".jin").fadeIn(500);
		$(".jin ul").animate({"left":-a*w},500);
        $(".right").fadeOut(500);
        $.fn.fullpage.setAllowScrolling(false);
	})
	$(".zz li").mouseover(function(){
		$(this).children("img:first-of-type").animate({"opacity":1},200);
	});
	$(".zz li").mouseout(function(){
		$(this).children("img:first-of-type").animate({"opacity":0},200);
	});
	
	
	$(".nex").click(function(){
		var w=$(this).parent(".oper1").width();
		i++;
		if(i>1){
			i=0;
		}
		$(this).parent(".oper1").children(".op").animate({"left":-i*w});
	});
	
	
	$(".le").click(function(){
		i++;
		var w=$(this).prev(".houses").find(".hos").width();
		if(i>3){
			i=0;
		}
		$(this).prev(".houses").find(".ho").animate({"left":-i*w},500);
	});
	$(".ri").click(function(){
		i--;
		var w=$(this).next(".houses").find(".hos").width();
		if(i<0){
			i=3;
		}
		$(this).next(".houses").find(".ho").animate({"left":-i*w},500);
	});
	$(".ho img").click(function(){
		var a=$(this).attr("src");
		$(".hd img").attr("src",a);
	})

})

;(function($){
		$.fn.extend({
			"tabs":function(){
				this.each(function(){
					var dom=$(this);
					init();//初始化
					function init(){
						dom.find(".tab-content").fadeOut();
						dom.find(".tab-content").eq(0).fadeIn();
						dom.find(".tab-title").eq(0).addClass("active");
					}
					dom.find(".tab-title").click(function(){
						var ind=$(this).index();
						dom.find(".tab-title.active").removeClass("active");
						dom.find(".tab-content:visible").fadeOut();
						dom.find(".tab-content").eq(ind).fadeIn();
					    dom.find(".tab-title").eq(ind).addClass("active");
					})
				})
			}
		})
})(jQuery)

;(function($){
	$.fn.extend({
		"slider":function(){
			this.each(function(){
				var dom=$(this);
				var index=1;
//				"if(opt.data){
//					renderDom();
//				}"
				var len=dom.find(".slide").length;
				dom.find(".slider_content").css("width",918*len);
				dom.find(".slide_num").html(index+"/"+len);
				dom.find(".slider_content").animate({"left":0});
//				function renderDom(){
//								var str = "";
//								for(var i=0;i<opt.data.length;i++){
//									str += '<div class="slide"><img src="'+opt.data[i]+'" alt="" /></div>'
//								}
//								dom.find(".slider_content").html(str);
//									
//							}
			
				dom.find(".next").click(function(){
					index++;
					if(index>=(len+1)){index=1}
					dom.find(".slider_content").animate({"left":-(index-1)*918+"px"})
					dom.find(".slide_num").html(index+"/"+len);
					
				});
				dom.find(".pre").click(function(){
					index--;
					if(index<1){index=len}					
					dom.find(".slider_content").animate({"left":-(index-1)*918+"px"})
					dom.find(".slide_num").html(index+"/"+len);
				});
			})
		}
	})
})(jQuery)
