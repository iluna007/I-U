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
    <section id="contact" className="border-t border-neutral-700 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Ponte en <span className="text-blue-400">Contacto</span>
        </h2>
        <p className="mb-10 text-center text-neutral-400">
          ¿Tienes un proyecto o una colaboración en mente? Estoy siempre abierto
          a nuevas oportunidades.
        </p>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Información de Contacto</h3>

            <div className="group mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition-transform duration-200 group-hover:scale-110 group-hover:bg-blue-500/20">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Email</h4>
                <a
                  href="mailto:arquitectoikerluna@gmail.com"
                  className="text-neutral-400 hover:text-neutral-200 hover:underline"
                >
                  arquitectoikerluna@gmail.com
                </a>
              </div>
            </div>

            <div className="group mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition-transform duration-200 group-hover:scale-110 group-hover:bg-blue-500/20">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Teléfono</h4>
                <a
                  href="tel:+50663613101"
                  className="text-neutral-400 hover:text-neutral-200 hover:underline"
                >
                  +506 6361 3101
                </a>
              </div>
            </div>

            <div className="group mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition-transform duration-200 group-hover:scale-110 group-hover:bg-blue-500/20">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Ubicación</h4>
                <p className="text-neutral-400">San José, Costa Rica</p>
              </div>
            </div>

            <h4 className="mb-3 mt-8 font-semibold">Conecta conmigo</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/iker-l-05484b80/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg p-2 text-blue-400 transition-all duration-200 hover:scale-110 hover:bg-blue-500/10 hover:text-blue-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/iluna007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg p-2 text-blue-400 transition-all duration-200 hover:scale-110 hover:bg-blue-500/10 hover:text-blue-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/20 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20">
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
                    className="w-full rounded-md border border-neutral-600 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
                    className="w-full rounded-md border border-neutral-600 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
                    className="w-full resize-y rounded-md border border-neutral-600 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Hola, me gustaría hablar sobre..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-3 font-medium text-white shadow-lg shadow-blue-900/30 transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
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
