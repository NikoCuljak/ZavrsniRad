import React, { Fragment } from "react";
import { useHistory, useParams } from "react-router";
import ICalculate from "../interfaces/ICalculate";
import IParams from "../interfaces/IParams";
import TrackerService from "../services/TrackerSevice";
import { toast } from 'react-toastify';
import Nav from "./Nav";
import Form from "./Form";

toast.configure();


const Edit = () => {

    const { id } = useParams<IParams>()

    const service = new TrackerService();

    let history = useHistory();

    function updateData(data: ICalculate) {
        const res = service.editCalculate(id, data);
        history.push("/monthly-table");
    }

    const handleSubmit = (data: ICalculate) => {
        updateData(data);
        toast.info('Uspješno ažurirano!', {
            autoClose: 3000,
            position: "bottom-center",
            hideProgressBar: true,
        });

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

export default Edit;