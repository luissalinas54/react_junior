import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Cargando..." : children}
    </button>

    // <button type="button" className="btn btn-secondary">
    //   Secondary
    // </button>
  );
}

export default Button;
