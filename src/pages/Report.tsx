import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../components/Nav';
import ReportTable from '../components/ReportTable';
import ICalculate from '../interfaces/ICalculate';
import TrackerService from '../services/TrackerSevice';

const Report = () => {

    const service = new TrackerService();
    const [calc, setCalc] = useState<ICalculate[]>([]);
    const fetchCalc = async () => {
        const res = await service.getCalculate();
        setCalc(res)
    }

    useEffect(() => {
        fetchCalc()
    }, [])

    return (
        <div>
            <Nav />
            <ReportTable calc={calc} />
        </div>
    )
}

export default Report;