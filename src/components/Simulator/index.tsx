import { useState } from 'react';
import './index.css';

export default function Simulator() {
    const [tjm, setTjm] = useState(0);
    const [leaveDays, setLeaveDays] = useState(25);
    const [portagePercent, setPortagePercent] = useState(6);
    const [mutual, setMutual] = useState(0);
    
    const [motorized, setMotorized] = useState('NON');
    const [km, setKm] = useState(0);
    const [fiscalPower, setFiscalPower] = useState(0);

    const getWorkingDays = () => {
        return leaveDays === 20 ? 20: 19;
    }

    const computeBudget = () => {
        return getWorkingDays() * tjm;
    }

    const computePortageFees = () => {
        return getWorkingDays() * tjm * portagePercent / 100;
    }

    const computeKmFees = () => {
        const kmPerMonth = getWorkingDays() * km;
        let kmfees = 0;

        if(motorized === 'OUI') {
            if (fiscalPower <= 3) {
                if (kmPerMonth <= 5000) {
                    kmfees = kmPerMonth * 0.456;
                }
    
                if (kmPerMonth > 5000 && kmPerMonth <= 20000) {
                    kmfees = (kmPerMonth * 0.270) + 915;
                }
    
                if (kmPerMonth > 20000) {
                    kmfees = kmPerMonth * 0.318;
                }
    
                return kmfees;
            }
    
            if (fiscalPower === 4) {
                if (kmPerMonth <= 5000) {
                    kmfees = kmPerMonth * 0.523;
                }
    
                if (kmPerMonth > 5000 && kmPerMonth <= 20000) {
                    kmfees = (kmPerMonth * 0.291) + 1447;
                }
    
                if (kmPerMonth > 20000) {
                    kmfees = kmPerMonth * 0.352;
                }
                
                return kmfees;
            }
    
            if (fiscalPower === 5) {
                if (kmPerMonth <= 5000) {
                    kmfees = kmPerMonth * 0.548;
                }
    
                if (kmPerMonth > 5000 && kmPerMonth <= 20000) {
                    kmfees = (kmPerMonth * 0.305) + 1200;
                }
    
                if (kmPerMonth > 20000) {
                    kmfees = kmPerMonth * 0.368;
                }
    
                return kmfees;
            }
    
            if (fiscalPower === 6) {
                if (kmPerMonth <= 5000) {
                    kmfees = kmPerMonth * 0.574;
                }
    
                if (kmPerMonth > 5000 && kmPerMonth <= 20000) {
                    kmfees = (kmPerMonth * 0.32) + 1253;
                }
    
                if (kmPerMonth > 20000) {
                    kmfees = kmPerMonth * 0.386;
                }
    
                return kmfees;
            }
    
            if (fiscalPower >= 7) {
                if (kmPerMonth <= 5000) {
                    kmfees = kmPerMonth * 0.601;
                }
    
                if (kmPerMonth > 5000 && kmPerMonth <= 20000) {
                    kmfees = (kmPerMonth * 0.337) + 1301;
                }
    
                if (kmPerMonth > 20000) {
                    kmfees = kmPerMonth * 0.405;
                }
    
                return kmfees;
            }
        }

        return kmfees;
    }

    const computeSalary = () => {
        const workingDays = leaveDays === 20 ? 20: 19;
        const kmFees = computeKmFees();
        const budget = workingDays * tjm;
        const portageFees = (workingDays * tjm * portagePercent / 100);

        const brutSalary = Number(budget) - Number(portageFees) - Number(mutual) - Number(kmFees);
        const netSalary = (brutSalary/1.82).toFixed(2);
        const totalSalarty = Number(netSalary) + Number(kmFees);
        return totalSalarty.toFixed(2);
    }
    
    function initForm() {
        setTjm(0);
        setLeaveDays(25);
        setPortagePercent(6);
        setMutual(0);
        setMotorized('NON');
        setKm(0);
        setFiscalPower(0);
    }

    return (
      <div className="Simulator">
        <div className="Simulator-title">
          <h2>ÉVALUER VOTRE SALAIRE NET</h2>
        </div>
        <div className="Simulator-content">
          <div className="Simulator-description">
            <span>
              Cette simulation de portage salarial est à titre indicatif. Elle
              vous permet d'évaluer votre futur <b>salaire net</b> en euro sur la base
              de votre chiffre d'affaires, de vos frais professionnels et de vos
              options choisies.
            </span>
          </div>

          <div className="Simulator-form">
            <div className="Simulator-form-step">
                <div className='Simulator-form-step-title'>               
                    <div className="Simulator-form-badge">
                        1
                    </div>
                    <span className="Simulator-form-step-text">
                        ENTREZ LES INFORMATIONS DE VOTRE MISSION
                    </span>
                </div>
                <div className='Simulator-form-step-input'>
                    <span>Chiffre d'affaire H.T ou TJM</span>
                    <input type="tel" value={tjm} onChange={e => setTjm(Number(e.target.value))} min='0'/>
                </div>
                <div className='Simulator-form-step-input'>
                    <span>Nombre de jours de congés</span>
                    <select  value={leaveDays} onChange={e => setLeaveDays(Number(e.target.value))}>
                        <optgroup>
                            <option>
                                20
                            </option>
                            <option>
                                25
                            </option>
                        </optgroup>
                    </select>
                </div>
                <div className='Simulator-form-step-input'>
                    <span>Frais de portage %</span>
                    <select  value={portagePercent} onChange={e => setPortagePercent(Number(e.target.value))} disabled={true}>
                        <optgroup>
                            <option>
                                6
                            </option>
                        </optgroup>
                    </select>
                </div>
                <div className='Simulator-form-step-input'>
                    <span>Mutuelle santé</span>
                    <select  value={mutual} onChange={e => setMutual(Number(e.target.value))}>
                        <optgroup>
                            <option>
                                0
                            </option>
                            <option>
                                30
                            </option>
                            <option>
                                40
                            </option>
                            <option>
                                50
                            </option>
                            <option>
                                60
                            </option>
                            <option>
                                70
                            </option>
                            <option>
                                80
                            </option>
                            <option>
                                90
                            </option>
                            <option>
                                100
                            </option>
                        </optgroup>
                    </select>
                </div>
                <div className='Simulator-form-step-input'>
                    <span>Êtes vous motorisé?</span>
                    <select  value={motorized} onChange={e => setMotorized(e.target.value)}>
                        <optgroup>
                            <option>
                                OUI
                            </option>
                            <option>
                                NON
                            </option>
                        </optgroup>
                    </select>

                    {motorized === 'OUI' && <div className="input-group">
                        <span>Nombre de kilomètres à effectuer par jour (<b>40 km maximum</b>)</span>
                        <input type="tel" value={km} onChange={e => setKm(Number(e.target.value) > 40 ? 40 : Number(e.target.value))}
                        min='0'/>

                        <span>Puissance fiscale</span>
                        <input type="tel" value={fiscalPower} onChange={e => setFiscalPower(Number(e.target.value))} 
                        min='0'/>
                    </div>}
                </div>
            </div>

            <div className="Simulator-form-step">
                <div className='Simulator-form-step-title'>
                    <div className="Simulator-form-badge">
                        2
                    </div>
                    <span className="Simulator-form-step-title">
                        RÉSULTATS DE VOTRE SIMULATION
                    </span>
                </div>

                <div className='Simulator-form-step-input'>
                    <span>Chiffre d'affaires mensuel</span>
                    <input type="text" value={computeBudget()} min='0' disabled={true}/>
                </div>

                <div className='Simulator-form-step-input'>
                    <span>Frais de portage mensuel</span>
                    <input type="text" value={computePortageFees()} min='0' disabled={true}/>
                </div> 
                <div className='Simulator-form-step-input'>
                    <span>Salaire Total</span>
                    <input type="text" value={computeSalary()} min='0' disabled={true}/>
                </div> 
            </div>
            <div className='Simulator-form-actions'>
                <button className='Simulator-form-actions-init'
                    onClick={() => initForm()}
                >Réinitialiser</button>
            </div>
          </div>     
        </div>      
      </div>
    );
}