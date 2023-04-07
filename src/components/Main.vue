<script setup>
import { ref, defineProps, watch } from "vue";
import { useRouter } from "vue-router";
import cvMe from "../images/cvMe.jpg";

const images = ref([
  {
    url: cvMe,
    caption: "cvMe1"
  },
  {
    url: cvMe,
    caption: "cvMe2"
  },
  {
    url: cvMe,
    caption: "cvMe3"
  },
  {
    url: cvMe,
    caption: "cvMe4"
  },
  {
    url: cvMe,
    caption: "cvMe5"
  },
  {
    url: cvMe,
    caption: "cvMe6"
  }
]);

const router = useRouter();
const { Cv } = defineProps(["Cv"]);

const navigateToCv = () => {
  router.push(`/Cv`);
};

const filter = (array, predicate) => {
  return array.filter(item => predicate(item));
};

const search = ref("");
watch(search, () => {
  images.value = filter(images.value, image =>
    image.caption.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>





<template>
    <div >
        <div class="main">
            
            <div class="search"> 
   
                <input v-model.trim="search" type="text" placeholder="">
                <button>
                 <font-awesome-icon icon="fa-solid fa-magnifying-glass" />        
                </button>
            </div>
    
            <div class="list-CV">
            <div class="image-grid" @click="navigateToCv">
                <div v-for="image in images" :key="image.id" class="image-container">
                <img :src="image.url" alt="Image"/>
                <div class="image-caption">{{ image.caption }}</div>
        </div>
     </div>
        
  </div>
        </div>
    </div>
</template>
<style scoped>
    main{
        display:flex;          
        width: 100%;
       
    }

    .search{
        background-image: url("../images/backgroudP.jpg");
        height: 118px;
        display: flex;
        align-items: center;
        justify-content: center;
       
    }
    .search input {
        width: 50%;

    }

    .list-CV{
        background-image: url("../images/backgroudP.jpg");
        padding: 30px 10px;
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 85%;
        height: auto;
    }

    .image-caption {
         margin-top: 0.5rem;
         color: white;
    }
    
  
  
  


</style>