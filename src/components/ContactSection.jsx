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
    <section id="contact" className="border-t border-neutral-200 py-12 md:py-16 dark:border-neutral-700">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Ponte en <span className="text-neutral-500 dark:text-neutral-400">Contacto</span>
        </h2>
        <p className="mb-10 text-center text-neutral-600 dark:text-neutral-400">
          ¿Tienes un proyecto o una colaboración en mente? Estoy siempre abierto
          a nuevas oportunidades.
        </p>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Información de Contacto</h3>

            <div className="group mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors duration-200 group-hover:bg-neutral-100 dark:bg-neutral-600/30 dark:text-neutral-300 dark:group-hover:bg-neutral-800/30">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Email</h4>
                <a
                  href="mailto:arquitectoikerluna@gmail.com"
                  className="text-neutral-600 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  arquitectoikerluna@gmail.com
                </a>
              </div>
            </div>

            <div className="group mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors duration-200 group-hover:bg-neutral-100 dark:bg-neutral-600/30 dark:text-neutral-300 dark:group-hover:bg-neutral-800/30">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Teléfono</h4>
                <a
                  href="tel:+50663613101"
                  className="text-neutral-600 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  +506 6361 3101
                </a>
              </div>
            </div>

            <div className="group mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors duration-200 group-hover:bg-neutral-100 dark:bg-neutral-600/30 dark:text-neutral-300 dark:group-hover:bg-neutral-800/30">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Ubicación</h4>
                <p className="text-neutral-600 dark:text-neutral-400">San José, Costa Rica</p>
              </div>
            </div>

            <h4 className="mb-3 mt-8 font-semibold">Conecta conmigo</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/iker-l-05484b80/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg p-2 text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800/30 dark:hover:text-neutral-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/iluna007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg p-2 text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800/30 dark:hover:text-neutral-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-neutral-300 bg-neutral-100/80 p-6 shadow-sm transition-colors duration-200 hover:bg-neutral-100 focus-within:border-neutral-500 focus-within:ring-2 focus-within:ring-neutral-500/30 dark:border-neutral-700 dark:bg-neutral-900/50 dark:hover:bg-neutral-800/30">
              <h3 className="mb-4 text-lg font-semibold">Enviar un mensaje</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 transition-all duration-200 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/40 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 transition-all duration-200 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/40 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                    placeholder="tucorreo@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/40 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                    placeholder="Hola, me gustaría hablar sobre..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-neutral-700 px-4 py-3 font-medium text-neutral-100 shadow-lg transition-colors duration-200 hover:bg-neutral-600 active:bg-neutral-800 disabled:opacity-50 dark:bg-neutral-600 dark:hover:bg-neutral-500 dark:active:bg-neutral-700"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
