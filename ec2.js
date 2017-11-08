function ecuatie2()
//-------------------------
{
this.citeste = function(){
	var val_a = document.getElementById("a").value;
	var val_b = document.getElementById("b").value;
	var val_c = document.getElementById("c").value;
};
//----------------------------
this.rezolva = function(){
	var delta = b * b - 4 * a * coef.c;
	var sol_x1, sol_x2;
	if (delta >= 0){
		sol_x1 = {re:(-b + Math.sqrt(delta)) / (2 * a), im:0}
		sol_x2 = {re:(-b - Math.sqrt(delta)) / (2 * a), im:0};
	}
	else{
		sol_x1 = {re:-b / (2 * a), im: Math.sqrt(-delta) / (2 * a)};
		sol_x2 = {re:-b / (2 * a), im:-Math.sqrt(-delta) / (2 * a)};
	}
	var solutii = {x1:sol_x1, x2:sol_x2};
	return solutii;
};
//---------------------------
	};
this.afiseaza = function(){
document.getElementById("x1").innerHTML = x1.re + "+" + x1.im + "i";
	document.getElementById("x2").innerHTML = x2.re + "+" + x2.im + "i";
};


}

	
//-------------------------------------
function rezolva()
{
	var e = citeste();
	var solutii = rezolva_ec2(coef);
	afiseaza_solutie(solutii.x1, "x1");
	afiseaza_solutie(solutii.x2, "x2");
}
//-------------------------------------