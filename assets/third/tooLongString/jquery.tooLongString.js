(function($){
	$.fn.tooLongString = function(params){
		if(typeof(params) !== "object"){
			return "Object expected";
		}
		
		var $ellipsis = $("[data-ellipsis]");

		var calcBlockWidth = function(params) {
			var block = $('<div id="ellipsis-wrapper">');
			if(params.element){
				block.append(params.element.outerHtml);
				$("body").append(block);
				return block.width();
			} else {
				return "No element passed";
			}
		}
		
		var isTooltip = function(tooltip){
			if(tooltip){
				$ellipsis.attr("data-toggle", "tooltip");
			} else {
				$ellipsis.attr("data-toggle", "");
			}
			params.content = $ellipsis[0].outerHtml;
		}
		
		var removeBlock = function(){
			$("#ellipsis-wrapper").remove();
		}
		
		if($ellipsis.length > 0){
			if(calcBlockWidth(params) > params.parent.width()){
				removeBlock();
				return isTooltip(true);
			} else {
				removeBlock()
				return isTooltip(false);
			}
		}
	}
})(jQuery)