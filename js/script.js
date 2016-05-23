"use strict";

    $(function() {
	//........... LOCALSTORAGE ..............
	var sourceTest = JSON.stringify(iqtest.prepareTestData());
	localStorage.setItem("js1314sourceTest", sourceTest);
	sourceTest = localStorage.getItem("js1314sourceTest");
	sourceTest = JSON.parse(sourceTest);

	//........... RENDERING ..............
	var $container = $(".container");
	$("#tmpl").tmpl(sourceTest).appendTo($container);

	//........... BUTTON ..............
	var $div = $('<div></div>').appendTo($container).addClass('button');
	var $button = $('<button>Check my results!</button>')
	.addClass('btn btn-primary')
	.attr('type', 'button');
	$div.append($button);

	//........... CHECK RESULTS ...........
	$button.on('click', function(event) {

	var userWeight = [
	    {number: 0, weight: []},
	    {number: 1, weight: []},
	    {number: 2, weight: []},
	    {number: 3, weight: []},
	    {number: 4, weight: []},
	    {number: 5, weight: []},
	    {number: 6, weight: []}
	];

	for(var i = 0; i < iqtest.getObjectLength(sourceTest); i++) {

    	    for (var j = 0; j < iqtest.getObjectLength(sourceTest[i].answers); j++) {
    		userWeight[i].weight[j] = +$("." + [i] + "-" + [j]).is(':checked');
    	    }

    	    if (userWeight[i].weight.join() == sourceTest[i].weight.join()) {
    		$(".question" + i).addClass("right");
    	    } else {
    		$(".question" + i).addClass("wrong");
    	    }
	};

	var userResult = iqtest.countResult(sourceTest, userWeight);

	$(".result").text(userResult + " from " + iqtest.getObjectLength(sourceTest));
	showModal(event);
    });

    function showModal(event) {
	event.preventDefault();
		$('.overlay').fadeIn(400,
		  function() {
				$('.modal')
					.css('display', 'block')
					.animate({opacity: 1, top: '45%'}, 200);
        $('.modal-close').css('display', 'block');
		});
  }

    $('.modal-close, .overlay').click( function() {
		$('.modal')
			.animate( {
        opacity: 0, top: '30%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
		});

	$("input[type='checkbox']").removeAttr('checked');
	$('h4').removeClass("wrong");
	$('h4').removeClass("right");
    });
})
