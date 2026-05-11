import React, { useState } from "react";
import cencosudLogo from "./assets/Logo-produccion-Bymhxfov.svg";
import unSoloCencosudLogo from "./assets/solo_cencosud-BJWgGMhQ.svg";

const App = () => {
  const [codigo, setCodigo] = useState("");
  const [robotChecked, setRobotChecked] = useState(false);
  const [isRecaptchaLoading, setIsRecaptchaLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [mostrarCertificado, setMostrarCertificado] = useState(false);
  const [error, setError] = useState("");
  const isValid = codigo.trim() !== "" && robotChecked;

  const handleRecaptchaClick = () => {
    const newCheckedState = !robotChecked;
    if (newCheckedState) {
      setIsRecaptchaLoading(true);
      const randomTime = Math.floor(Math.random() * 2000) + 1000; // 1 to 3 seconds
      setTimeout(() => {
        setIsRecaptchaLoading(false);
        setRobotChecked(true);
      }, randomTime);
    } else {
      setRobotChecked(false);
    }
  };

  const handleValidar = () => {
    if (isValid) {
      setIsValidating(true);
      setError("");
      const randomTime = Math.floor(Math.random() * 2000) + 1500; // 1.5 to 3.5 seconds
      setTimeout(() => {
        setIsValidating(false);
        setRobotChecked(false);
        if (codigo.trim() === "8b1a0d492") {
          setMostrarCertificado(true);
        } else {
          setMostrarCertificado(false);
          setError("Error: Captcha o código inválido.");
        }
      }, randomTime);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Bar with Flags */}
      <div className="bg-[#333333] h-8 w-full flex justify-end items-center px-4 space-x-2">
        <div className="flex space-x-2">
          <img src="https://flagcdn.com/ar.svg" alt="Argentina" title="Argentina" className="w-4 h-4 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="https://flagcdn.com/br.svg" alt="Brasil" title="Brasil" className="w-4 h-4 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="https://flagcdn.com/cl.svg" alt="Chile" title="Chile" className="w-4 h-4 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="https://flagcdn.com/co.svg" alt="Colombia" title="Colombia" className="w-4 h-4 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="https://flagcdn.com/pe.svg" alt="Perú" title="Perú" className="w-4 h-4 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="https://flagcdn.com/uy.svg" alt="Uruguay" title="Uruguay" className="w-4 h-4 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="https://flagcdn.com/us.svg" alt="USA" title="USA" className="w-4 h-4 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="https://flagcdn.com/cn.svg" alt="China" title="China" className="w-4 h-4 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" />
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#1981c2] h-[80px] w-full flex items-center px-8 shadow-sm">
        <div className="flex items-center ml-[2%]">
          {/* Cencosud Logo */}
          <a href="http://miportal.cencosud.com/" title="Ir al Portal Cencosud">
            <img src={cencosudLogo} alt="Cencosud" className="h-[65px] w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity" />
          </a>
        </div>
      </header>

      {/* Tri-color Bar */}
      <div className="flex h-[8px] w-full">
        <div className="bg-[#005c9e] w-[65%]"></div>
        <div className="bg-[#6db5e8] w-[15%]"></div>
        <div className="bg-[#f38220] w-[20%]"></div>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center pt-10 px-4">
        <div className="w-full max-w-[1000px] bg-white rounded-lg border border-gray-200 p-8 pt-10 shadow-sm mt-4">

          {/* Title */}
          <div className="mb-10 text-[22px] font-bold text-[#1981c2] tracking-wide">
            <span className="border-b-[4px] border-[#f38220] pb-1 mr-1">Validar</span>
            <span> Certificado</span>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-500 text-xs font-bold mb-2 uppercase tracking-wide">
                CÓDIGO:
              </label>
              <input
                type="text"
                value={codigo}
                onChange={(e) => {
                  setCodigo(e.target.value);
                  setError("");
                  setMostrarCertificado(false);
                }}
                placeholder="Código"
                className="w-full p-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1981c2]"
              />
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="flex justify-center my-8">
              <div className="bg-[#f9f9f9] border border-[#d3d3d3] p-3 rounded-[3px] flex items-center justify-between w-[300px] shadow-sm">
                <div className="flex items-center space-x-3 ml-2">
                  {isRecaptchaLoading ? (
                    <div className="w-7 h-7 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  ) : robotChecked ? (
                    <div
                      className="w-7 h-7 flex items-center justify-center cursor-pointer"
                      onClick={handleRecaptchaClick}
                    >
                      <svg className="w-8 h-8 text-[#009e5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="w-7 h-7 border-[2px] border-[#c1c1c1] bg-white rounded-[2px] cursor-pointer hover:border-[#b2b2b2] transition-colors"
                      onClick={handleRecaptchaClick}
                    ></div>
                  )}
                  <span className="text-sm text-gray-800">No soy un robot</span>
                </div>
                <div className="flex flex-col items-center mr-1">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-[32px] h-[32px]" />
                  <span className="text-[10px] text-gray-500 mt-1">reCAPTCHA</span>
                </div>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm font-semibold text-center mt-[-10px] mb-4">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={handleValidar}
                className={`px-5 py-2 rounded font-medium text-sm transition-colors flex items-center ${isValid && !isValidating
                  ? "bg-[#1981c2] text-white cursor-pointer hover:bg-[#136a9e]"
                  : "bg-[#b3b3b3] text-white cursor-not-allowed"
                  }`}
                disabled={!isValid || isValidating}
              >
                {isValidating && (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isValidating ? "Validando..." : "Validar"}
              </button>
            </div>
          </div>

          {/* Resultado Certificado */}
          {mostrarCertificado && (
            <div className="mt-10 pt-8 border-t border-gray-200 text-gray-700 text-sm animate-[fadeIn_0.5s_ease-out]">
              <h3 className="text-center font-bold text-xl mb-8 text-[#1981c2]">DATOS DEL CERTIFICADO</h3>

              <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-8 bg-[#fdfdfd] p-6 rounded-lg border border-gray-100 shadow-sm">
                <div>
                  <span className="text-gray-500 uppercase text-[11px] font-bold tracking-wider">Empleado</span>
                  <div className="font-bold text-gray-800 text-base">NICOLAS AUGUSTO GONZALEZ RODRIGUEZ</div>
                </div>
                <div>
                  <span className="text-gray-500 uppercase text-[11px] font-bold tracking-wider">Cargo / Puesto</span>
                  <div className="font-bold text-gray-800 text-base">System Engineer</div>
                </div>

                <div>
                  <span className="text-gray-500 uppercase text-[11px] font-bold tracking-wider">Documento de Identidad</span>
                  <div className="font-semibold text-gray-800">95233231</div>
                </div>
                <div>
                  <span className="text-gray-500 uppercase text-[11px] font-bold tracking-wider">C.U.I.L.</span>
                  <div className="font-semibold text-gray-800">20-95233231-8</div>
                </div>

                <div>
                  <span className="text-gray-500 uppercase text-[11px] font-bold tracking-wider">Fecha de Ingreso</span>
                  <div className="font-semibold text-gray-800">09/05/2022</div>
                </div>
                <div>
                  <span className="text-gray-500 uppercase text-[11px] font-bold tracking-wider">Tipo de Contratación</span>
                  <div className="font-semibold text-gray-800">Tiempo indeterminado</div>
                </div>

                <div>
                  <span className="text-gray-500 uppercase text-[11px] font-bold tracking-wider">Sueldo Bruto Mensual</span>
                  <div className="font-semibold text-gray-800">$3.887.680</div>
                </div>
              </div>

              <div className="bg-[#f9f9f9] p-5 rounded border border-[#e2e2e2] flex justify-between items-center">
                <div>
                  <p className="mb-1"><span className="font-bold text-gray-600">Fecha Emisión:</span> 07-05-2026</p>
                  <p className="text-gray-500 text-xs">Válido por 30 días</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs mb-1">Código de Validación</p>
                  <p className="font-mono font-bold text-[#1981c2] tracking-wider text-lg">8b1a0d492</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-center pb-8 pt-16">
        <div className="flex items-center text-[#1981c2]">
          <div className="text-center pr-4 mr-4 flex flex-col items-center border-r-2 border-[#1981c2]">
            {/* Cencosud Logo */}
            <img src={unSoloCencosudLogo} alt="Un Solo Cencosud" className="h-14 w-auto mb-2 object-contain" />
          </div>
          <div className="text-[#1981c2] text-sm text-left font-medium leading-snug">
            Servir de forma<br />extraordinaria en<br />cada momento
          </div>
        </div>
      </footer>
      <div className="w-full flex justify-center">
        <div className="h-1.5 w-[150px] bg-[#f38220]"></div>
      </div>
    </div>
  );
};

export default App;
