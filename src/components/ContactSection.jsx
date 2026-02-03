import { Linkedin, Github, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mwvqbqjy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por tu mensaje. Te responderé pronto.",
          variant: "success",
        });
        e.target.reset();
      } else {
        toast({
          title: "Error al enviar",
          description: "Intenta nuevamente más tarde.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error de red",
        description: "Revisa tu conexión e intenta otra vez.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-5 border-top">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">
          Ponte en <span className="text-primary">Contacto</span>
        </h2>
        <p className="text-center text-muted mb-5">
          ¿Tienes un proyecto o una colaboración en mente? Estoy siempre abierto
          a nuevas oportunidades.
        </p>

        <div className="row g-5">
          {/* Información de contacto */}
          <div className="col-md-5">
            <h3 className="h4 fw-semibold mb-4">Información de Contacto</h3>

            <div className="d-flex align-items-start mb-4">
              <div className="p-2 bg-primary bg-opacity-10 rounded-circle me-3">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h6 className="mb-1">Email</h6>
                <a
                  href="mailto:arquitectoikerluna@gmail.com"
                  className="text-muted text-decoration-none"
                >
                  arquitectoikerluna@gmail.com
                </a>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div className="p-2 bg-primary bg-opacity-10 rounded-circle me-3">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h6 className="mb-1">Teléfono</h6>
                <a
                  href="tel:+50663613101"
                  className="text-muted text-decoration-none"
                >
                  +506 6361 3101
                </a>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div className="p-2 bg-primary bg-opacity-10 rounded-circle me-3">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h6 className="mb-1">Ubicación</h6>
                <p className="text-muted mb-0">San José, Costa Rica</p>
              </div>
            </div>

            <h6 className="fw-semibold mt-5 mb-3">Conecta conmigo</h6>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/iker-l-05484b80/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/iluna007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <Github />
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="h4 fw-semibold mb-4">Enviar un mensaje</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-control"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-control"
                      placeholder="tucorreo@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="form-control"
                      placeholder="Hola, me gustaría hablar sobre..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
