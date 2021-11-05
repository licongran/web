//3设置一个通用函数
function g(select){
	var method=select.substr(0,1)=='.'?'getElementsByClassName':'getElementById';
	// if(select.substr(0,1)=='.'){
	// 	return document[method](select.substr(1))[0];
	// }else{
	// 	return document[method](select.substr(1));
	// }
	return document[method](select.substr(1));
}
//设置一个随机数 支持范围random([min,max])
function random(range){
	var max=Math.max(range[0],range[1]);
	var min=Math.min(range[0],range[1]);
	
	var diff=max-min;//差值[1,8] => 7 (0~7)(x>0,x<7)
	var randomNum=Math.ceil(Math.random()*diff+min);
	return randomNum;
}
//6计算左右分区的范围{left:{x:[min,max],y[min,max]},right:{}}
function range(){
	var range={
		left:{
			x:[],
			y:[]
		},
		right:{
			x:[],
			y:[]
		}
	}

	var wrap={
		w:g('#wrap').clientWidth,
		h:g('#wrap').clientHeight
	}
	var photo={
		w:g('.photo')[0].clientWidth,
		h:g('.photo')[0].clientHeight
	}
	
	range.left.x=[0,wrap.w/2-photo.w/2];
	range.left.y=[0,wrap.h];

	range.right.x=[wrap.w/2+photo.w/2,wrap.w];
	range.right.y=range.left.y;

	return range;
}
//4输出所有的图片
var data=data;
function addPhoto(){
	var template=g('#wrap').innerHTML;
	var html=[];
	var nav=[];

	for(d in data){
		var _html=template.replace('{{index}}',d)
						  .replace('{{img}}',data[d].img)
						  .replace('{{caption}}',data[d].caption)
						  .replace('{{desc}}',data[d].desc);
		html.push(_html);
		nav.push('<span id="nav_'+d+'" onclick="turn(g(\'#photo_'+d+'\'))" class="i">&nbsp;</span>');
	}
	html.push('<div class="nav">'+nav.join('')+'</div>')
	g('#wrap').innerHTML=html.join('');//将弄好的字符串加入到里面，添加空字符串是防止默认的逗号。
	paixu(random([0,data.length-1]));
}
addPhoto();
//5排序图片
function paixu(n){
	var _photo=g('.photo');
	var photos=[];

	for(let i=0;i<_photo.length;i++){
		_photo[i].className=_photo[i].className.replace(/\s*photo_center\s*/,' ');
		_photo[i].className=_photo[i].className.replace(/\s*photo_front\s*/,' ');
		_photo[i].className=_photo[i].className.replace(/\s*photo_back\s*/,' ');

		_photo[i].style.left='';
		_photo[i].style.top='';

		_photo[i].style['-webkit-transform']='rotate(360deg) scale(1.1)';

		_photo[i].className+=' photo_front ';
		photos.push(_photo[i]);
	}

	var photo_center=g('#photo_'+n);
	photo_center.className += ' photo_center';
	photo_center=photos.splice(n,1)[0];
	
	//把图片分为两边
	var photos_left=photos.splice(0,Math.ceil(photos.length/2));
	var photos_right=photos;

	var ranges=range();
	for(i in photos_left){//这个循环遍历出来的是顺序的数字
		var photo=photos_left[i];
		photo.style.left= random(ranges.left.x)+'px';
		photo.style.top=random(ranges.left.y)+'px';

		photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(.8)';
	}
	for(i in photos_right){//这个循环遍历出来的是顺序的数字
		var photo=photos_right[i];
		photo.style.left= random(ranges.right.x)+'px';
		photo.style.top= random(ranges.right.y)+'px';

		photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(.8)';
	}
	// 控制按钮处理
	var navs=g('.i');
	for(let i=0;i<navs.length;i++){
		navs[i].className=navs[i].className.replace(/\s*i_current\s*/,' ');
		navs[i].className=navs[i].className.replace(/\s*i_back\s*/,' ');
	}
	g('#nav_'+n).className+=' i_current ';
}

//翻转控制
function turn(elem){//传入的参数就是最大盒子下的东西
	var cls=elem.className;
	var n=elem.id.split('_')[1];

	if(!/photo_center/.test(cls)){
		return paixu(n);
	}

	if(/photo_front/.test(cls)){//正则判断下所有类名里面有没有photo_front有就替换photo_back，没有就替换photo_front
		cls=cls.replace(/photo_front/,'photo_back');
		g('#nav_'+n).className+=' i_back ';
	}else{
		cls=cls.replace(/photo_back/,'photo_front');
		g('#nav_'+n).className=g('#nav_'+n).className.replace(/\s*i_back\s*/,' ')
	}
	return elem.className=cls;//最后把参数传回去
}	