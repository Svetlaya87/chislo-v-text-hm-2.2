


function ChisloSlovami() {


    let dataFromUser = dataInput.value;
    dataFromUser = dataFromUser.split('');
    console.log(dataFromUser);



    let worlds=[];
    let removeLast=[];
    
    let cifry = [
        ['ноль', 'гривен'],
        [ ['одна, гривна'],  'десять', 'сто'],
        [ ['две, гривны'] , 'двадцать', 'двести'],
        [ ['три, гривны'], 'тридцать',  'триста'],
        [ ['четыре, гривны'], 'сорок', 'четыреста'],
        [ ['пять, гривен'], 'пятьдесят', 'пятьсот'],
        [ ['шесть, гривен'], 'шестьдесят', 'шестьсот'],
        [ ['семь, гривен'], 'семьдесят', 'семьсот'],
        [ ['восемь, гривен'], 'восемьдесят', 'восемьсот'],
        [ ['девять, гривен'], 'девяносто', 'девятьсот'],
      
      
       


    ];



    let extraCifry = [
        'десять', 'одинацдцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
    ];


    let x = {
    	
        '1': 'одна',
        '2' :'две',
        '3': 'три',
        '4' :'четыре',
        '5' : 'пять', 
        '6' : 'шесть',
        '7' : 'семь',
        '8' : 'восемь',
        '9' : 'девять',
        '10' : 'десять',
        '11' : 'одиннадцать',
        '12' : 'двенадцать',
        '13' : 'тринадцать',
        '14' : 'четырнадцать',
        '15' : 'пятнадцать',
        '16' : 'шестнадцать',
        '17' : 'семнадцать',
        '18' : 'восемнадцать',
        '19' : 'девятнадцать',
        '20' : 'двадцать',
        '30' : 'тридцать',
        '40' : 'сорок',
        '50' : 'пятьдесят',
        '60' : 'шестьдесят',
        '70' : 'семьдесят',
        '80' : 'восемьдесят',
        '90' : 'девяносто',
        '100' : 'сто',
        '200' : 'двести',
        '300' : 'триста',
        '400' : 'четыреста',
        '500' : 'пятьсот',
        '600' : 'шестьсот',
        '700' : 'семьсот',
        '800' : 'восемьсот',
        '900' : 'девятьсот',
    };

    let a, b =0;
       
    if (dataFromUser.length==3 ) {

        dataFromUser[0]=dataFromUser[0]*100;
        dataFromUser[1]=dataFromUser[1]*10;

        console.log( dataFromUser, 'после умножения');



        if (dataFromUser[dataFromUser.length-2] == 10) {

            a =  +dataFromUser[dataFromUser.length-2];
            b =  +dataFromUser[dataFromUser.length-1];

            dataFromUser[dataFromUser.length-2] = a+b;

                console.log( dataFromUser, 'после сложения');   
                dataFromUser.pop();


            

            console.log(dataFromUser[dataFromUser.length-2], 'предпоследний элемент');
            

        }
        
        for (let i of dataFromUser) {
                if (i>0){
                    worlds.push(x[i]);
                }
        }

        

    } else if (dataFromUser.length==2 ) {
        dataFromUser[0]= dataFromUser[0]*10;

        
        for (let i of dataFromUser) {
            
            if (i==10){
            
            console.log(x[i]);

                i=  dataFromUser[0]+ +dataFromUser[1];
                
                worlds.push(x[i]);
                break;
            } else if (x[i]) {

                worlds.push(x[i]);


            }
            
            

        } 
        
        

    }   else if (dataFromUser.length==1) {

        if (dataFromUser[0]>0){
            let j = dataFromUser[0];
            worlds.push(x[j]);
        }else if (dataFromUser[0] ==0 ){
            worlds.push('ноль');
        }

    } 


    

       

    
        /*if (worlds[worlds.length-1] ==1   ) {
            

            Result.innerHTML=`${worlds} гривна`;

        } /*else if (worlds[worlds.length-1] >=2 && worlds[worlds.length-1] <= 4) {

            Result.innerHTML=`${worlds} гривны`;
            
        } /*else if (
            (worlds[worlds.length-1] >=5 && worlds[worlds.length-1] <= 9) |
            (worlds[worlds.length-1] == 0) |
            (worlds[worlds.length-2] == 1)


        ) {
            Result.innerHTML=`${worlds} гривен`;
        }*/
    
    if ( (worlds[worlds.length-1] == x['1']) )
    	 {
    		console.log(worlds);
    		worlds = worlds.join(' ');
    		Result.innerHTML=`${worlds} гривна`; 
    } else if ((worlds[worlds.length-1] == x['2']) ||
    		(worlds[worlds.length-1] == x['3']) ||
    		(worlds[worlds.length-1] == x['4'])
    
    ){
    		console.log(worlds);
    		worlds = worlds.join(' ');
    		Result.innerHTML=`${worlds} гривны`; 
    }else {
    		worlds = worlds.join(' ');
    		Result.innerHTML=`${worlds} гривен`;
    }
    
   
	
        //Result.innerHTML=`${worlds}`; 


    
    
    // console.log(abbetNumbers);
        //console.log(worlds[worlds.length-1]);
        


    //Result.innerHTML=`${worlds} ${abbetNumbers[0]}`; 

    
    
     
   
    
    
    
    //Result.innerHTML=`${worlds} ${abbetNumbers[0]}`;  
 
    


          
    

    
    

 

 

    

}

