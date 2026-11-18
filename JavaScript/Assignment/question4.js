/* 

*/
let role = "Admin";
let isLoggedIn = true;
if (!isLoggedIn) {
    console.log("Please log in");
} else if (role === "Admin") {
    console.log("Welcome admin");
} else {
    console.log("Welcome User");
}