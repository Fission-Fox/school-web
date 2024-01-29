import { forwardRef } from "react";
// eslint-disable-next-line
const PrintComponent = forwardRef((props: { data: any }, ref: any) => {
  const id = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  return (
    <div ref={ref}>
      <div
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
      </div>
    </div>
  );
});

export default PrintComponent;
