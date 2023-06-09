import "./Footer.modules.scss";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {AiFillExclamationCircle} from 'react-icons/ai'

import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

function Footer() {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [telephone, setTelephone] = useState('')
      const [proposal, setProposal] = useState('')
      const [formSubmitted, setFormSubmitted] = useState(false)

      const firebaseApp = {
          apiKey: process.env.REACT_APP_API_KEY,
          authDomain: process.env.REACT_APP_AUTH_DOMAIN,
          projectId: process.env.REACT_APP_PROJECT_ID,
          storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
          appId: process.env.REACT_APP_APP_ID,
          measurementId: process.env.REACT_APPMEASUREMENT_ID,
      };

      const app = initializeApp(firebaseApp);
      // const analytics = getAnalytics(app);
      const db = getFirestore(app);
      const userCollectionRef = collection(db, 'users');

      async function cadastrarUsuario(e) {
          e.preventDefault();
          if (name && email && telephone) {
              console.log(`O Usuário foi cadastrado com os seguintes dados:
                  Name:${name};
                  Email:${email};
                  telephone:${telephone}
                  Proposal:${proposal}
              `);

              try {
                  const user = await addDoc(userCollectionRef, {
                      name,
                      email,
                      telephone,
                      proposal,
                  });

                  console.log("Usuário cadastrado no Firebase:", user.id);
              } catch (error) {
                  console.error("Erro ao cadastrar usuário no Firebase:", error);
              }

          } else {
              setFormSubmitted(true);
          }
      }

  return (
    <>
      <section id="Footer" className="DivForm">
        <div className="DivContainer">
                    <h3>Fale comigo!</h3>
                    <form onSubmit={cadastrarUsuario}>
                        <fieldset>
                            <legend>Formulário</legend>

                            <input  
                            type="text"
                            name="Name"
                            placeholder="Seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className={!name && formSubmitted ? 'messageError' : ''}
                            />
                            {!name && formSubmitted && <div className='Error'><p>Por favor, coloque o nome corretamente.</p></div>}

                            <input  
                            type="email"
                            name="email" 
                            placeholder="meuemail@meuemail.com" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className={!email && formSubmitted ? 'messageError' : 'inputValid'}
                            />
                            {formSubmitted && email === '' && <div className="Error"><p>Por favor, coloque seu email corretamente.</p></div>}
                            
                            <input  
                            type="tel" 
                            name="telephone"
                            minLength={11}
                            placeholder="(99) 99999-9999"
                            onChange={(e) => setTelephone(e.target.value)}
                            value={telephone}
                            className={!telephone && formSubmitted ? 'messageError' : 'inputValid'}
                            />
                            {formSubmitted && telephone === '' && <div className="Error"><p>Por favor, coloque seu celular corretamente.</p></div>}

                            <textarea 
                            name="Descrição" 
                            id="Description" 
                            cols="20" 
                            rows="20" 
                            onChange={(e) => setProposal(e.target.value)}
                            placeholder='Descrição do site (opcional)'>
                            </textarea>

                            <button type="submit" className='button'>Enviar formulario</button>
                        </fieldset>
                    </form> 
                </div>
        <div className="DivIcons">
          <a href="https://wa.me/31991973835">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/helcio-anicio/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/helcioanicio/">
            <FaInstagram />
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
