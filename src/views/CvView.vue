<template>
    <div class="container">
        <div class="cvImg">
            <img src="../images/cvMe.jpg" alt="">
        </div>
        <div class="tagPref">
            <label for="tag">CV validé</label>
            <input type="checkbox" name="tg1">
            <label for="tag">CV non validé</label>
            <input type="checkbox" name="tg2">
            <label for="tag">Developpeur web</label>
            <input type="checkbox" name="tg3">
            <label for="tag">Technicien</label>
            <input type="checkbox" name="tg4">
            <label for="tag">Coach</label>
            <input type="checkbox" name="tg5">
            <label for="tag">Assistant</label>
            <input type="checkbox" name="tg6">
        </div>
      
    </div>
</template>
<style scoped>
    .container {
        display: flex;
        background-image: url("../images/backgroudP.jpg");
        padding: 30px 10px;
    }
    img {
        width: 49.3%;
 
    }

    .tagPref{
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 15px;
        text-align: center;
        width: 100px;
        height: 650px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: white;
        padding: 30px 10px;
        opacity: 2;
        border: 3px solid black;
    }
   
    
</style>