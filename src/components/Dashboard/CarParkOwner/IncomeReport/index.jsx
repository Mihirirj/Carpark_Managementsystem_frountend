import TopTitleBar from "../../../TopTitleBar";
import server from "../../../../config/apis/server";
import {useEffect} from "react";

export default function IncomeReport() {
    function getIncomeReport() {
        server.get("/owner/get_income_report", {
            headers: {"token": localStorage.getItem('token')}
        })
            .then((res) => {
                alert(res.data)
                console.log("result : ", res.data)
            })
            // Catch errors if any
            .catch((err) => {
                alert(err)
            })
    }

    useEffect(() => {
        getIncomeReport();
    }, [])


    return (
        <div>
            <TopTitleBar title="My income report"/>
            <div
                className="p-5 bg-white rounded-xl mx-5 h-96">
                Income Report
            </div>
        </div>
    );
}