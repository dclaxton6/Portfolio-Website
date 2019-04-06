var num = -10;
while(num <= 19){
	console.log(num);
	num++;
}
num = 10;
while(num <= 40){
	console.log(num);
	num+= 2;
}
num = 300;
while(num <= 333){
	if(num % 2 != 0){
		console.log(num);
	}
	num++;
}

num = 5;
while(num <= 50){
	if((num % 5 == 0)&&(num % 3 == 0)){
		console.log(num);
	}
	num++;
}

for(var i = -10; i <= 19; i++){console.log(i);}
for(var i = 10; i <= 40; i+=2;){console.log(i);}
for(var i = 300; i <= 333; i++){if(i % 2 !== 0){console.log(i);}}
for(var i = 5; i <= 50; i++){if(i % 5 == 0 && i % 3 == 0){console.log(i);}}