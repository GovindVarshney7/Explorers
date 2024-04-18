*{
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
}

html,body{
    height: 100%;
    width: 100%;
    overflow: hidden;
}
#main{
    height:100%;
    width: 100%;
}
#up{
    height: 10%;
    width: 100%;  
    display: flex;
    letter-spacing: 1px;
}
#upLeft{
    margin-left: 5vw;
    margin-top:  25px;
    font-size: 25px;
}
.ri-line-chart-fill{
    margin-top:  33px;
    font-size: 20px;
}
.upMiddle{
    margin-right: 30px;
    margin-top:  25px;
}
#upMiddleA{
    margin-left: 40%;
}
#upRight{
    height: 30px;
    width: 30px;
    margin-left: 12%;
    margin-top:  17px;
    border: solid 2px;
    border-radius: 15px;
    text-align: center;

}
#upRight h3{
    position: relative;
    top: 10%;
}
#middleLeft{
    height: 20%;
    width: 40%;
    position: relative;
    top: 40%;
    left: -13%;
    display: flex;
    transform: rotate(-90deg);
}
#middleLeft h1{
    position: absolute;
    font-size: 100px;
    right: 17%;
}
#middleLeft #midddleLeftLine{
    height: 2px;
    width: 55%;
    position: absolute;
    background-color: black;   
    bottom: 50%;
}
#middleMiddleImg{
    height: 85%;
    width: 30%;
    position: absolute;
    left: 45%;
    top: 13%;
    background-image: url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    background-size: cover;
    background-position: right;

}
#middleMiddle1{
    height: 80%;
    width: 20%;
    position: absolute;
    top: 20%;
    left: 25%;
    padding: 10px;
}
#middleMiddle2{
    position: relative;
    width: 320px;
    height:40%;
    font-size:20px;
}
#middleMiddle2 h1{
    overflow-y:hidden;
    transition: all cubic-bezier(0.19, 1, 0.22, 1);
}
#middleMiddle1 h4{
    margin-top: 15px;
    margin-bottom: 100px;
    
    text-align: justify;
}
#middleMiddle1 button{

    width: 100%;
    height: 8%;
    border: none;
    background-color: black;
    color: aliceblue;
}
#middleRight1{
    position: absolute;
    left: 76%;
    width: 10%;
    height: 70%;
    padding: 20px;
}
#middleRight1Img{
    height: 57px;
    width: 60px;
    background-color: black;
    color: aliceblue;
    border-radius:30px;
    position: relative;
    margin-bottom: 30px;

}
.ri-eye-line{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
#middleRight1 h4{
    margin-bottom: 10px;
}
#middleRight1 h3{  
    position: absolute;
    bottom: 5%;
    left: 40%;
    transform: translate(-50%,-50%);
    letter-spacing: 12px;
}
#middleRight2{
    position: absolute;
    top: 45%;
    right:-7%;
    width: 25%;
    height: 10%;
    transform: translate(-50%,-50%);
    transform: rotate(90deg);
    display: flex;
}
.middleRight2A{
    height: 2px;
    width: 30%;
    position: absolute;
    background-color: black; 
    bottom: 50%; 
}
#A{
    left: 0%;    
}
#B{
    right: 0%;    
}
#middleRight2 h2{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}#loader{
    height: 100vw;
    width: 100vw;
    position: absolute;
    background-color: black;
    
    z-index: 9;
    color: white;
}
#loader h1{
    position: absolute;
    text-align: center;
    top: 3%;
    left:3%;
    font-weight: 300;
}
#loaderDiv{
    height: 100vh;
    width: 30%;
    font-size: 4vw;
    
    position: absolute;
    right: 0;
    padding: 2%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.loaderClass{
    font-weight: 600;
    margin-bottom: 2vw;
    overflow: hidden;
}
