setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);


// js codes for the form validation
    const maleAkanNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
    const femaleAkanNames = ["Ama", "Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua"];

    function fetchFormData() {
        let form = document.forms[0];
        let gender;
            gender = form.gender.value
        let day;
            day =parseInt(form.day.value);
        let month;
            month =parseInt(form.month.value);
        let year;
            year = parseInt(form.year.value);

        return[gender, day, month, year];

    }

    function calculateWeekDay(birthDate){
        let [dayOfMonth, monthOfYear, yearOfBirth] = birthDate;
        let zeroBasedCentury, yearOfCentury;

        if(monthOfYear <= 2){
            monthOfYear += 12;
            yearOfBirth -= 1;
        }

        zeroBasedCentury = parseInt(yearOfBirth / 100);
        yearOfCentury = yearOfBirth % 100;

        let dayOfWeek =
            (dayOfMonth +
                parseInt(
                    2.6 * (monthOfYear + 1) +
                        yearOfCentury + 
                        parseInt(yearOfCentury / 4) +
                        parseInt(zeroBasedCentury / 4) +
                        5 * zeroBasedCentury
                )) %
            7;
        return dayOfWeek;
     }   

     function obtainAkanName() {
         let formData = fetchFormData();
         let userBirthDate, userGender, dayOfWeek;
         
         [userGender, ...userBirthDate] = formData;

         if(userGender === "Male") {
             alert("Your Akan Name is: " + maleAkanNames[dayOfWeek]);
         }
         else{
             alert("Your Akan Names is: " + femaleAkanNames[dayOfWeek]);
            }
        return false;
     }
