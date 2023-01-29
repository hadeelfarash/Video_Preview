var vid = document.getElementById("myVideo"); 
var vid2 = document.getElementById("myVideo2"); 

var vid3 = document.getElementById("myVideo3"); 

var vid4 = document.getElementById("myVideo4"); 


function playVid() { 
    vid.play(); 
    vid2.play(); 

    vid3.play(); 

    vid4.play(); 

} 

function pauseVid() { 
    vid.pause();
    vid2.pause(); 
    vid3.pause(); 
    vid4.pause(); 
}



function mutedVid(){
    vid.muted();
    vid2.muted();
    vid3.muted();
    vid4.muted();

}