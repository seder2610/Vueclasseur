<template>
    <div>
      <div class="tags">
        <h2 id="logo">LOGO</h2>
        <div class="validation">
          <label for="validé">Tous</label>
          <input type="radio" name="validation" id="validation">
          <label for="validé">CV validé</label>
          <input type="radio" name="validation" id="validation">
          <label for="validé">CV non validé</label>
          <input type="radio" name="validation" id="validation">
        </div>
        <div class="taglist">
          <div class="simple">
            <label for="t1">Nom</label>
            <input type="checkbox" name="t1" id="t1">
            <label for="t2">Date d'envoi</label>
            <input type="checkbox" name="t2" id="t2">
          </div>
          <h2 id="pro">Profession</h2>
          <div class="Profession">        
            <label for="t3">Developpeur Web</label>
            <input type="checkbox" name="t3" id="t3">
            <label for="t4">Technicien</label>
            <input type="checkbox" name="t4" id="t4">
            <label for="t5">Coach</label>
            <input type="checkbox" name="t5" id="t5">
            <label for="t6">Assistant</label>
            <input type="checkbox" name="t6" id="t6">
          </div>    
        </div>
      </div>
    </div>
</template>
<style scoped>
  .tags{
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 100%;
    height: 1290px;
    background-color: rgb(194, 196, 215);
  }

  #logo{
    height: 118px;
    color: rgb(204, 204, 230);
    font-size: 30px;
    letter-spacing: 4px;
    padding: 30px 10PX ;
    background-color: rgb(5, 7, 122);
    text-align: center;
  }
  .validation{
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 3px solid rgb(5, 7, 122);
  }

  .simple{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 4px 5px;
    font-size: 20px;
  }

  #pro{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    border: 5px solid rgb(5, 7, 122);
    text-align: center;
  }
  .Profession{
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    font-size: 20px;
    padding: 4px 5px;
  }



</style>