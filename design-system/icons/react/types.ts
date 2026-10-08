import type { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  /** Ancho y alto. Acepta un número (px) o cualquier medida de CSS, por
   *  ejemplo un token: size="var(--icon-size-md)". */
  size?: number | string;
  /** Texto para lectores de pantalla. Sin title el ícono es decorativo y
   *  queda oculto para ellos. */
  title?: string;
};
