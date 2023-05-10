// 8 may 2023 

//Make a function that checks whether the current year is a leap year or not

function checkLeapYear(year){
    if(year%4==0 && year%100!==0){
        return true;
    }
    else if(year%400==0){
        return true;
    }
    else{
        return false;
    }
}

let year = parseInt(prompt("Enter the year:"));
if(checkLeapYear(year)==true){
    document.write(year," is a leap year");
}
else{
    document.write(year," is not a leap year")
}

//Make a function that returns the leap years of upcoming next 10 years 

function checkUpcomingLeapYears() {
    const currentYear = new Date().getFullYear();
    const upcomingLeapYears = [];
  
    let year = currentYear;
    while (upcomingLeapYears.length < 10) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        upcomingLeapYears.push(year);
      }
      year++;
    }
    return upcomingLeapYears;
  }

 const leapYears = checkUpcomingLeapYears();
 document.write(leapYears);
  

//Make a function to generate OPT

function generateOPT(otpLength = 6) {
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
      otp += Math.floor(Math.random()* 10);
    }
    
    return Number(otp);
  }
  
  const otp = generateOPT();
  alert("This is your one time password for verification " + otp)

//Make a function that converts string into capital case


function toCapitalCase(User_Name){
    return User_Name.charAt(0).toUpperCase()+User_Name.slice(1).toLowerCase();
}

var caps =toCapitalCase(prompt("Enter Your Name: "))
document.write(caps)


//make a function that calculate your age



function ageCal(birthYear){
     
    var currentYear=new Date().getFullYear();
    var age=currentYear -birthYear;
    return age;
}

alert("Your Age is " + ageCal(2007) + " years old.")

