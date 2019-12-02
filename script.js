$(document).ready(function(){

	//animation fade in on load page
	$("#container").fadeIn(2000);

	//random value for gear animation
	var min=2000, max=5000;
	var time = min + Math.random()*(max+1-min);

	//function for gear animation with param
	var infiniteGearAnimation = function(element, deg, posx, posy, time){
		element.stop().animate(
			{ transform: deg+','+posx+','+posy}, time, //Time animation
			function(){
				element.attr({ transform: 'rotate(0 '+posx+' '+posy+')'}); //Position initial
				infiniteGearAnimation(element, deg, posx, posy, time);//Repeat infinite
			}
		);
	};

	var gear = function(id, deg, posx, posy, time){
		var element = Snap.select('#'+id);
		infiniteGearAnimation(element, deg, posx, posy, time);
	};

	//call every gear with name, rotation, posX, posY and Time
	gear('bigWheel','r360',403.73,286.57, time);
	gear('littleWheel','r-360',413.91,315, time);
	gear('leftGearCarpet','r360',52.33,292.8, time);
	gear('rightGearCarpet','r360',226.17,292.95, time);
	gear('littleRightGearCarpet','r360',194.29,285.12, time);
	gear('littleLeftGearCarpet','r360',86.06,285.375, time);
	gear('bottomCrank','r360',166.046,321.917, time);
	gear('highCrank','r360',332.86,155.47, time);

	gear('leftTimerNeedle','r360',471.7,289.5, time);
	gear('middleTimerNeedle','r360',481.7,289.5, time);
	gear('rightTimerNeedle','r360',491.7,289.5, time);




	var timeTimer;
	//Translate animation for package
	var infiniteTranslateAnimation = function(element, timeTimer){
		element.stop().animate(
			{ transform: 'translate(270px, 0px)' }, timeTimer, //Time anim
			function(){
				element.attr({ transform: 'rotate(0))'}); //Position initial
				infiniteTranslateAnimation(element, timeTimer);//Repeat infinite
			}
		);
	};

	var translate = function(id, timeTimer){
		var element = Snap.select('#'+id);
		infiniteTranslateAnimation(element, timeTimer);
	};

	//Call translate function with name and time for anim
	translate('_1package', 4000);
	translate('_2package', 3000);
	translate('_3package', 6000);



	var timeColor;
	//Change color animation for light
	var infiniteColorAnimation = function(element, color, colorInit, timeColor){
		element.stop().animate(
			{ fill: color }, timeColor, //Slow animation
			function(){
				element.attr({ fill: colorInit }); //Position initial
				infiniteColorAnimation(element, color, colorInit, timeColor);//Repeat infinite
			}
		);
	};

	var color = function(id, color, colorInit, timeColor){
		var element = Snap.select('#'+id);
		infiniteColorAnimation(element, color, colorInit, timeColor);
	};

	//Call animation with name, color initial, color and time for anim
	color('redFlashButton', '#ff9e88', '#FF4E2B',  1000 );
	color('greenFlashButton', '#79b7a4', '#00B763',  1650 );

});//End jQuery