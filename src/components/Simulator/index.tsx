import { useState } from 'react';
import './index.css';

export default function Simulator() {
    const [tjm, setTjm] = useState(0);
    const [leaveDays, setLeaveDays] = useState(25);
    const [portagePercent, setPortagePercent] = useState(6);
    const [mutual, setMutual] = useState(0);
    // const [motorized, setMotorized] = useState('NON');
    // const [km, setKm] = useState(0);
    // const [power, setPower] = useState(0);

    const computeBudget = () => {
        const workingDays = leaveDays === 20 ? 20: 19;
        return workingDays * tjm;
    }

    const computePortageFees = () => {
        const workingDays = leaveDays === 20 ? 20: 19;

        return workingDays * tjm * portagePercent / 100;
    }

    const computeSalary = () => {
        return ((computeBudget() - computePortageFees() - mutual ) / 1.82).toFixed(2);
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
                        <span>1</span>
                    </div>
                    <span className="Simulator-form-step-text">
                        ENTREZ LES INFORMATIONS DE VOTRE MISSION
                    </span>
                </div>
                <div className='Simulator-form-step-input'>
                    <span>Chiffre d'affaire H.T ou TJM</span>
                    <input type="number" value={tjm} onChange={e => setTjm(Number(e.target.value))} min='0'/>
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
                {/* <div className='Simulator-form-step-input'>
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
                        <span>Nombre de kilomètres à effectuer par jour</span>
                        <input type="number" value={km} onChange={e => setKm(Number(e.target.value))}
                        min='0'/>

                        <span>Puissance fiscale</span>
                        <input type="number" value={power} onChange={e => setPower(Number(e.target.value))} 
                        min='0'/>
                    </div>}
                </div> */}
            </div>

            <div className="Simulator-form-step">
                <div className='Simulator-form-step-title'>
                    <div className="Simulator-form-badge">
                        <span>2</span>
                    </div>
                    <span className="Simulator-form-step-title">
                        RÉSULTATS DE VOTRE SIMULATION
                    </span>
                </div>

                <div className='Simulator-form-step-input'>
                    <span>Chiffre d'affaires mensuel</span>
                    <input type="number" value={computeBudget()} min='0' disabled={true}/>
                </div>

                <div className='Simulator-form-step-input'>
                    <span>Frais de portage mensuel</span>
                    <input type="number" value={computePortageFees()} min='0' disabled={true}/>
                </div> 
                <div className='Simulator-form-step-input'>
                    <span>Salaire Total</span>
                    <input type="number" value={computeSalary()} min='0' disabled={true}/>
                </div> 
            </div>
          </div>
        </div>
      </div>
    );
}