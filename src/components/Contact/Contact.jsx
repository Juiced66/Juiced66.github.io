import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare, faPhone} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    const contactInfo =[
        {
            champs : 'mail',
            valeur : 'Envoyez moi un mail !',
            link:'mailto:julien.decosse30630@gmail.com',
            icone : <FontAwesomeIcon icon={faEnvelopeSquare}/>
        },
        {
            champs : 'Telephone',
            valeur : '0634602903',
            link : 'tel:+33634602903',
            icone : <FontAwesomeIcon icon={faPhone}/>
        },
        {
            champs : 'LinkedIn',
            valeur : 'Julien Decosse',
            link : 'https://www.linkedin.com/in/julien-decosse-83697a211',
            icone : <FontAwesomeIcon icon={faLinkedin}/>
        },

        {
            champs : 'Github',
            valeur : 'Juiced66',
            link : 'https://github.com/Juiced66/Juiced66',
            icone : <FontAwesomeIcon icon={faGithub}/>
        }

    ]
    
    return (
        <>
            {
               contactInfo.map((contact) => {
                return (
                    <a href={contact.link}  key = {contact.champs}>
                        <div >
                            {contact.icone}
                            {contact.valeur}
                        </div>
                    </a>
                )
               }) 
            }
        </>
    )
}
