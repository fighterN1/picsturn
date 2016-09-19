/*滑动模块*/
var Slider = function(cfg) {
	if(this instanceof Slider) {
		this.cfg = cfg;
		this.Init();
	} else {
		return new Slider(cfg);
	}
}
Slider.prototype = {
	Init: function() {
		var cfg = this.cfg;
		this.box=this.GetById(cfg.id);
		//绑定
		var btns = this.GetBtns();
		if(!btns.sliderLists)return false;
		var lis=btns.sliderLists.children;
//		this.ul=this.box.getb
      
		btns.pre && _on(btns.pre,"click",function(){
//			console.log("pre");
			btns.sliderLists.insertBefore(lis[lis.length-1],lis[0]);
		});
		btns.next && _on(btns.next,"click",function(){
//			console.log("next");
			btns.sliderLists.appendChild(btns.sliderLists.children[0]);
		});
		
	},
	GoPre: function() {

	},
	GoNext: function() {

	},
	GetById: function(id) {
		return typeof id == 'string' ? document.getElementById(id) : id;
	},
	GetBtns: function() {
		var cfg = this.cfg,
			box = this.box,
			boxClds = box.children;
		var btnsArray = ["pre", "next","sliderLists"],
			btns = {};
		for(var i = 0; i < boxClds.length; i++) {
			var _cld = boxClds[i];
			for(var j = 0; j < btnsArray.length; j++) {
				if(_cld.className.indexOf(btnsArray[j])>=0) {
					btns[btnsArray[j]] = _cld;
				}
			}
		}
		this.btns = btns;
		return btns;
	},
	addEvent: function() {

	}
}

//事件绑定方法
var _on = (function() {
	//标准浏览器DOM2级事件
	if(document.addEventListener) {
		return function(dom, type, fn, data) {
				dom.addEventListener(type, function(e) {
					fn.call(dom, e, data);
				}, false);
			}
			//IE浏览器DOM2级事件
	} else if(document.attachEvent) {
		return function(dom, type, fn, data) {
				dom.attachEvent('on' + type, function(e) {
					fn.call(dom, e, data);
				});
			}
			//不支持DOM2级事件浏览器添加事件
	} else {
		return function(dom, type, fn, data) {
			dom['on' + type] = function(e) {
				fn.call(dom, e, data);
			};
		}
	}

})();