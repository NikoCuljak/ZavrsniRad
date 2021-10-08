import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ICalculate from '../interfaces/ICalculate';



interface IProps {
    calc: ICalculate[];
    onDelete: (calculated: number) => void;
}



const MonthlyTableComp: React.FC<IProps> = ({ calc, onDelete }) => {

    const [totalSalary, setTotalSalary] = useState<number>(0);
    const [totalTransfers, setTotalTransfers] = useState<number>(0);
    const [totalIncome, setTotalIncome] = useState<number>(0);
    const [totalOutcome, setTotalOutcome] = useState<number>(0);
    const [outcome1, setOutcome1] = useState<number>(0);
    const [outcome2, setOutcome2] = useState<number>(0);
    const [outcome3, setOutcome3] = useState<number>(0);
    const [outcome4, setOutcome4] = useState<number>(0);
    const [outcome5, setOutcome5] = useState<number>(0);
    const [outcome6, setOutcome6] = useState<number>(0);
    const [outcome7, setOutcome7] = useState<number>(0);
    const [outcome8, setOutcome8] = useState<number>(0);
    const [outcome9, setOutcome9] = useState<number>(0);
    const [outcome10, setOutcome10] = useState<number>(0);
    const [outcome11, setOutcome11] = useState<number>(0);
    const [outcome12, setOutcome12] = useState<number>(0);
    const [totalInc, setTotalInc] = useState<number>(0);
    const [totalOut, setTotalOut] = useState<number>(0);
    const [savings, setSavings] = useState<number>(0);
    const [totalSavings, setTotalSavings] = useState<number>(0);
    const [avgIncome, setAvgIncome] = useState<number>(0);
    const [avgOutcome, setAvgOutcome] = useState<number>(0);
    const [avgSavings, setAvgSavings] = useState<number>(0);



    const incomeSum = () => {
        const salary = calc.map(c => c.salary);
        const transfers = calc.map(t => t.transfers);
        let totalTransf = 0;
        let totalSalary = 0;

        for (var i in transfers) {
            totalTransf += transfers[i];
        }

        for (var i in salary) {
            totalSalary += salary[i];
        }

        setTotalTransfers(totalTransf);
        setTotalSalary(totalSalary);
        setTotalIncome(totalSalary + totalTransfers);

    }

    const outcomeSum = () => {
        const outcomeSrc1 = calc.map(o => o.outcome1);
        const outcomeSrc2 = calc.map(o => o.outcome2);
        const outcomeSrc3 = calc.map(o => o.outcome3);
        const outcomeSrc4 = calc.map(o => o.outcome4);
        const outcomeSrc5 = calc.map(o => o.outcome5);
        const outcomeSrc6 = calc.map(o => o.outcome6);
        const outcomeSrc7 = calc.map(o => o.outcome7);
        const outcomeSrc8 = calc.map(o => o.outcome8);
        const outcomeSrc9 = calc.map(o => o.outcome9);
        const outcomeSrc10 = calc.map(o => o.outcome10);
        const outcomeSrc11 = calc.map(o => o.outcome11);
        const outcomeSrc12 = calc.map(o => o.outcome12);
        let total1 = 0;
        let total2 = 0;
        let total3 = 0;
        let total4 = 0;
        let total5 = 0;
        let total6 = 0;
        let total7 = 0;
        let total8 = 0;
        let total9 = 0;
        let total10 = 0;
        let total11 = 0;
        let total12 = 0;
        for (var i in outcomeSrc1) {
            total1 += outcomeSrc1[i]
        }
        for (var i in outcomeSrc2) {
            total2 += outcomeSrc2[i]
        }
        for (var i in outcomeSrc3) {
            total3 += outcomeSrc3[i]
        }
        for (var i in outcomeSrc4) {
            total4 += outcomeSrc4[i]
        }
        for (var i in outcomeSrc5) {
            total5 += outcomeSrc5[i]
        }
        for (var i in outcomeSrc6) {
            total6 += outcomeSrc6[i]
        }
        for (var i in outcomeSrc7) {
            total7 += outcomeSrc7[i]
        }
        for (var i in outcomeSrc8) {
            total8 += outcomeSrc8[i]
        }
        for (var i in outcomeSrc9) {
            total9 += outcomeSrc9[i]
        }
        for (var i in outcomeSrc10) {
            total10 += outcomeSrc10[i]
        }
        for (var i in outcomeSrc11) {
            total11 += outcomeSrc11[i]
        }
        for (var i in outcomeSrc12) {
            total12 += outcomeSrc12[i]
        }
        setOutcome1(total1);
        setOutcome2(total2);
        setOutcome3(total3);
        setOutcome4(total4);
        setOutcome5(total5);
        setOutcome6(total6);
        setOutcome7(total7);
        setOutcome8(total8);
        setOutcome9(total9);
        setOutcome10(total10);
        setOutcome11(total11);
        setOutcome12(total12);
        setTotalOutcome(outcome1 + outcome2 + outcome3 + outcome4 + outcome5 + outcome6 + outcome7 + outcome8 + outcome9 + outcome10 + outcome11 + outcome12)
    }

    let history = useHistory();

    function update(id: any) {
        history.push("/edit/" + id)
    }

    useEffect(() => {
        incomeSum();
        outcomeSum();
        setSavings(totalIncome - totalOutcome);
        setTotalInc(totalIncome)
        setTotalOut(totalOutcome)
        setAvgIncome(totalInc / calc.length);
        setAvgOutcome(totalOut / calc.length);
        setAvgSavings(savings / calc.length);

    });






    return (
        <div className="table__wrap">
            <table className="table__month">
                <th className="table__header">Mjesečna tablica</th>
                <tr className="table__row__month">
                    <td className="table__data bold"> Datum </td>
                    <td className="table__data bold"> Prihodi </td>
                    <td className="table__data bold"> Rashodi </td>
                    <td className="table__data bold"> Štednja </td>
                </tr>
                {calc.map((x: any) => (
                    <tr className="table__row__month" >
                        <td className="table__data">{moment(x.date).format('DD/MM/YYYY')}</td>
                        <td className="table__data">{x.salary + x.transfers} KN</td>
                        <td className="table__data">{x.outcome1 + x.outcome2 + x.outcome3 + x.outcome4 + x.outcome5 + x.outcome6 + x.outcome7 + x.outcome8 + x.outcome9 + x.outcome10 + x.outcome11 + x.outcome12} KN</td>
                        <td className="table__data">{(x.salary + x.transfers) - (x.outcome1 + x.outcome2 + x.outcome3 + x.outcome4 + x.outcome5 + x.outcome6 + x.outcome7 + x.outcome8 + x.outcome9 + x.outcome10 + x.outcome11 + x.outcome12)} KN</td>
                        <td className="table__icons"><i className="icon icon--edit" onClick={() => update(x.id)}></i></td>
                        <td className="table__icons"><i className="icon icon--delete" onClick={() => onDelete(x.id)}></i></td>
                    </tr>
                ))}
                <tr className="table__row__month">
                    <td className="table__data bold"> Ukupno </td>
                    <td className="table__data bold">{totalInc.toFixed(2)} KN</td>
                    <td className="table__data bold">{totalOut.toFixed(2)} KN</td>
                    <td className="table__data bold">{savings.toFixed(2)} KN</td>
                </tr>

                <tr className="table__row__month">
                    <td className="table__data bold"> Prosjek </td>
                    <td className="table__data bold">{avgIncome.toFixed(2)} KN</td>
                    <td className="table__data bold">{avgOutcome.toFixed(2)} KN</td>
                    <td className="table__data bold">{avgSavings.toFixed(2)} KN</td>
                </tr>

            </table>
        </div >
    )
}

export default MonthlyTableComp;