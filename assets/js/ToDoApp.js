$("ul").on("click","li",toggleLineThrough);



//切换删除横线
//$(this).toggleClass("completed"); Bravo!
function toggleLineThrough(){
	$(this).toggleClass("completed");
    // ($(this).css("text-decoration-line")==="none")?
    //     $(this).css("text-decoration-line","line-through"):
    //     $(this).css("text-decoration-line","none");
}

//click on DELETE to delete Todo

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		//Grabbing new todo text
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>");
	}
});

$(".fa-building").click(function(){
	$("input[type='text']").fadeToggle();
});