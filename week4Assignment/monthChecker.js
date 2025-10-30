//Katie Greenwood, 10.30.25//
let favMonth = prompt("What's your favorite month?").toLowerCase();
if (favMonth === null){
    alert("Fine, then, keep your secrets.");
} else {
    switch(favMonth){
        case "january":
            confirm("A fresh start.");
            break;
        case "february":
            confirm("A Valentine's Day fan, perhaps?");
            break;
        case "march":
            confirm("I don't really know what happens in March, but I'm happy for you.");
            break;
        case "april":
            confirm("April showers bring May flowers!");
            break;
        case "may":
            confirm("Those April showers better be doing their jobs...");
            break;
        case "june":
            confirm("Good choice. Pride month, AND warmer weather.");
            break;
        case "july":
            confirm("As Jennifer Coolidge once said, 'I could really go for a hot dog.'");
            break;
        case "august":
            confirm("Either your birthday is this month, or you really like school.");
            break;
        case "september":
            confirm("I bet you only said this because it's your birthday month.");
            break;
        case "october":
            confirm("Halloween, baby!");
            break;
        case "november":
            confirm("I can't blame you. Thanksgiving leftovers go crazy.");
            break;
        case "december":
            confirm("You're stronger than I am. I hate the weather, but love the holidays!");
            break;
        default:
            confirm("Try typing that again slower.");
    }
} if (favMonth === "january" || favMonth === "february" || favMonth === "december"){
    alert("You enjoy the winter months!");
} else if (favMonth === "june" || favMonth === "july" || favMonth === "august"){
    alert("You enjoy the summer months!");
} else {
    alert("You prefer milder weather. Respect.");
}