const passwordBox=document.getElementById("password");
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="!@#$%^&*{}|><?/~";
const allchars=upperCase+lowerCase+number+symbols;
const genpass=document.querySelector("button");
genpass.addEventListener('click',generatePassword);
function generatePassword()
{
    let password="";
    // password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    // password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // password+=number[Math.floor(Math.random()*number.length)];
    // password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(length>password.length)
    {
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordBox.value=password;

}
const passcopy=document.querySelector("img");
passcopy.addEventListener('click',copyPassword);
function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");
}


