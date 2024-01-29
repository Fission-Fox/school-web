import { forwardRef } from "react";
import logo from "@/assets/images/bluelogo.png";
import Image from "next/image";
// eslint-disable-next-line
const PrintComponent = forwardRef((props: { data: any }, ref: any) => {
  const id = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        fontSize: "12px",
        gap: "5px",
        marginLeft: "5px",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "300px", textAlign: "center", margin: "auto" }}>
          <div>
            <p style={{ textAlign: "start" }}>Student Copy</p>
            <img src="/images/tracking_logo.png" width={150} height={100} />
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: "10px" }}>Challan NO : {id}</p>
              <p style={{ fontSize: "10px" }}>Account NO : 3092308900222437</p>
            </div>
            <p>Date: 19/8/2024 </p>
          </div>
          <hr />
          <div>
            {" "}
            <p style={{ fontWeight: "600", marginTop: "20px" }}>
              {" "}
              Student Name:{"   "}{" "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                john
              </span>{" "}
            </p>
          </div>
          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Enrollment ID: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                {" "}
                45{" "}
              </span>
            </p>
          </div>
          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Address: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                {" "}
                #4 lohme eof gulsern ldnf helop
              </span>
            </p>
          </div>

          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Amount Per KM: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}> 10</span>
            </p>
          </div>
          <div>
            {" "}
            <p
              style={{
                fontWeight: "600",
                marginTop: "20px",
                borderTop: "1px solid black",
              }}
            >
              {" "}
              Total: {"   "}{" "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                1000
              </span>
            </p>
          </div>
          <br />
          <br />
          <div>
            <p>Signature:_________________</p>
          </div>
        </div>
        <div style={{ width: "300px", textAlign: "center", margin: "auto" }}>
          <div>
            <p style={{ textAlign: "start" }}>School Copy</p>

            <img src="/images/tracking_logo.png" width={150} height={100} />
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: "10px" }}>Challan NO : {id}</p>
              <p style={{ fontSize: "10px" }}>Account NO : 3092308900222437</p>
            </div>
            <p>Date: 19/8/2024</p>
          </div>
          <hr />
          <div>
            {" "}
            <p style={{ fontWeight: "600", marginTop: "20px" }}>
              {" "}
              Student Name:{"   "}{" "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                john
              </span>{" "}
            </p>
          </div>
          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Enrollment ID: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                {" "}
                45{" "}
              </span>
            </p>
          </div>
          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Address: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                {" "}
                #4 lohme eof gulsern ldnf helop
              </span>
            </p>
          </div>

          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Amount Per KM: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}> 10</span>
            </p>
          </div>
          <div>
            {" "}
            <p
              style={{
                fontWeight: "600",

                marginTop: "20px",
                borderTop: "1px solid black",
              }}
            >
              {" "}
              Total: {"   "}{" "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                1000
              </span>
            </p>
          </div>
          <br />
          <br />
          <div>
            <p>Signature:_________________</p>
          </div>
        </div>
      </div>
      <div style={{ width: "80%", display: "flex", margin: "auto" }}>
        <div style={{ width: "300px", textAlign: "center", marginTop: "60px" }}>
          <div>
            <p style={{ textAlign: "start" }}>Bank Copy</p>
            <img src="/images/tracking_logo.png" width={150} height={100} />
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: "10px" }}>Challan NO : {id}</p>
              <p style={{ fontSize: "10px" }}>Account NO : 3092308900222437</p>
            </div>
            <p>Date: 19/8/2024</p>
          </div>
          <hr />
          <div>
            {" "}
            <p style={{ fontWeight: "600", marginTop: "20px" }}>
              {" "}
              Student Name:{"   "}{" "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                john
              </span>{" "}
            </p>
          </div>
          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Enrollment ID: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                {" "}
                45{" "}
              </span>
            </p>
          </div>
          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Address: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                {" "}
                #4 lohme eof gulsern ldnf helop
              </span>
            </p>
          </div>

          <div>
            {" "}
            <p style={{ fontWeight: "600" }}>
              {" "}
              Amount Per KM: {"   "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}> 10</span>
            </p>
          </div>
          <div>
            {" "}
            <p
              style={{
                fontWeight: "600",
                marginTop: "20px",
                borderTop: "1px solid black",
              }}
            >
              {" "}
              Total: {"   "}{" "}
              <span style={{ fontWeight: "700", marginLeft: "20px" }}>
                1000
              </span>
            </p>
          </div>
          <br />
          <br />
          <div>
            <p>Signature:_________________</p>
          </div>
        </div>
      </div> */}
      <div style={{ width: "100%", border: "1px solid black", padding: "5px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div>
            <Image src={logo} width={100} height={50} alt="" />
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <h1>Invoice No </h1>
              <h1 style={{ fontWeight: "bold" }}>339008</h1>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <h1>Issue Date </h1>{" "}
              <h1 style={{ textDecoration: "underline" }}>21-sep-2020</h1>
            </div>
            <div style={{ display: "flex", gap: "17px" }}>
              <h1>Due Date</h1>{" "}
              <h1 style={{ textDecoration: "underline" }}>21-sep-2020</h1>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", width: "240px" }}>
          National universities of sciences & Tecnology sector H-12 Islamabad
        </div>
        <div>
          <h1 style={{ fontWeight: "bold" }}>Habib Bank Limited</h1>
          <div style={{ display: "flex", gap: "70px", alignItems: "center" }}>
            <h1 style={{ width: "80px" }}>A/C Title</h1>
            <p style={{ width: "150px" }}>Nust admission processing fee MCA</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "70px" }}>
            <h1 style={{ width: "80px" }}>A/C No</h1>
            <p style={{ fontWeight: "bold" }}>0042-79001976-03</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Student Name</h1>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Hilal Khan
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Father Name</h1>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Qadar Khan
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <h1 style={{ width: "150px" }}>Merit Position</h1>
            <p style={{ textDecoration: "underline" }}>1032</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Selected in</h1>
            <p style={{ textDecoration: "underline", fontSize: "8px" }}>
              CIVIL ENGINEERING (ISLAMABAD) (SCEE)
            </p>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <table border={5}>
            <tr>
              <th style={{ border: "1px solid black" }}>Description</th>
              <th style={{ border: "1px solid black" }}>Amount Rs</th>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Admission processing fee</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>35,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Security Deposit (Refundable)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>10,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Semester Tution Fee</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>100,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>misc.fee (ESA.HC &lib)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>27,00</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Total</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p style={{ fontWeight: "bold" }}>1,47,700</p>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p
            style={{ textAlign: "center", width: "200px", fontWeight: "bold" }}
          >
            In Words: One Hundred Forty Seven Thousand & Seven Hundred Only{" "}
          </p>
          <p
            style={{ fontSize: "10px", textAlign: "center", marginTop: "20px" }}
          >
            payable at all branches of Habib Bank Ltd
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", width: "300px" }}>
            {" "}
            Note: fee Transfer thorough ATM/Internet banking is not allowed
          </p>
        </div>
      </div>

      <div style={{ width: "100%", border: "1px solid black", padding: "5px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div>
            <Image src={logo} width={100} height={50} alt="" />
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <h1>Invoice No </h1>
              <h1 style={{ fontWeight: "bold" }}>339008</h1>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <h1>Issue Date </h1>{" "}
              <h1 style={{ textDecoration: "underline" }}>21-sep-2020</h1>
            </div>
            <div style={{ display: "flex", gap: "17px" }}>
              <h1>Due Date</h1>{" "}
              <h1 style={{ textDecoration: "underline" }}>21-sep-2020</h1>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", width: "240px" }}>
          National universities of sciences & Tecnology sector H-12 Islamabad
        </div>
        <div>
          <h1 style={{ fontWeight: "bold" }}>Habib Bank Limited</h1>
          <div style={{ display: "flex", gap: "70px", alignItems: "center" }}>
            <h1 style={{ width: "80px" }}>A/C Title</h1>
            <p style={{ width: "150px" }}>Nust admission processing fee MCA</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "70px" }}>
            <h1 style={{ width: "80px" }}>A/C No</h1>
            <p style={{ fontWeight: "bold" }}>0042-79001976-03</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Student Name</h1>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Hilal Khan
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Father Name</h1>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Qadar Khan
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <h1 style={{ width: "150px" }}>Merit Position</h1>
            <p style={{ textDecoration: "underline" }}>1032</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Selected in</h1>
            <p style={{ textDecoration: "underline", fontSize: "8px" }}>
              CIVIL ENGINEERING (ISLAMABAD) (SCEE)
            </p>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <table border={5}>
            <tr>
              <th style={{ border: "1px solid black" }}>Description</th>
              <th style={{ border: "1px solid black" }}>Amount Rs</th>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Admission processing fee</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>35,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Security Deposit (Refundable)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>10,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Semester Tution Fee</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>100,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>misc.fee (ESA.HC &lib)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>27,00</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Total</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p style={{ fontWeight: "bold" }}>1,47,700</p>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p
            style={{ textAlign: "center", width: "200px", fontWeight: "bold" }}
          >
            In Words: One Hundred Forty Seven Thousand & Seven Hundred Only{" "}
          </p>
          <p
            style={{ fontSize: "10px", textAlign: "center", marginTop: "20px" }}
          >
            payable at all branches of Habib Bank Ltd
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", width: "300px" }}>
            {" "}
            Note: fee Transfer thorough ATM/Internet banking is not allowed
          </p>
        </div>
      </div>

      <div style={{ width: "100%", border: "1px solid black", padding: "5px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div>
            <Image src={logo} width={100} height={50} alt="" />
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <h1>Invoice No </h1>
              <h1 style={{ fontWeight: "bold" }}>339008</h1>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <h1>Issue Date </h1>{" "}
              <h1 style={{ textDecoration: "underline" }}>21-sep-2020</h1>
            </div>
            <div style={{ display: "flex", gap: "17px" }}>
              <h1>Due Date</h1>{" "}
              <h1 style={{ textDecoration: "underline" }}>21-sep-2020</h1>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", width: "240px" }}>
          National universities of sciences & Tecnology sector H-12 Islamabad
        </div>
        <div>
          <h1 style={{ fontWeight: "bold" }}>Habib Bank Limited</h1>
          <div style={{ display: "flex", gap: "70px", alignItems: "center" }}>
            <h1 style={{ width: "80px" }}>A/C Title</h1>
            <p style={{ width: "150px" }}>Nust admission processing fee MCA</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "70px" }}>
            <h1 style={{ width: "80px" }}>A/C No</h1>
            <p style={{ fontWeight: "bold" }}>0042-79001976-03</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Student Name</h1>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Hilal Khan
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Father Name</h1>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Qadar Khan
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <h1 style={{ width: "150px" }}>Merit Position</h1>
            <p style={{ textDecoration: "underline" }}>1032</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ width: "150px" }}>Selected in</h1>
            <p style={{ textDecoration: "underline", fontSize: "8px" }}>
              CIVIL ENGINEERING (ISLAMABAD) (SCEE)
            </p>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <table border={5}>
            <tr>
              <th style={{ border: "1px solid black" }}>Description</th>
              <th style={{ border: "1px solid black" }}>Amount Rs</th>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Admission processing fee</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>35,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Security Deposit (Refundable)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>10,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Semester Tution Fee</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>100,000</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>misc.fee (ESA.HC &lib)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>27,00</p>
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Total</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p style={{ fontWeight: "bold" }}>1,47,700</p>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p
            style={{ textAlign: "center", width: "200px", fontWeight: "bold" }}
          >
            In Words: One Hundred Forty Seven Thousand & Seven Hundred Only{" "}
          </p>
          <p
            style={{ fontSize: "10px", textAlign: "center", marginTop: "20px" }}
          >
            payable at all branches of Habib Bank Ltd
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", width: "300px" }}>
            {" "}
            Note: fee Transfer thorough ATM/Internet banking is not allowed
          </p>
        </div>
      </div>
    </div>
  );
});

export default PrintComponent;
