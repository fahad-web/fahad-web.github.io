import Link from "next/link";
import React from "react";
import Meta from "../meta";
const PaymentHistory = () =>{
    return(
        <React.Fragment>
            <Meta title="Payment History" keywords="fahad" description ="Fahad" />
        <p>All Payment History </p>
        <table>
            <tr>
                <th>ID</th>
                <th>Subcsription</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2 Day</td>
                <td>2000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1 day</td>
                <td>1500</td>
            </tr>
       
            <br></br><br></br><Link href="/home">Home</Link>
        </table>
        </React.Fragment>
    )
}

export default  PaymentHistory