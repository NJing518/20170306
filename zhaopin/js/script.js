(function(){
	function changRem(){
		var scale = 1 / devicePixelRatio;
		document.querySelector('meta[name="viewport"]').setAttribute('content',
		'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' 
		+ scale + ', user-scalable=no,width=device-width');
		var width = document.documentElement.getBoundingClientRect().width;
		if (width/devicePixelRatio>540) {
			width = 540*devicePixelRatio;
		}
		var rem = width/10;
		document.documentElement.style.fontSize = rem+'px';
	}
	changRem();
	var timer;
	window.addEventListener('resize',function(){
		clearInterval(timer);
		timer = setInterval(changRem(),10);
	});
	
	
})()