import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';
import Nav from '../components/Nav';
import ICalculate from '../interfaces/ICalculate';
import TrackerService from '../services/TrackerSevice';

const Home = () => {

    const [date, setDate] = useState<string>('');
    const [salary, setSalary] = useState<number>(0);
    const [transfers, setTransfers] = useState<number>(0);
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

    const service = new TrackerService();

    const postData = async (data: ICalculate) => {
        const res = await service.postData(data);
        setDate(moment().format('DD/MM/YYYY'));
        setSalary(0);
        setTransfers(0);
        setOutcome1(0);
        setOutcome2(0);
        setOutcome3(0);
        setOutcome4(0);
        setOutcome5(0);
        setOutcome6(0);
        setOutcome7(0);
        setOutcome8(0);
        setOutcome9(0);
        setOutcome10(0);
        setOutcome11(0);
        setOutcome12(0);
    }

    const history = useHistory();



    const handleSubmit = (data: ICalculate) => {
        postData(data);
        history.push("/monthly-table")
    }

    return (
        <div>
            <Nav />
            <div className="content">
                <Form onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Home;