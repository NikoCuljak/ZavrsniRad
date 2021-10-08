import ICalculate from "../interfaces/ICalculate";
import { BaseService } from "./BaseSevice";



export default class TrackerService extends BaseService {

    // fetch data
    async getCalculate(): Promise<ICalculate[]> {
        const res = await this.instance.get("calc/")
        return res.data;
    }

    // post data
    async postData(data: ICalculate) {
        const res = await this.instance.post("calc/", data)
        return res;
    }

    // edit data
    async editCalculate(id: string, data: ICalculate) {
        const res = await this.instance.put("calc/" + id, data);
        return res;
    }

    // delete data
    async deleteCalculate(calcId: number) {
        const res = await this.instance.delete("calc/" + calcId);
        return res;
    }

    // fetch data
    async fetchById(id: number) {
        const res = await this.instance.get<ICalculate>("calc/" + id);
        return res;
    }

}
