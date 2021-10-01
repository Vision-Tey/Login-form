//Defining functions
function formValidation() {
    var first = document.loginfm.firstname; 
    var second = document.loginfm.secondname;
    var tele = document.loginfm.tele;
    var mail = document.loginfm.Email;
    var age = document.loginfm.Age;
    var origin = document.loginfm.Country

    if (allLetter(first)){
    }
    if (allLetters(second)){
    }
    if (allNumber(tele)){
    }
    if (allEmail(mail)){
    }
    if (allNumbers(age)){
    }
    if (countryselect(origin)){
    }
    return false;
   
}

//Defining method allLetter with parameter first
function allLetter(first){
    var letters = /^[A-Za-z]+$/;
    if (first.value.match(letters)){
        return true;
    } else {
        alert('first name must be characters');
        return false;
    }

}

//Defining method allLetter with parameter second
function allLetters(second){
    var letters = /^[A-Za-z]+$/;
    if (second.value.match(letters)){
        return true;
    } else {
        alert('Second name must be characters');
        return false;
    }

}

//Defining method allNumber with parameter tete
function allNumber(tele){
    var numbers = /^\+[1-9]{1}[0-9]{3,14}$/;
    if (tele.value.match(numbers)){
        return true;
    } else {
        alert('Does not match telephone format');
        return false;
    }
}

//Defining method allEmail with parameter mail
function allEmail(mail){
    var Emails = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (mail.value.match(Emails)){
        return true;
    }else {
        alert('Wrong email format');
        return false;
    }
}

//Defining method allNumber with parameter age
// function allNumbers(age){
//     var numbers = /^\+[1-9]{1}[0-9]{3,14}$/;
//     if (age.value.match(numbers)){
//         return true;
//     } else {
//         alert('Does not match telephone format');
//         return false;
//     }
// }

//Defining method countryselect with parameter origin
function countryselect(origin){
    if (origin.value == 'Default'){
        alert('Please select your country');
        return false;

    }else{
        return true;
    }
}