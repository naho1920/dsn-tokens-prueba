import "./input.css";
import { CloseIcon, SearchIcon } from "../../icons/react";

/** Tamaño del ícono (px) en cada tamaño del componente. */
const ICON_SIZE = { "sm": 13, "md": 16, "lg": 20 } as const;

export type InputProps = {
  /** Tamaño */
  size?: "sm" | "md" | "lg";
  /** Estilo de label */
  labelStyle?: "static" | "floating" | "none";
  /** Ícono */
  icon?: "none" | "leading" | "trailing" | "both";
  /** Texto de ayuda */
  helper?: "none" | "text";
  /** Label */
  label?: string;
  /** Placeholder */
  placeholder?: string;
  disabled?: boolean;
};

export function Input({ size = "md", labelStyle = "static", icon = "none", helper = "none", label = "Etiqueta", placeholder = "Placeholder…", disabled = false }: InputProps) {
  return (
    <div className="input" data-size={size} data-label-style={labelStyle} data-icon={icon} data-helper={helper} aria-disabled={disabled}>
      <span className="input__text">
        {label}
      </span>
      <div className="input__bg">
        {(icon === "leading" || icon === "both") && (
          <span className="input__icon-color">
            <SearchIcon size={ICON_SIZE[size]} />
          </span>
        )}
        <span className="input__placeholder">
          {placeholder}
        </span>
        {(icon === "trailing" || icon === "both") && (
          <span className="input__icon-color-2">
            <CloseIcon size={ICON_SIZE[size]} />
          </span>
        )}
      </div>
    </div>
  );
}