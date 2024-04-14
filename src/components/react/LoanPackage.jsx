import { openWhatsappMessageLink } from "../../lib/whatsapp-link";

const LoanPackage = ({ loan, quota }) => {
  const handleButtonClick = () => {
    const message = "Hola, me gustaría solicitar un préstamo de " + loan;
    openWhatsappMessageLink(message);
  };

  return (
    <div className="bg-white dark:bg-gray-900 w-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="p-1 bg-yellow-400"></div>
      <div className="px-8 py-4">
        <p>Préstamo</p>
        <h2 className="text-2xl font-bold">{loan}</h2>
      </div>
      <div className="px-8 py-4">
        <p>Cuotas x 13 semanas</p>
        <h2 className="text-2xl font-bold">{quota}</h2>
      </div>
      <div className="p-4">
        <button onClick={handleButtonClick} className="w-full btn-primary">
          <span className="relative">Solicitar</span>
        </button>
      </div>
    </div>
  );
};

export default LoanPackage;
