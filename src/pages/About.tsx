import { IonContent, IonFooter, IonImg, IonPage, IonHeader, IonButtons, IonBackButton,IonToolbar,IonTitle } from '@ionic/react'
import React from 'react'

const About: React.FC = () => {
    return(
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle class="ion-title-center">About Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonImg src="assets/shapes.svg" />
            <IonContent class="ion-padding">
                <h1>Hi</h1>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonTitle class="ion-text-center">AAAAAAAAAAA</IonTitle>
                    <IonTitle class="ion-text-center" size="small">BBB CCC</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default About;