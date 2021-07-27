import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import CustomHeader from "../components/CustomHeader"
import './Home.css'

const Custom: React.FC = () => {
    return (
      <IonPage>
        <CustomHeader />
        <IonContent>
        </IonContent>
      </IonPage>
    );
  };
  
export default Custom;
  