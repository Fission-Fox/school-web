import collegeLogo from "@/assets/images/bluelogo.png";
import coachingLogo from "@/assets/images/coachinglogo.png";
import juniorLogo from "@/assets/images/logo3.png";
import Image from "next/image";
import { forwardRef } from "react";
// eslint-disable-next-line

const PrintComponent = forwardRef((props: { values: any }, ref: any) => {
  const id = Math.floor((1 + Math.random()) * 0x10000);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const today: any = new Date();
  const getImage = () => {
    switch (props.values?.admissionFor) {
      case "School":
        return collegeLogo;
      case "College":
        return collegeLogo;
      case "Day Care":
        return juniorLogo;

      default:
        return coachingLogo;
    }
  };
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        fontSize: "12px !important",
        gap: "5px",
        marginTop: "10px",
      }}
    >
      <div style={{ width: "100%", border: "1px solid black", padding: "5px" }}>
        <p style={{ fontSize: "10px" }}>Bank Copy</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div>
            <Image src={getImage()} width={100} height={50} alt="" />
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>Invoice No </p>
              <p style={{ fontWeight: "bold" }}>{id}</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>Issue Date </p>{" "}
              <p style={{ textDecoration: "underline" }}>
                {today?.toLocaleDateString("en-US", options)}
              </p>
            </div>
          </div>
        </div>
        {/* <div style={{ textAlign: "center", marginBottom: '10px' }}>
          National universities of sciences & Tecnology sector H-12 Islamabad
        </div> */}
        <div>
          <p style={{ fontWeight: "bold" }}> Faisal Bank</p>
          <div style={{ display: "flex", gap: "70px", alignItems: "center" }}>
            <p style={{ width: "80px" }}>A/C Title</p>
            <p style={{ width: "150px" }}>studentszone</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "70px" }}>
            <p style={{ width: "80px" }}>A/C No</p>
            <p style={{ fontWeight: "bold" }}>02100060003675</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ width: "150px" }}>Student Name</p>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              {props.values?.firstname + " " + props.values?.lastname}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ width: "150px" }}>S/o D/o</p>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              {props.values?.sonOf}
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <p style={{ width: "150px" }}>Admission in</p>
            <p style={{ textDecoration: "underline" }}>
              {" "}
              {props.values?.admissionFor}{" "}
            </p>
          </div>
          {props.values?.admissionFor !== "Day Care" && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ width: "150px" }}>Admission For</p>
              <p style={{ textDecoration: "underline" }}>
                {props.values?.admissionType}
              </p>
            </div>
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          <table border={5}>
            <tr>
              <th style={{ border: "1px solid black" }}>Description</th>
              <th style={{ border: "1px solid black" }}>Amount Rs</th>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Admission processing fee (Adjustable)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>2,000</p>
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Total</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p style={{ fontWeight: "bold" }}>2,000</p>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            In Words: Two Thousand Only{" "}
          </p>
          <p
            style={{ fontSize: "10px", textAlign: "center", marginTop: "20px" }}
          >
            payable at all branches of Faisal Bank
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>
            {" "}
            Note: fee Transfer thorough ATM/Internet banking is allowed
          </p>
        </div>
      </div>
      <div style={{ width: "100%", border: "1px solid black", padding: "5px" }}>
        <p style={{ fontSize: "10px" }}>Student Zone Copy</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div>
            <Image src={getImage()} width={100} height={50} alt="" />
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>Invoice No </p>
              <p style={{ fontWeight: "bold" }}>{id}</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>Issue Date </p>{" "}
              <p style={{ textDecoration: "underline" }}>
                {today?.toLocaleDateString("en-US", options)}
              </p>
            </div>
          </div>
        </div>
        {/* <div style={{ textAlign: "center", marginBottom: '10px' }}>
          National universities of sciences & Tecnology sector H-12 Islamabad
        </div> */}
        <div>
          <p style={{ fontWeight: "bold" }}> Faisal Bank</p>
          <div style={{ display: "flex", gap: "70px", alignItems: "center" }}>
            <p style={{ width: "80px" }}>A/C Title</p>
            <p style={{ width: "150px" }}>studentszone</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "70px" }}>
            <p style={{ width: "80px" }}>A/C No</p>
            <p style={{ fontWeight: "bold" }}>02100060003675</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ width: "150px" }}>Student Name</p>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              {props.values?.firstname + " " + props.values?.lastname}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ width: "150px" }}>S/o D/o</p>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              {props.values?.sonOf}
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <p style={{ width: "150px" }}>Admission in</p>
            <p style={{ textDecoration: "underline" }}>
              {" "}
              {props.values?.admissionFor}{" "}
            </p>
          </div>
          {props.values?.admissionFor !== "Day Care" && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ width: "150px" }}>Admission For</p>
              <p style={{ textDecoration: "underline" }}>
                {props.values?.admissionType}
              </p>
            </div>
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          <table border={5}>
            <tr>
              <th style={{ border: "1px solid black" }}>Description</th>
              <th style={{ border: "1px solid black" }}>Amount Rs</th>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Admission processing fee (Adjustable)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>2,000</p>
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Total</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p style={{ fontWeight: "bold" }}>2,000</p>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            In Words: Two Thousand Only{" "}
          </p>
          <p
            style={{ fontSize: "10px", textAlign: "center", marginTop: "20px" }}
          >
            payable at all branches of Faisal Bank
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>
            {" "}
            Note: fee Transfer thorough ATM/Internet banking is allowed
          </p>
        </div>
      </div>
      <div style={{ width: "100%", border: "1px solid black", padding: "5px" }}>
        <p style={{ fontSize: "10px" }}>Candidate Copy</p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div>
            <Image src={getImage()} width={100} height={50} alt="" />
          </div>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>Invoice No </p>
              <p style={{ fontWeight: "bold" }}>{id}</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>Issue Date </p>{" "}
              <p style={{ textDecoration: "underline" }}>
                {today?.toLocaleDateString("en-US", options)}
              </p>
            </div>
          </div>
        </div>
        {/* <div style={{ textAlign: "center", marginBottom: '10px' }}>
          National universities of sciences & Tecnology sector H-12 Islamabad
        </div> */}
        <div>
          <p style={{ fontWeight: "bold" }}> Faisal Bank</p>
          <div style={{ display: "flex", gap: "70px", alignItems: "center" }}>
            <p style={{ width: "80px" }}>A/C Title</p>
            <p style={{ width: "150px" }}>studentszone</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "70px" }}>
            <p style={{ width: "80px" }}>A/C No</p>
            <p style={{ fontWeight: "bold" }}>02100060003675</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ width: "150px" }}>Student Name</p>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              {props.values?.firstname + " " + props.values?.lastname}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ width: "150px" }}>S/o D/o</p>
            <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
              {props.values?.sonOf}
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <p style={{ width: "150px" }}>Admission in</p>
            <p style={{ textDecoration: "underline" }}>
              {" "}
              {props.values?.admissionFor}{" "}
            </p>
          </div>
          {props.values?.admissionFor !== "Day Care" && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ width: "150px" }}>Admission For</p>
              <p style={{ textDecoration: "underline" }}>
                {props.values?.admissionType}
              </p>
            </div>
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          <table border={5}>
            <tr>
              <th style={{ border: "1px solid black" }}>Description</th>
              <th style={{ border: "1px solid black" }}>Amount Rs</th>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Admission processing fee (Adjustable)</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p>2,000</p>
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                <p>Total</p>
              </td>
              <td style={{ border: "1px solid black" }}>
                <p style={{ fontWeight: "bold" }}>2,000</p>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            In Words: Two Thousand Only{" "}
          </p>
          <p
            style={{ fontSize: "10px", textAlign: "center", marginTop: "20px" }}
          >
            payable at all branches of Faisal Bank
          </p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>
            {" "}
            Note: fee Transfer thorough ATM/Internet banking is allowed
          </p>
        </div>
      </div>
    </div>
  );
});

export default PrintComponent;
