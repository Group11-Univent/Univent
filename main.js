let featurenum = 1;
displayfeature(featurenum);

function changefeature(num)
{
    featurenum+=1;
    displayfeatures(featurenum);
}

function currentfeature(n)
{
    displayfeature(featurenum=n)
}

function displayfeature(num)
{
    let i;
    let slides = document.getElementsByClassName("features slide");
    let dots = document.getElementsByClassName("dot");

    // let descs = document.getElementsByClassName("featuredescription");

    if (num > slides.length)
    {
        index = 1;
    }
    if (num <1)
    {
        index = slides.length;
    }
    
    for (i=0; i<slides.length; i++)
    {
        slides.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index-1].style.display ="block";
    dots[slideIndex-1].className += " active";


}

// const feature_titles = ["Live Player Stats",
//     "Watch Live Game Footage",
//     "Placeholder2"];

// // let current_feature_title = feature_titles[0];

// const feature_desc = ["Stay in the know while you get ready for the big game! Our innovative Live Player Stat Feature provides real-time statistics and insights for players participating in the events you're interested in. As you browse our ticket options, you can track key metrics like points scored, assists, rebounds, and more, ensuring you’re fully informed before you make your purchase.\n\nWith easy-to-read visuals and up-to-the-minute updates, this feature helps you make the best choice for which games to attend. Whether you're a dedicated fan or a casual viewer, our Live Player Stat Feature enhances your event experience, making it more engaging and interactive. Get your tickets now and elevate your game-day excitement!",
//     "Unlock an immersive viewing experience with our Watch Live Game Footage Feature! Purchase your tickets for your favorite events, and gain exclusive access to live streaming of the games directly from our platform. Feel the adrenaline as you catch all the action, key plays, and electrifying moments in real time.\n\nThis feature ensures that your investment in tickets enhances your experience, allowing you to stay connected to the excitement whether you're at the venue or watching from home. Don't miss out on any thrilling highlights—buy your tickets now and dive into the game with live coverage just for you!",
//     "Placeholder3"];

// let current_feature_desc = feature_desc[0];

// const ScrollFeatures = function(current_list)
// {
//     let current_feature_num = 
//     document.getElementById("featuretitle").textContent = 
// }