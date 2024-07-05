import React, { useState } from "react";
import vg from '../assets/images/vg.png'
import { toast } from 'react-hot-toast'
import { motion } from "framer-motion";
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault()
    setDisableBtn(true)
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message
      })
      setName("")
      setEmail("")
      setMessage("")
      toast.success('Message Sent')
      setDisableBtn(false)
    } catch (error) {
      toast.error('Error')
      console.log(error);
      setDisableBtn(false)
    }
  }


  const animations = {
    form: {
      initial: {
        x: '-100%',
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      }
    },


    button: {
      initial: {
        y: '-100%',
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      }
    },
  }



  return (
    <div id="contact" className="flex bg-gray-950 h-[90vh] ">
      <section className="md:w-[50%] w-full flex justify-center items-center">
        <motion.form
          className="flex flex-col w-[60%] h-[70%]  pt-32  gap-5"
          onSubmit={submitHandler}
          {...animations.form}
        >
          <h2 className="text-4xl uppercase mb-5 text-center font-semibold tracking-wider">Contact Me</h2>
          <input
            className="px-3 py-2 text-lg text-black rounded"
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-3 py-2 text-lg text-black rounded"
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="px-3 py-2 text-lg text-black rounded"
            type="text"
            placeholder="Enter Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
            className={`bg-color-gradient text-white px-3 py-2 rounded font-semibold tracking-wider active:scale-95 mt-5 ${disableBtn ? "cursor-not-allowed bg-gray-400 text-black" : ""}`}
            type="submit"
            onSubmit={() => setName('')}
            disabled={disableBtn}
            {...animations.button}
          >
            SEND
          </motion.button>
        </motion.form>
      </section>

      <div className="w-[50%] justify-center items-center hidden md:flex bg-gray-900">
        <img className="w-[60%] h-[70%] object-contain drop-shadow-2xl hue-rotate-15 animate-imgUp" src={vg} alt="image" />
      </div>

    </div>
  )
}

export default Contact;
