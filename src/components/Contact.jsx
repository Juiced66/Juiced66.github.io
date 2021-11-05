import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare, faPhone} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    const contactInfo =[
        {
            champs : 'mail',
            valeur : 'julien.decosse30630@gmail.com',
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
            champs : 'git',
            valeur : 'https://github.com/Juiced66/Juiced66',
            link : 'https://github.com/Juiced66/Juiced66',
            icone : <FontAwesomeIcon icon={faGithub}/>
        }

    ]
    
    return (
        <div>
            {
               contactInfo.map((contact) => {
                return (
                    <a href={contact.link}>
                        <div key = {contact.champs} >
                            {contact.icone}
                            {contact.valeur}
                        </div>
                    </a>
                )
               }) 
            }
        </div>
    )
}
