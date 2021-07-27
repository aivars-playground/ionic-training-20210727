import { IonHeader, IonTitle, IonImg, IonToolbar, IonButtons, IonButton} from  '@ionic/react'
import React from 'react'
import './CustomHeader.css'

const CustomHeader: React.FC = () => {
    return (
        <IonHeader class="ion-no-border">
            <IonToolbar class="customToolbarStyle">
                <IonButtons slot="start">
                    <IonButton routerLink="/about">About</IonButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton>Contact</IonButton>
                </IonButtons>
                <IonImg class="logoImg" src="assets/shapes.svg" />
                <IonTitle class="ion-text-center">Ion Demo App</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default CustomHeader