var players=[];
var markers=["X","O"];
var whoseturn = 0;
players[0] = "Beavis";
players[1] = "Butthead";


function play(clickedDiv)
{
    clickedDiv.onclick = "";
     clickedDiv.innerHTML =  "<span>" + markers[whoseturn] + "</span>" ;
     toggle();

}

function toggle()
{
    if (whoseturn == 0) whoseturn = 1;
    else whoseturn = 0;


}