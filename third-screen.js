document.addEventListener("DOMContentLoaded", function () {
    // Function to extract query parameters from the URL
    function getQueryParam(name) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get(name);
    }

    // Extract the user's input (matched pet breed) from the query parameter
    const matchedBreed = getQueryParam("breed");
///German Shepherd / Aries
    if (matchedBreed === "German Shepherd") {
         Petname =  document.querySelector(".TheFrenchBulldog");
         PetImg = document.querySelector(".Ellipse17");
         PetInfo1= document.querySelector(".PetDetails");
         PetInfo2= document.querySelector(".PetDetails2");

        Petname.textContent = "German Shepherd";
        PetImg.src ="./assest/German Shepherd.png";
        PetInfo1.textContent = "Aries individuals are known for their independence and self-reliance. Similarly, German Shepherds are highly intelligent and independent dogs. This mutual independence can lead to a sense of respect and loyalty between the two, as they allow each other space while still being there when needed.";
        PetInfo2.textContent = "Aries individuals tend to have strong leadership qualities and enjoy taking the lead. German Shepherds are highly trainable and thrive when they have a clear leader. This compatibility in leadership roles can result in a harmonious relationship, with the Aries taking the lead in decision-making and training the German Shepherd.";
         document.getElementById("thirdScreenTitle");
        titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
        
     
    } 
    ///Bulldog/ Taurus

    if (matchedBreed === "Bulldog") {
        Petname =  document.querySelector(".TheFrenchBulldog");
        PetImg = document.querySelector(".Ellipse17");
        PetInfo1= document.querySelector(".PetDetails");
        PetInfo2= document.querySelector(".PetDetails2");

       Petname.textContent = "Bulldog";
       PetImg.src ="./assest/Bulldog.png";
       PetInfo1.textContent = "The loyalty of both Bulldogs and Taurus individuals can create a strong and stable bond in their relationship. They are likely to appreciate each other's commitment and enjoy a sense of security and trust";
       PetInfo2.textContent = "The compatibility between Bulldogs and Taurus individuals lies in their shared love for a peaceful and comfortable life. They are likely to enjoy spending quality time together in a cozy and relaxed setting, making them a compatible and harmonious match.";
        document.getElementById("thirdScreenTitle");
       titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
       
    
   } 
///Bulldog/ Taurus

if (matchedBreed === "Bulldog") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Bulldog";
   PetImg.src ="./assest/Bulldog.png";
   PetInfo1.textContent = "The loyalty of both Bulldogs and Taurus individuals can create a strong and stable bond in their relationship. They are likely to appreciate each other's commitment and enjoy a sense of security and trust";
   PetInfo2.textContent = "The compatibility between Bulldogs and Taurus individuals lies in their shared love for a peaceful and comfortable life. They are likely to enjoy spending quality time together in a cozy and relaxed setting, making them a compatible and harmonious match.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 
///Gemini: "Border Collie"
if (matchedBreed === "Border Collie") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Border Collie";
   PetImg.src ="./assest/Border Collie.png";
   PetInfo1.textContent = "The loyalty of both Border Collies and Gemini individuals can create a strong sense of connection and companionship in their relationship. Border Collies' dedication and Gemini's social nature can complement each other well.";
   PetInfo2.textContent = "The compatibility between Border Collies and Gemini individuals lies in their shared need for mental and physical stimulation. They can engage in various activities together, such as agility training, puzzles, and games, which can keep both the dog and the human entertained and fulfilled. Their shared love for learning and adventure can make them a dynamic and compatible duo.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 
/// Cancer: "Cocker Spaniel"
if (matchedBreed === "Cocker Spaniel") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Cocker Spaniel";
   PetImg.src ="./assest/Cocker Spaniel.png";
   PetInfo1.textContent = "The loyalty of both Cocker Spaniels and Cancer individuals can create a warm and supportive relationship. Cocker Spaniels' affectionate nature can provide comfort to Cancer individuals, and Cancer's nurturing tendencies can make the dog feel loved and cared for.";
   PetInfo2.textContent = "The compatibility between Cocker Spaniels and Cancer individuals lies in their shared love for social interaction and companionship. They can enjoy spending quality time together, whether it's going for walks, cuddling on the couch, or simply being there for each other. Their shared need for emotional connection and comfort can make them a harmonious pair.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 
/// Leo: "Golden Retriever",
if (matchedBreed === "Golden Retriever") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Golden Retriever";
   PetImg.src ="./assest/Golden Retriever.png";
   PetInfo1.textContent = "The loyalty of both Golden Retrievers and Leo individuals can lead to a strong and mutually supportive relationship. Golden Retrievers' unwavering devotion can make Leo individuals feel appreciated and admired, while Leo's natural leadership qualities can provide guidance and direction to the dog.";
   PetInfo2.textContent = "The compatibility between Golden Retrievers and Leo individuals lies in their shared love for social interaction and fun. They can engage in activities together, such as outdoor adventures or social gatherings, and thrive in each other's company. Both enjoy the spotlight and can bask in each other's admiration, making them a joyful and harmonious pair.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 

/// Virgo: "Labrador Retriever",

if (matchedBreed === "Labrador Retriever") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Labrador Retriever";
   PetImg.src ="./assest/Labrador Retriever.png";
   PetInfo1.textContent = "The loyalty of both Labrador Retrievers and Virgo individuals can lead to a strong and dependable partnership. Virgo's attention to detail and reliability can complement the Labrador Retriever's eager-to-please nature, creating a relationship built on trust and support.";
   PetInfo2.textContent = "The compatibility between Labrador Retrievers and Virgo individuals can be attributed to their shared practicality and responsibility. They can work together effectively to maintain a well-organized and harmonious household. Labrador Retrievers can bring joy and a playful spirit to Virgo's life, while Virgo can provide structure and care for the dog's needs.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 
///Libra: "Cavalier King Charles Spaniel",
if (matchedBreed === "Cavalier King Charles Spaniel") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Cavalier King Charles Spaniel";
   PetImg.src ="./assest/Cavalier King Charles Spaniel.png";
   PetInfo1.textContent = "The loyalty of both Cavalier King Charles Spaniels and Libra individuals can lead to a close and affectionate partnership. Libra's social and charming personality can create a strong emotional connection with the dog, resulting in a loving and loyal relationship.";
   PetInfo2.textContent = "The compatibility between Cavalier King Charles Spaniels and Libra individuals can be attributed to their shared love for socializing and creating a harmonious environment. They can enjoy social outings together and appreciate the importance of balance and companionship in their lives. The dog's friendly nature can complement Libra's desire for harmonious connections.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 
//Sagittarius: "Siberian Husky"
if (matchedBreed === "Siberian Husky") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Siberian Husky";
   PetImg.src ="./assest/Siberian Husky.png";
   PetInfo1.textContent = "The loyalty of both Siberian Huskies and Sagittarius individuals can lead to a strong and lasting bond. While Sagittarius enjoys exploring new horizons, they can find a loyal and reliable companion in the Husky, who is always there to share in their adventures.";
   PetInfo2.textContent = "The compatibility between Siberian Huskies and Sagittarius individuals lies in their shared love for adventure and exploration. They can make excellent companions for outdoor activities, such as hiking, camping, or simply enjoying the great outdoors together. The Husky's energy and enthusiasm align with Sagittarius' adventurous spirit, creating a dynamic and exciting partnership.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 

// Capricorn: "Rottweiler",

if (matchedBreed === "Rottweiler") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Rottweiler";
   PetImg.src ="./assest/Rottweiler.png";
   PetInfo1.textContent = "The loyalty of both Rottweilers and Capricorn individuals can create a strong and enduring bond. Capricorns appreciate the Rottweiler's steadfast and protective qualities, while Rottweilers find security in Capricorn's responsible and structured approach to life.";
   PetInfo2.textContent = "The compatibility between Rottweilers and Capricorn individuals lies in their shared values of hard work and determination. They both understand the importance of perseverance and commitment to achieve their goals. Rottweilers' protective instincts align with Capricorn's desire for security, making them feel safe and supported.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 
//Aquarius: "Poodle",

if (matchedBreed === "Poodle") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Poodle";
   PetImg.src ="./assest/Poodle.png";
   PetInfo1.textContent = "The loyalty of Poodles is expressed through their desire to understand and connect with their owners on an intellectual level. Aquarius individuals, with their open-minded approach, appreciate the Poodle's adaptability and willingness to explore new ideas and experiences together.";
   PetInfo2.textContent = "The compatibility between Poodles and Aquarius individuals lies in their shared sense of adaptability and curiosity. Poodles' ability to learn and engage in various activities aligns with Aquarius' desire for novelty and intellectual stimulation. Together, they can explore new experiences and activities, fostering a dynamic and enjoyable partnership.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 

//Pisces: "Bichon Frise"
if (matchedBreed === "Bichon Frise") {
    Petname =  document.querySelector(".TheFrenchBulldog");
    PetImg = document.querySelector(".Ellipse17");
    PetInfo1= document.querySelector(".PetDetails");
    PetInfo2= document.querySelector(".PetDetails2");

   Petname.textContent = "Bichon Frise";
   PetImg.src ="./assest/Bichon Frise.png";
   PetInfo1.textContent = "The loyalty of Bichon Frises is expressed through their affectionate behavior and their desire to provide comfort and companionship. Pisces individuals, who have a deep emotional side, can deeply appreciate the Bichon Frise's ability to connect on an emotional level and offer unconditional love.";
   PetInfo2.textContent = "The compatibility between Bichon Frises and Pisces individuals lies in their shared love for social interactions and creating a warm and welcoming atmosphere. Bichon Frises' friendly and approachable nature aligns with Pisces' ability to make connections with others easily. Together, they can create a harmonious and loving environment where both the dog and the individual feel understood and cherished.";
    document.getElementById("thirdScreenTitle");
   titleElement.textContent = `Your Matched Pet Breed: ${matchedBreed}`;
   

} 
});
