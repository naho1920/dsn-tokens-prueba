import "./button.css";
import { CheckIcon, ChevronRightIcon } from "../../icons/react";

/** Tamaño del ícono (px) en cada tamaño del componente. */
const ICON_SIZE = { "sm": 13, "md": 16, "lg": 20 } as const;

export type ButtonProps = {
  /** Tamaño */
  size?: "sm" | "md" | "lg";
  /** Estilo */
  variant?: "solid" | "outline" | "ghost";
  /** Ícono */
  icon?: "none" | "leading" | "trailing" | "both" | "only";
  /** Texto */
  label?: string;
  disabled?: boolean;
};

export function Button({ size = "md", variant = "solid", icon = "none", label = "Button", disabled = false }: ButtonProps) {
  return (
    <button className="button" data-size={size} data-variant={variant} data-icon={icon} disabled={disabled} aria-label={icon === "only" ? label : undefined} type="button">
      {(icon !== "none" && icon !== "trailing") && (
        <span className="button__leading">
          <CheckIcon size={ICON_SIZE[size]} />
        </span>
      )}
      {icon !== "only" && label}
      {(icon === "trailing" || icon === "both") && (
        <span className="button__trailing">
          <ChevronRightIcon size={ICON_SIZE[size]} />
        </span>
      )}
    </button>
  );
}