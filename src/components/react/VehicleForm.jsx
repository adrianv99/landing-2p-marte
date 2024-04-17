import { useState } from "react";
import { brands, categories, transactionTypes } from "../../const/vehicle";
import { openWhatsappMessageLink } from "../../lib/whatsapp-link";

const VehicleForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
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
    message += "Teléfono: " + phone;

    if (occupation) {
      message += "\n";
      message += "Ocupación: " + occupation;
    }


    if (income) {
      message += "\n";
      message += "Ingresos: RD$" + income;
    }

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
      alert("Debe ingresar su nombre.");
      return false;
    }

    if (!phone) {
      alert("Debe ingresar su número de teléfono.");
      return false;
    }

    if (!termsAccepted) {
      alert("Debe aceptar los términos y condiciones para continuar.");
      return false;
    }

    const message = generateMessage();
    openWhatsappMessageLink(message);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1  sm:grid-cols-12 gap-8"
    >
      <div className="sm:col-span-6">
        <label htmlFor="name" className="block text-md">
          Nombre <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ingresa tu nombre..."
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-600 dark:text-gray-900 shadow-lg"
          ></input>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="phone" className="block text-md">
          Número de teléfono <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <input
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Ingresa tu número de teléfono..."
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-600 dark:text-gray-900 shadow-lg"
          ></input>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="occupation" className="block text-md">
          Ocupación/Trabajo
        </label>
        <div className="mt-2">
          <input
            id="occupation"
            value={occupation}
            onChange={(event) => setOccupation(event.target.value)}
            placeholder="Indicanos a que te dedicas..."
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-600 dark:text-gray-900 shadow-lg"
          ></input>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="income" className="block text-md">
          Ingreso mensual (RD$)
        </label>
        <div className="mt-2">
          <input
            id="income"
            value={income}
            type="number"
            onChange={(event) => setIncome(event.target.value)}
            placeholder="Indicanos cuanto ganas mensualmente..."
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-600 dark:text-gray-900 shadow-lg"
          ></input>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="transactionType" className="block text-md">
          Tipo de transacción <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <select
            id="transactionType"
            value={transactionType}
            onChange={(event) => setTransactionType(event.target.value)}
            placeholder="Indicanos que tipo de trámite deseas"
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-600 dark:text-gray-900 shadow-lg"
          >
            {transactionTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="category" className="block text-md">
          Tipo de vehículo <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-600 dark:text-gray-900 shadow-lg"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="brand" className="block text-md">
          Marca <span className="text-red-500">*</span>
        </label>
        <div className="mt-2">
          <select
            id="brand"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            className="block appearance-none w-full rounded-md border-0 px-3 py-5 text-gray-600 dark:text-gray-900 shadow-lg"
          >
            {brandsToShow.map((brand) => (
              <option key={brand.name}>{brand.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-12 mt-3">
        <div className="flex items-center">
          <input
            id="terms-and-conditions"
            name="terms-and-conditions"
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="h-8 w-8 md:h-6 md:w-6 cursor-pointer rounded border-gray-300 text-blue-800 focus:ring-blue-800"
          />
          <label
            htmlFor="terms-and-conditions"
            className="block cursor-pointer text-md ml-3"
          >
            Acepto los
            <a href="/landing-2p-marte/policies#terms-and-conditions" className="underline px-1">
              términos y condiciones
            </a>
            <span>y</span>
            <a href="/landing-2p-marte/policies#privacy" className="underline px-1">
              las políticas de privacidad.{" "}
            </a>
          </label>
        </div>
      </div>
      <div className="sm:col-span-12 flex mt-3 mb-10">
        <button type="submit" className="btn-primary w-48">
          <span className="relative">Enviar solicitud</span>
        </button>
      </div>
    </form>
  );
};

export default VehicleForm;
