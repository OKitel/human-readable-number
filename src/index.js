
module.exports = function toReadable (number) {
    let dozen;
    let hundreds;
    let telpuch;
    let unitResult;

    function findUnits(num){
        
        switch (num) {
            case 0: 
                return 'zero';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        }
        
    }
    
    function findDozen (num) {      
    
        switch (num) {
            case 10:
                return 'ten';
            case 20:
                return 'twenty';
            case 30:
                return 'thirty';
            case 40:
                return 'forty';
            case 50:
                return 'fifty';
            case 60:
                return 'sixty';
            case 70:
                return 'seventy';
            case 80:
                return 'eighty';
            case 90:
                return 'ninety'
    
        } 
    
    }

    function findTeens (num) {
        switch (num) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19: 
                return 'nineteen';        

        }
    }
    
    if (number < 10) {
        return unitResult = findUnits(number);
    } else if (number < 20) {
        return teensResult = findTeens(number);
    } else  if (number >= 20 && number < 100) {
        telpuch = number % 10;
        dozen = number - telpuch;
        let dozenResult = findDozen(dozen);
        let unitResult = findUnits(telpuch);
        if (unitResult == 'zero') {
            return dozenResult
        } else {
        return dozenResult + ' ' + unitResult;
        }

               
    } else if ( number >= 100) {
        telpuch = number % 10;
        dozen = (number - telpuch) % 100;
        hundreds = (number - dozen - telpuch) / 100;
        if ( dozen > 19 && telpuch > 0) {
            let hundredsResult = findUnits (hundreds)+ ' ' +'hundred'+ ' ' + findDozen (dozen) + ' ' + findUnits (telpuch);
            return hundredsResult;
        } else if (hundreds * 100 == number)  {
            hundredsResult = findUnits (hundreds)+ ' ' +'hundred';
            return hundredsResult;
        } else if ((dozen+telpuch) >= 11 && (dozen+telpuch) < 20) {
            hundredsResult = findUnits (hundreds)+ ' ' +'hundred'+ ' ' + findTeens(dozen+telpuch);
            return hundredsResult;
        } else if ((dozen+telpuch) >= 1 && (dozen+telpuch) <= 9) {
            hundredsResult = findUnits (hundreds)+ ' ' +'hundred'+ ' ' + findUnits (telpuch);
            return hundredsResult;
        } if (dozen == 10) {
            hundredsResult = findUnits (hundreds)+ ' ' +'hundred'+ ' ' + findDozen (dozen);
            return hundredsResult;
        } else if (telpuch == 0) {
            hundredsResult = findUnits (hundreds)+ ' ' +'hundred'+ ' ' + findDozen (dozen);
            return hundredsResult;
        }
      
            
    }
     
}
