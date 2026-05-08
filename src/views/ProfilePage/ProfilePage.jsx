import { useState } from "react";
import ProfileSidebar from "../../components/ProfileComponents/ProfileSidebar";
import MyOrders from "../../components/ProfileComponents/MyOrders";

export default function ProfilePage() {
  const [section, setSection] = useState("pedidos");

  const renderSection = () => {
    switch (section) {
      case "pedidos":
        return <MyOrders userId={1} />;
      case "perfil":
        return <div className="surface-panel px-6 py-8"><h2 className="font-serif text-4xl font-semibold">Mi Perfil</h2><p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">Esta sección puede evolucionar con datos personales, preferencias de lectura y comunicación.</p></div>;
      case "direcciones":
        return <div className="surface-panel px-6 py-8"><h2 className="font-serif text-4xl font-semibold">Direcciones</h2><p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">Se reserva un espacio visual claro para gestionar domicilios sin romper la consistencia del panel.</p></div>;
      case "pagos":
        return <div className="surface-panel px-6 py-8"><h2 className="font-serif text-4xl font-semibold">Métodos de Pago</h2><p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">El estilo mantiene la misma lógica que checkout para reducir esfuerzo cognitivo al usuario.</p></div>;
      default:
        return null;
    }
  };

  return (
    <div className="page-shell page-section space-y-8">
      <section className="surface-panel px-6 py-8 sm:px-8 lg:px-10">
        <p className="section-kicker">Cuenta</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold leading-none sm:text-6xl">Tu biblioteca personal</h1>
        <p className="section-copy">Perfil, órdenes y datos complementarios dentro de un panel único y visualmente consistente con el resto del sitio.</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <ProfileSidebar active={section} onChange={setSection} />
        <div>{renderSection()}</div>
      </div>
    </div>
  );
}
