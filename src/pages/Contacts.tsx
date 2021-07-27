import { IonAlert, IonItemDivider, IonLabel, IonTextarea, IonList, IonItem, IonInput, IonContent, IonFooter, IonImg, IonPage, IonHeader, IonButtons, IonBackButton, IonToolbar, IonTitle } from '@ionic/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Contacts: React.FC = () => {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [message, setMessage] = useState<string>()
    const [messageAlert, showMessageAlert] = useState<boolean>(false)

    let history = useHistory()

    const sendMessage = () => {
        if (!name || !email || !message) {
            showMessageAlert(true)
        } else {
            console.log("zzz", name, email, message)
            history.push('/custom')
        }
    }

    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle class="ion-title-center">Contact Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonAlert
                    isOpen={messageAlert}
                    onDidDismiss={() => showMessageAlert(false)}
                    header={'error'}
                    subHeader={'please fix issues'}
                    message={'Name, Email, or Message is empty'}
                    buttons={['OK']}
                />
                <IonList>
                    <IonItem>
                        <IonInput value={name} placeholder='Name'
                            onIonChange={e => setName(e.detail.value!)} />
                    </IonItem>
                    <IonItemDivider />
                    <IonItem>
                        <IonInput value={email} placeholder='Email'
                            onIonChange={e => setEmail(e.detail.value!)} />
                    </IonItem>
                    <IonItemDivider />
                    <IonItem>
                        <IonTextarea rows={15} value={message} placeholder='Message'
                            onIonChange={e => setMessage(e.detail.value!)} />
                    </IonItem>
                    <IonItemDivider />

                    <IonItem button onClick={e => { sendMessage() }}>
                        <IonLabel class="ion-text-center">
                            Send
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Contacts;