let featurenum = 1;

function changefeature(num)
{

    if (feature_titles.length-1 == featurenum && num>0)
    {

    }
    else if (featurenum == 0 && num<0)
    {

    }
    else
    {
        featurenum = featurenum+num
    }
}

function displayfeature(num)
{
    let titles = document.getElementsByClassName("featuretitle");
    let descs = document.getElementsByClassName("featuredescription");
    
    for (i=0; i<titles.length; i++)
    {
        
    }
}

const feature_titles = ["Placeholder1","Placeholder2","Placeholder2"];

// let current_feature_title = feature_titles[0];

const feature_desc = ["Placeholder1","Placeholder2","Placeholder2"];

// let current_feature_desc = feature_desc[0];

// const ScrollFeatures = function(current_list)
// {
//     let current_feature_num = 
//     document.getElementById("featuretitle").textContent = 
// }