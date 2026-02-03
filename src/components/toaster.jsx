import { useToast } from "../hooks/use-toast";
import { Toast } from "../components/ui/toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div
      className="position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1080 }}
    >
      {toasts.map(({ id, title, description, variant }) => (
        <Toast
          key={id}
          title={title}
          description={description}
          variant={variant}
          onClose={() => dismiss(id)}
        />
      ))}
    </div>
  );
}
