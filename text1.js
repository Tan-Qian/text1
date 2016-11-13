var curIndex=0; 
var timeInterval=10000;
var arr=new Array(6);
 arr[0]="1.jpg";
 arr[1]='2.jpg'; 
 arr[2]="3.jpg"; 
 arr[3]="4.jpg"; 
 arr[4]="5.jpg"; 
 arr[5]="6.jpg";
setInterval(changeImg,timeInterval); 
    function changeImg() 
    { 
    var obj=document.getElementById("obj");     
    if (curIndex==arr.length-1)      
    { 
        curIndex=0;     
    }     
    else     
        {
        curIndex+=1;  
          
    } 
     
   obj .src=arr[curIndex];
    
     } 