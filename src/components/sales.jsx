import { useState } from "react";
import "../style/sales.css";
import SelectField from "./SelectField";

export default function Sales() {

  const [valorCarteraBTC, setValorCarteraBTC] = useState(0.00000000);
  const [valorCarteraUSD, setValorCarteraUSD] = useState(0.00);
  const [precioBTC, setPrecioBTC] = useState(65000);
  const [valorCash, setValorCash] = useState(10000);
  return (
    <>
      <aside>
        <div className="resumenTransacciones">
            <p>Saldo en bitcoin (BTC)</p>
            <h2 className="txtBlanco">{valorCarteraBTC.toFixed(8)}</h2>
            <h2 className="txtBlanco">BTC</h2>
            <p>= ${valorCarteraUSD} USD | Cash: ${valorCash}</p>
        </div>
        <div>
          <h3>Operar Mercado</h3>
          <h4>Inversión (USD)</h4>
          <input type="number" placeholder="Monto en USD" />
          <h4>Precio BTC (USD)</h4>
          <input type="number" placeholder="Precio ActualBTC" value={precioBTC}/>
          <SelectField 
            id="tipoOperacion"
            label="Tipo de Operación"
            value={"compra"}
            onChange={() => {}}
            options={[
              { value: "compra", label: "Compra" },
              { value: "venta", label: "Venta" },
            ]}
          />
          <button className="btnOperar">Ejecutar Operación</button>
        </div>
      </aside>
    </>
  );
}