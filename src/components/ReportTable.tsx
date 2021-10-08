import moment from 'moment';
import React from 'react';
import ICalculate from '../interfaces/ICalculate';

interface IProps {
    calc: ICalculate[];
}

const ReportTable: React.FC<IProps> = ({ calc }) => {
    return (
        <table className="table">
            <th className="table__header">Izvještaj</th>
            <tr className="table__row__report">
                <td className="table__data__report bold"> Datum </td>
                <td className="table__data__report bold"> Plaće </td>
                <td className="table__data__report bold"> Transferi </td>
                <td className="table__data__report bold"> Stanarina, režije i gorivo </td>
                <td className="table__data__report bold"> Prijevoz </td>
                <td className="table__data__report bold"> Hrana i bezalkoholno piće </td>
                <td className="table__data__report bold"> Razna roba i usluge </td>
                <td className="table__data__report bold"> Rekreacija i kultura  </td>
                <td className="table__data__report bold"> Restorani i hoteli  </td>
                <td className="table__data__report bold"> Opremanje stambenog prostora  </td>
                <td className="table__data__report bold"> Odjeća i obuća  </td>
                <td className="table__data__report bold"> Alkoholna pića i duhanski proizvodi  </td>
                <td className="table__data__report bold"> Zdravstvo </td>
                <td className="table__data__report bold"> Komunikacije </td>
                <td className="table__data__report bold"> Obrazovanje </td>
            </tr>
            {calc.map((x: any) => (
                <tr className="table__row__report">
                    <td className="table__data__report">{moment(x.date).format('DD/MM/YYYY')}</td>
                    <td className="table__data__report">{x.salary} KN</td>
                    <td className="table__data__report">{x.transfers} KN</td>
                    <td className="table__data__report">{x.outcome1} KN</td>
                    <td className="table__data__report">{x.outcome2} KN</td>
                    <td className="table__data__report">{x.outcome3} KN</td>
                    <td className="table__data__report">{x.outcome4} KN</td>
                    <td className="table__data__report">{x.outcome5} KN</td>
                    <td className="table__data__report">{x.outcome6} KN</td>
                    <td className="table__data__report">{x.outcome7} KN</td>
                    <td className="table__data__report">{x.outcome8} KN</td>
                    <td className="table__data__report">{x.outcome9} KN</td>
                    <td className="table__data__report">{x.outcome10} KN</td>
                    <td className="table__data__report">{x.outcome11} KN</td>
                    <td className="table__data__report">{x.outcome12} KN</td>
                </tr>

            ))}


        </table>

    )
}

export default ReportTable;