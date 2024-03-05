<template>
 <ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>Capacitor Plugins</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <img :src="imageURL"/>
    <button @click="makePhoto">Take Photo</button>
  </ion-content>
 </ion-page>

</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue';
  import { Camera, CameraResultType } from "@capacitor/camera"
  import { ref } from "vue";

  const imageURL = ref()

  const makePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 80, 
      allowEditing: true, 
      resultType: CameraResultType.Uri
    }); 

    imageURL.value = image.webPath;
  }
</script>

<style scoped>
  image {
    width: 80vw;
    max-height: 60vh;
  }
</style>