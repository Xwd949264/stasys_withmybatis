/*
	JavaScript原生插件
*/

$(".sub-menu").click(function(e){
	// e.stopPropagation();
	// console.log(e)
	//后续代码仍会执行
	//console.log("阻止点击子元素标签-事件向上冒泡")
})

/**
 * @alias ：二级菜单显隐控制插件
 * @description  要求：父级菜单使用css类选择器main-menu;子菜单使用css类选择器sub-menu.
 */
$(".main-menu").click(function(e){
	//通过this获取子菜单对象
	var sub_menu = $(this).find(".sub-menu");
	// console.log(e)
	//判断是否为空
	if(sub_menu==undefined||sub_menu==null){
		return false;
	}
	//通过this获取获取图标对象
	var fold_icon = $(this).find("#fold-icon");//折叠图标
	var drop_icon = $(this).find("#drop-icon");//展开图标
	
	//通过子菜单对象获取子菜单项
	// console.log(sub_menu)
	//解析子菜单项是否显示
	var isDisplay = $(sub_menu).css("display");
	if("none"===isDisplay){
		//控制子级菜单显示
		$(sub_menu).css("display","flex");
		//获取viewport视窗宽度[宽度小于等于768px,不显示图标]
		if($(window).width()>768){
			//判断展开图标是否为空并使用
			modifyIconState(drop_icon,"inline-block")
			modifyIconState(fold_icon,"none");		
		}
	}else{
		//控制子级菜单隐藏
		$(sub_menu).css("display","none");
		//获取viewport视窗宽度[宽度小于等于768px,不显示图标]
		if($(window).width()>768){
			//判断折叠图标是否为空并使用
			modifyIconState(drop_icon,"none");
			modifyIconState(fold_icon,"inline-block")
		}
	}
})

function modifyIconState(iconObj,state){
	if(undefined!=iconObj&&null!=iconObj){
		$(iconObj).css("display",state)
	}
}
