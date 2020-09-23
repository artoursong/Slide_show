window.onload = function() 
{
    var links = document.getElementsByTagName("a");
    var imgarray = [];

    var i = 1;

    for(let item of links)
    {
        let img = new Image();
        img.src = item.href;
        img.name = "hinh" + i; 
        i++;
        imgarray.push(img);
    }
    var count = 0
    myVar = setInterval(function(){
        count = ++count;

        var set = count%2;
        document.getElementById("img_show").src = imgarray[set].src;
        document.getElementById("img_name").innerHTML = imgarray[set].name;
    }, 2000);

}
