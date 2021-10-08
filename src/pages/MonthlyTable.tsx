import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import MonthlyTableComp from '../components/MonthlyTableComp';
import Nav from '../components/Nav';
import ICalculate from '../interfaces/ICalculate';
import TrackerService from '../services/TrackerSevice';

toast.configure();


const MonthlyTable = () => {

    const service = new TrackerService();
    const [calc, setCalc] = useState<ICalculate[]>([]);
    const fetchCalc = async () => {
        const res = await service.getCalculate();
        setCalc(res)
    }

    const handleDelete = async (calcId: number) => {
        const res = await service.deleteCalculate(calcId);
        if (res != null) {
            setCalc(calc.filter(c => c.id !== calcId))
            toast.error('Stavka je uspješno uklonjena!', {
                autoClose: 3000,
                position: "bottom-center",
                hideProgressBar: true

            })
        }
    }

    useEffect(() => {
        fetchCalc()
    }, [])

    return (
        <div>
            <Nav />
            <MonthlyTableComp calc={calc} onDelete={handleDelete} />
        </div>
    )
}

export default MonthlyTable;