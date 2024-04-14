import { useState } from "react";
import { brands, categories, transactionTypes } from "../../const/vehicle";
import { openWhatsappMessageLink } from "../../lib/whatsapp-link";

const VehicleForm = (props) => {
  const [name, setName] = useState("");
  const [transactionType, setTransactionType] = useState(transactionTypes[0]);
  const [category, setCategory] = useState(categories[0]);
  const [brand, setBrand] = useState(brands[0]);
  const [brandsToShow, setBrandsToShow] = useState(brands);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    setBrandsToShow(brands.filter((brand) => brand.categories.includes(value)));
  };

  const generateMessage = () => {
    let message = "Solicitud de vehículo 🚗";
    message += "\n";
    message += "----------------------------";
    message += "\n";
    message += "Nombre: " + name;
    message += "\n";
    message += "Tipo de transacción: " + transactionType;
    message += "\n";
    message += "Tipo de vehículo: " + category;
    message += "\n";
    message += "Marca: " + brand.name;

    return message;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      alert("Debe colocar su nombre para enviar la solicitud.");
      return false;
    }

    const message = generateMessage();
    openWhatsappMessageLink(message);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-12 gap-8"
    >
      <div className="sm:col-span-6">
        <label htmlFor="email" className="block text-xl">
          Nombre y apellido *
        </label>
        <div className="mt-2">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Indicanos tu nombre y apellido"
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-900 shadow-lg"
          ></input>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="email" className="block text-xl">
          Tipo de transacción *
        </label>
        <div className="mt-2">
          <select
            value={transactionType}
            onChange={(event) => setTransactionType(event.target.value)}
            placeholder="Indicanos que tipo de trámite deseas"
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-900 shadow-lg"
          >
            {transactionTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="email" className="block text-xl">
          Tipo de vehículo *
        </label>
        <div className="mt-2">
          <select
            value={category}
            onChange={handleCategoryChange}
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-900 shadow-lg"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="email" className="block text-xl">
          Marca *
        </label>
        <div className="mt-2">
          <select
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-900 shadow-lg"
          >
            {brandsToShow.map((brand) => (
              <option key={brand.name}>{brand.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-12 flex py-5">
        <button type="submit" className="btn-white w-48">
          <span className="relative">Enviar solicitud</span>
        </button>
        <button
          onClick={props.handleCancel}
          className="btn-white-outline w-48 ml-3"
        >
          <span className="relative">Cancelar</span>
        </button>
      </div>
    </form>
  );
};

export default VehicleForm;
