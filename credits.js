let user = {
plan:"free",
credits:10
};

function useCredit(){
if(user.plan=="free"){
if(user.credits>0){
user.credits--;
}else{
alert("Upgrade to Premium");
}
}
}

function hideAds(){
if(user.plan=="premium"){
document.getElementById("ads").style.display="none";
}
}
