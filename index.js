let passwordStoredInDB=''

let signupInputPasswordField =document.getElementById('sign-up-input')
const PasswordStrength=document.getElementById("passwordstrength")
let signUpValid = document.getElementById('sign-up-Valid')
let loginInputPassword =document.getElementById('login-input')
let loginvalid =document.getElementById('login-valid')
let loginInvalid =document.getElementById('login-invalid')
const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
  }
  
  const encode = (inputString) => {
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = inputString.split("")
    let encodedArr = codeArr.map(codeArrChar => {
      let index = lookupValues.findIndex((element) => element === codeArrChar)
      return lookupKeys[index]
    })
    return encodedArr.join("")
  }
  
  const decode = (encodedStr) => {
    const codeArr = encodedStr.split("")
    let decodedArr = codeArr.map(codeArrChar => lookup[codeArrChar])
    return decodedArr.join("")
  }
const checkPasswordStrength =() =>{
if(signupInputPasswordField.value.length<5){
  PasswordStrength.style.display ='block'
  PasswordStrength.innerText='weak'
  PasswordStrength.style.color='red'
}
else if(signupInputPasswordField.value.length<8){
  PasswordStrength.style.display ='block'
  PasswordStrength.innerText ='moderate'
  PasswordStrength.style.color='orange'
}else {
  PasswordStrength.style.display ='block'
  PasswordStrength.innerText='strong'
  PasswordStrength.style.color='green'
}
}

const signUp =()=>{
let inputPassword =signupInputPasswordField.value
passwordStoredInDB = encode(inputPassword)
//signUpValid.style.display = 'block' 
signUpValid.style.display = 'block'
console.log(passwordStoredInDB)
}
const logIn =() =>{
    let inputPassword = loginInputPassword.value
    if(inputPassword === decode(passwordStoredInDB)){
    loginvalid.style.display ='block'
    loginInvalid.style.display ='none'
}
    else{
        loginInvalid.style.display='block'
        loginvalid.style.display='none'
    }
    
}

