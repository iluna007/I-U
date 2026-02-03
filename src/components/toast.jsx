import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

export const Toast = ({ variant = "success", title, description, onClose }) => {
  const variantClass = {
    success: "alert alert-success border-success",
    destructive: "alert alert-danger border-danger",
    info: "alert alert-info border-info",
    warning: "alert alert-warning border-warning",
  }[variant] || "alert alert-secondary";

  return (
    <div
      className={cn(
        variantClass,
        "d-flex align-items-start justify-content-between fade show shadow-sm"
      )}
      role="alert"
      style={{
        maxWidth: "420px",
        marginBottom: "1rem",
        borderWidth: "1px",
      }}
    >
      <div>
        {title && <h6 className="mb-1 fw-bold">{title}</h6>}
        {description && <p className="mb-0 small">{description}</p>}
      </div>
      <button
        type="button"
        className="btn-close ms-3"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={14} />
      </button>
    </div>
  );
};
