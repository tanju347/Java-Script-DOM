const title = document.getElementById("title");

const description = document.getElementById("desc");
const changeBtn = document.getElementById("change-button");


changeBtn.addEventListener("click",function(){
	title.textContent= "Amra prothombarer moto event listen kora shikhlam";
		description.textContent= "You ar seeing this because you have clicked the button";
		Console.log("button clicked");
});
const themeButton = document. queryselector(" #theme-button");
themeButton.addEventListener("click",function(){
	document. body.classlist.add("dark")})
const themeButton = document. queryselector(" #theme-button");
themeButton.addEventListener("click",function(){
	document. body.classlist.remove("dark")})
