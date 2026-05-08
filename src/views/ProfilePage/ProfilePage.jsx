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
        return <p>Sección Mi Perfil</p>;
      case "direcciones":
        return <p>Sección Direcciones</p>;
      case "pagos":
        return <p>Sección Métodos de Pago</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <ProfileSidebar active={section} onChange={setSection} />
        <div>{renderSection()}</div>
      </div>
    </div>
  );
}
