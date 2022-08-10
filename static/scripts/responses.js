function getBotResponse(input) {
    

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Goodbye") {
        return "Talk to you later!";
    } else if (input == "How are you "){
        return "I'm fine";
    } else if(input == "What's your refund policy"){
        return "Contact coustomer care";
    } else if(input == "When are you guys open today"){
        return "10a.m to 9p.m";
    } else if(input == "Where's your store"){
        return "Saltlake sector 5, Kolkata";
    } else if(input == "What is your name"){
        return "Mamba";
    } else if(input == "Track my order"){
        return "Send us your order id";
    } else if(input == "Send me coutomercare number"){
        return "700267895";
    } else if(input == "What is my delivery date"){
        return "Please give me some time";
    }
       
     else {
        return "Try asking something else!";
    }
}