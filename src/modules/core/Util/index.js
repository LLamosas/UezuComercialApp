import {Alert} from 'react-native' 

export const validateEmail=(email)=>{
    
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(email) === false)
    {
    
    return false;
    }
    else {
    return true;
    }
}

export function isEmpty(str) {
    return (!str || 0 === str.length);
}

export function showAlert({msj, type}){
    switch(type){
        case 1:
            return Alert.alert('Success', msj)
        case 2:
            return Alert.alert('Warning', msj)
        case 3:
            return Alert.alert('Error', msj)            

    }
}

export const validatePassword = (password) => {
    if (password.length < 6) {
        return false
    }

    let is_capital_letters = false
    let is_number = false
    let is_special_character = false

    const capital_letters = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    const numbers = '0123456789'

    for (let i = 0; i < password.length; i++) {
        if (capital_letters.indexOf(password.charAt(i), 0) != -1) {
            is_capital_letters = true
        }

        if (numbers.indexOf(password.charAt(i), 0) != -1) {
            is_number = true
        }

        if (password.charAt(i).match(/^[^a-zA-Z0-9]+$/)) {
            is_special_character = true
        }
    }

    return (is_capital_letters && is_number && is_special_character) ? true : false
}