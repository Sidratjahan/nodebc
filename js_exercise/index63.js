// Create a new index63.js file
// Define year variable and assign a number between 2006 and 2017
let year = 2015;

// Define champion variable and assing a value between 2006 and 2017


// Show the following ouptup depending the selected year: %champion% was the %year% NHL Champion
switch(year){
    case 2006:
    message = `Carolina Hurricanes was the ${year} NHL Champion`
    break;

    case 2007:
    message = `Anaheim Ducks was the ${year} NHL Champion`
    break;

    case 2008:
    message = `Detroit Red Wings was the ${year} NHL Champion`
    break;

    case 2009:
    message = `Pittsburgh Penguinas was the ${year} NHL Champion`
    break;

    case 2010:
    message = `Chicago Blackhawks was the ${year} NHL Champion`
    break;

    case 2011:
    message = `Boston Bruins was the ${year} NHL Champion`
    break;

    case 2012:
    message = `Los Angeles Kings was the ${year} NHL Champion`
    break;

    case 2013:
    message = `Chicago Blackhawks was the ${year} NHL Champion`
    break;

    case 2014:
    message = ` Los Angeles Kings was the ${year} NHL Champion`
    break;

    case 2015:
    message = `Chicago Blackhawks was the ${year} NHL Champion`
    break;

    case 2016:
    message = `Pittsburgh Penguins was the ${year} NHL Champion`
    break;

    case 2017:
    message = `Pittsburgh Penguins was the ${year} NHL Champion`
    break;

    default:
    message = "Sorry, please try a differnt year"
}

console.log(message);
// If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
// Use a switch statement to check for the selected year value `` 2017 -  2016 -  2015 -  2014 -  2013 -  2012 -  2011 -  2010 -  2009 -  2008 -  2007 -  2006 - Carolina Hurricanes
// * Try all the posible cases/scenarios (even the error message) by changing the year value
