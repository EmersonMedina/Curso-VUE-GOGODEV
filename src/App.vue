<template>
// PARA TABS
 <!-- <ion-app>
  <ion-router-outlet></ion-router-outlet>
 </ion-app> -->

//PARA MENU
 <!-- <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Example</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      I'm the main content
    </ion-content>
 </ion-menu>
 <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button/>
        </ion-buttons>
        <ion-title>Menu Example</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      Tap to open
    </ion-content>
 </ion-page> -->

 <ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>GRID EXAMPLE</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-row>
      <ion-col size="12" class="full">
        Hello World full width
      </ion-col>
      <ion-col size="12" sizeSm="6" class="mid">
        Hello World 50% width
      </ion-col>
    </ion-row>
  </ion-content>
 </ion-page>

</template>

<script setup lang="ts">
  import { IonApp, IonRouterOutlet, IonPage, IonHeader, IonButtons, IonContent, IonTitle, IonMenuButton } from '@ionic/vue'; 
</script>

<style scoped>
  .ion-padding { 
    padding: 1rem;
  }

  .full {
    background-color: aquamarine;
  }

  .mid {
    background-color: blanchedalmond;
  }
</style>