import React from "react";

const Contact = () => {
  const whatsappNumber = "+5491145507997"; // Reemplaza con tu número de WhatsApp
  const emailAddress = "eveeramirez92@gmail.com"; // Reemplaza con tu correo electrónico

  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>
        ¡Estoy disponible para charlar y responder a tus consultas! Puedes
        contactarme a través de los siguientes medios:
      </p>
      <ul>
        <li>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar mensaje por WhatsApp
          </a>
        </li>
        <li>
          <a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar correo electrónico
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;

/*import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <label>
          Nombre:
          <h2>Evelyn Ramirez</h2>
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;*/
