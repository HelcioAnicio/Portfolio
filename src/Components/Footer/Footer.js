import './Footer.modules.scss';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
// import {AiFillExclamationCircle} from 'react-icons/ai'

import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

function Footer() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    // const [proposal, setProposal] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)


    const firebaseApp = {
        apiKey: "AIzaSyB8CF0qYveqNy67HZlHiM3C-vn6iWWMO6U",
        authDomain: "portifolio-7ceba.firebaseapp.com",
        projectId: "portifolio-7ceba",
        storageBucket: "portifolio-7ceba.appspot.com",
        messagingSenderId: "620380278249",
        appId: "1:620380278249:web:20c93bbb7fd61189f10f78",
        measurementId: "G-GNJGLKREKY"
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
            `);
    
            try {
                const user = await addDoc(userCollectionRef, {
                    name,
                    email,
                    telephone,
                    // proposal,
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
            <div className="DivForm">
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

                        {/* <textarea 
                        name="Descrição" 
                        id="Description" 
                        cols="20" 
                        rows="20" 
                        placeholder='Descrição do site (opcional)'>
                        onChange={(e) => setProposal(e.target.value)}
                        </textarea> */}

                        <button type="submit" className='button'>Enviar formulario</button>
                        {/* <input type="submit" className='button' value="Enviar formulario" /> */}

                    </fieldset>
                </form>
                <div className='DivIcons'>
                    <a href="https://wa.me/31991973835">
                        <FaWhatsapp/>
                    </a>
                    <a href="https://www.linkedin.com/in/helcio-anicio/">
                        <FaLinkedin/>
                    </a>
                    <a href="https://www.instagram.com/helcioanicio/">
                        <FaInstagram/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;