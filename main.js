console.log('Hello World!');
const demoUsername ="Tanjila";
const demoPassword = "1234*";

const loginSection = document.getElementById("login-section");

const errorMsg = document.getElementById("error-Msg");


const dashboardSection = document.getElementById("dashboard-section");
const welcomeText = document.getElementById("welcome-text");

const usernameInput = document.getElementById("user-name");

const passwordInput = document.getElementById("user-password");

const loginButton = document.getElementById("login-button");

const logoutButton = document.getElementById("logout-button");

const themeButton = document.getElementById("theme-button");


const savedUser = localStorage.getItem("logedInUser");

loginButton.addEventListener("click", function(){
		const username = usernameInput.value.trim();
		const password = passwordInput.value.trim();
		if (username === demoUsername && password === demoPassword ){
	 localStorage.setItem("logedInUser", username);
			
	errorMsg.classList.add("hidden");
	showDashboard(username);

}else{
			errorMsg.classList.remove("hidden");
		}

});


function showDashboard(username){
	
	loginSection.classList.add("hidden");
		dashboardSection.classList.remove("hidden");
		welcomeText.innerText = "welcome miss. " + username;

}

logoutButton.addEventListener("click", () =>{
	localStorage.removeItem("logedInUser");
	dashboardSection.classList.add("hidden");
	loginSection.classList.remove("hidden");
usernameInput.value ="";
passwordInput.value ="";
});

if (savedUser){
	
	showDashboard(savedUser);
};

themeButton.addEventListener("click", () =>{
	document.body.classList.toggle("dark");

	if (document.body.classList.contains("dark")) {
	localStorage.setItem("theme", "dark");}else{
localStorage.setItem("theme", "light");}

});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark"){
	document.body.classList.add("dark");
}
