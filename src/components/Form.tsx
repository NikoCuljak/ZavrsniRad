import moment from 'moment';
import React, { ChangeEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ICalculate from '../interfaces/ICalculate';
import IParams from '../interfaces/IParams';
import TrackerService from '../services/TrackerSevice';

interface IProps {
    onSubmit: (data: ICalculate) => void;
}

const Form: React.FC<IProps> = ({ onSubmit }) => {

    const [active, setActive] = useState(false);
    const [date, setDate] = useState<string>(moment().format('DD/MM/YYYY'));
    const [salary, setSalary] = useState<number | undefined>();
    const [transfers, setTransfers] = useState<number | undefined>();
    const [outcome1, setOutcome1] = useState<number | undefined>();
    const [outcome2, setOutcome2] = useState<number | undefined>();
    const [outcome3, setOutcome3] = useState<number | undefined>();
    const [outcome4, setOutcome4] = useState<number | undefined>();
    const [outcome5, setOutcome5] = useState<number | undefined>();
    const [outcome6, setOutcome6] = useState<number | undefined>();
    const [outcome7, setOutcome7] = useState<number | undefined>();
    const [outcome8, setOutcome8] = useState<number | undefined>();
    const [outcome9, setOutcome9] = useState<number | undefined>();
    const [outcome10, setOutcome10] = useState<number | undefined>();
    const [outcome11, setOutcome11] = useState<number | undefined>();
    const [outcome12, setOutcome12] = useState<number | undefined>();

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }

    const handleSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSalary(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleTransfersChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTransfers(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome1Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome1(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome2Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome2(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome3Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome3(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome4Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome4(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome5Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome5(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome6Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome6(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome7Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome7(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome8Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome8(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome9Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome9(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome10Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome10(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome11Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome11(event.target.value ? Number(event.target.value) : undefined);
    }

    const handleOutcome12Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOutcome12(event.target.value ? Number(event.target.value) : undefined);
    }

    const service = new TrackerService();
    const { id } = useParams<IParams>();

    const fetchById = async () => {
        const res = await service.fetchById(Number(id))

        setDate(res.data.date)
        setSalary(res.data.salary);
        setTransfers(res.data.transfers);
        setOutcome1(res.data.outcome1);
        setOutcome2(res.data.outcome2);
        setOutcome3(res.data.outcome3);
        setOutcome4(res.data.outcome4);
        setOutcome5(res.data.outcome5);
        setOutcome6(res.data.outcome6);
        setOutcome7(res.data.outcome7);
        setOutcome8(res.data.outcome8);
        setOutcome9(res.data.outcome9);
        setOutcome10(res.data.outcome10);
        setOutcome11(res.data.outcome11);
        setOutcome12(res.data.outcome12);
    }

    useEffect(() => {
        if (Number(id)) {
            fetchById();
        }
    }, [])

    return (
        <div className="form">
            <div className="form__date">
                <input type="date" required onChange={handleDateChange} value={date} />
            </div>

            <div className="form__income grid">
                <label htmlFor="place"> Plaće </label>
                <input type="number" id="place" placeholder="unesite iznos" onChange={handleSalaryChange} value={salary} />
                <label htmlFor="transferi"> Transferi </label>
                <input type="number" id="transferi" placeholder="unesite iznos" onChange={handleTransfersChange} value={transfers} />
            </div>

            <div className="form__outcome grid">
                <label htmlFor="stanarina"> Stanarina, režije i gorivo </label>
                <input type="number" id="stanarina" placeholder="unesite iznos" onChange={handleOutcome1Change} value={outcome1} />
                <label htmlFor="prijevoz" > Prijevoz </label>
                <input type="number" id="prijevoz" placeholder="unesite iznos" onChange={handleOutcome2Change} value={outcome2} />
                <label htmlFor="hrana"> Hrana i bezalkoholno piće </label>
                <input type="number" id="hrana" placeholder="unesite iznos" onChange={handleOutcome3Change} value={outcome3} />
                <label htmlFor="razno"> Razna roba i usluge </label>
                <input type="number" id="razno" placeholder="unesite iznos" onChange={handleOutcome4Change} value={outcome4} />
                <label htmlFor="rekreacija"> Rekreacija i kultura </label>
                <input type="number" id="rekreacija" placeholder="unesite iznos" onChange={handleOutcome5Change} value={outcome5} />
                <label htmlFor="restorani"> Restorani i hoteli </label>
                <input type="number" id="restorani" placeholder="unesite iznos" onChange={handleOutcome6Change} value={outcome6} />
                <label htmlFor="stan"> Opremanje stambenog prostora </label>
                <input type="number" id="stan" placeholder="unesite iznos" onChange={handleOutcome7Change} value={outcome7} />
                <label htmlFor="odjeca"> Odjeća i obuća </label>
                <input type="number" id="odjeca" placeholder="unesite iznos" onChange={handleOutcome8Change} value={outcome8} />
                <label htmlFor="alkohol"> Alkoholna pića i duhanski proizvodi </label>
                <input type="number" id="alkohol" placeholder="unesite iznos" onChange={handleOutcome9Change} value={outcome9} />
                <label htmlFor="zdravstvo"> Zdravstvo </label>
                <input type="number" id="zdravstvo" placeholder="unesite iznos" onChange={handleOutcome10Change} value={outcome10} />
                <label htmlFor="komunikacije"> Komunikacije </label>
                <input type="number" id="komunikacije" placeholder="unesite iznos" onChange={handleOutcome11Change} value={outcome11} />
                <label htmlFor="obrazovanje"> Obrazovanje </label>
                <input type="number" id="obrazovanje" placeholder="unesite iznos" onChange={handleOutcome12Change} value={outcome12} />
            </div>
            <button onClick={() => setActive(!active)} > Dalje </button>
            <div className={active ? "modal active" : "modal"} >
                <div className="modal__content">
                    <div className="modal__content__title"> Jeste li sigurni da želite potvrditi unos? </div>
                    <div className="modal__buttons">
                        <button className="modal__buttons__button" onClick={() => { onSubmit({ date: date, salary: Number(salary), transfers: Number(transfers), outcome1: Number(outcome1), outcome2: Number(outcome2), outcome3: Number(outcome3), outcome4: Number(outcome4), outcome5: Number(outcome5), outcome6: Number(outcome6), outcome7: Number(outcome7), outcome8: Number(outcome8), outcome9: Number(outcome9), outcome10: Number(outcome10), outcome11: Number(outcome11), outcome12: Number(outcome12) }); setActive(!active) }}> Dalje </button>
                        <button className="modal__buttons__button" onClick={() => setActive(!active)}> Otkaži </button>
                    </div>
                </div>
            </div>
        </div >
    )
}



export default Form;