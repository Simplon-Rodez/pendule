(function main(){
var indic;	
var compteur_minutes=0;
var compteur_heures=0;
	
$('#idbtn1').on('click', function(){
		indic=true;
		tourne();
		})
$('#idbtn2').on('click', function(){
		indic=false;
})	
function tourne(){
		
		//heures=document.getElementById("aiguilleheure");
		//minutes=document.getElementById("aiguilleminute");
		var heures=$('#aiguilleheure');
		var minutes=$('#aiguilleminute');
		
		switch (compteur_minutes)
			{
				//case 0: minutes.css.top="123px";minutes.css.left="250px"; break;
				case 0: minutes.css('top','123px');minutes.css('left',"250px"); break;
				case 1: minutes.css('top','160px');minutes.css('left',"287px"); break;
				case 2: minutes.css('top','210px');minutes.css('left',"300px"); break;
				case 3: minutes.css('top','260px');minutes.css('left',"287px"); break;
				case 4: minutes.css('top','297px');minutes.css('left',"250px"); break;
				case 5: minutes.css('top','310px');minutes.css('left',"200px"); break;
				case 6: minutes.css('top','297px');minutes.css('left',"150px"); break;
				case 7: minutes.css('top','260px');minutes.css('left',"113px"); break;
				case 8: minutes.css('top','210px');minutes.css('left',"100px"); break;
				case 9: minutes.css('top','160px');minutes.css('left',"113px"); break;
				case 10: minutes.css('top','123px');minutes.css('left',"150px"); break;
				case 11: minutes.css('top','110px');minutes.css('left',"200px"); break;

				
				default: alert("Y'a un bug!"); break;
			}
			
		compteur_minutes=(compteur_minutes+1) % 12;
		//compteur_minutes++;
		if (compteur_minutes==0)
			{
				switch (compteur_heures)
					{
						case 0: heures.css('top','123px');heures.css('left','250px'); break;
						case 1: heures.css('top','160px');heures.css('left','287px'); break;
						case 2: heures.css('top','210px');heures.css('left','300px'); break;
						case 3: heures.css('top','260px');heures.css('left','287px'); break;
						case 4: heures.css('top','297px');heures.css('left','250px'); break;
						case 5: heures.css('top','310px');heures.css('left','200px'); break;
						case 6: heures.css('top','297px');heures.css('left','150px'); break;
						case 7: heures.css('top','260px');heures.css('left','113px'); break;
						case 8: heures.css('top','210px');heures.css('left','100px'); break;
						case 9: heures.css('top','160px');heures.css('left','113px'); break;
						case 10: heures.css('top','123px');heures.css('left','150px'); break;
						case 11: heures.css('top','110px');heures.css('left','200px'); break;
						
						default: alert("Y'a un bug!"); break;
					}
			
				compteur_heures=(compteur_heures+1) % 12;
			}
			
		if (indic==true){
			window.setTimeout(tourne, "1000");
		}else{
			console.log('indic:'+indic);
		}
	}
	
 

})();