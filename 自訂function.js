function BMIcalculator(weight, height){
	var show = "Your BMI is "；
	var BMI = weight/height*2；
	if (BMI<18.5){
		document.write(show + BMI.toString()+"You might be blew away by the wind.")
	}else if(18.5<=BMI<=24.5){
		document.write(show + BMI.toString()+"You have perfect body shape.")
	}else if(BMI>24.5){
		document.write(show + BMI.toString()+"Some one need to do more exercise.")
	}

}