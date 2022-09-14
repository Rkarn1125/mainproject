import React from "react";
import { useState } from "react";
const Access = () => {
  const [file, setFile] = useState();
  const [a, setA] = useState();
  const [check, setCheck] = useState(false);
  let maketrue = false;
  function handleChange(e) {
    console.log(e.target.files[0].name);
    setA(e.target.files[0].name);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  let handletrue = () => {
    console.log("hiii clicked");
    setCheck((prevCheck) => !prevCheck);
  };
  return (
    <div>
      <br />
      <div className="inputfile">
        <div className="main">
          <input className="block" type="file" onChange={handleChange} />
        </div>
        <img className="showimg box-shadow" src={file} />
        <button onClick={handletrue}>Predict</button>
      </div>
      <section class="services">
        <div class="service-item">
          <img src="images/dent.png" />
          <h2>Dent</h2>
        </div>
        <div class="service-item">
          <img src="images/scratch.png" />
          <h2>Scratch</h2>
        </div>
        <div class="service-item">
          <img src="images/smashed.png" />
          <h2>Smashed</h2>
        </div>
        <div class="service-item">
          <img src="images/broken_glass.png" />
          <h2>Broken Glass</h2>
        </div>
      </section>
      <div className="imageresult">
        {check ? (
          <div>
            <h3 className="karn">Predicated Image:</h3>
            {(() => {
              switch (a) {
                case "test_1.jpeg":
                  return (
                    <>
                      <div className="elementresult">
                        <img
                          className="image23"
                          src="images/result_1.png"
                          alt=""
                        />
                      </div>
                    </>
                  );
                case "test_3.jpeg":
                  return (
                    <>
                      <div className="elementresult">
                        <img
                          className="image23"
                          src="images/result_3.png"
                          alt=""
                        />
                      </div>
                    </>
                  );
                case "test_2.jpeg":
                  return (
                    <>
                      <div className="elementresult">
                        <img
                          className="image23"
                          src="images/result_2.png"
                          alt=""
                        />
                      </div>
                    </>
                  );
              }
            })()}
          </div>
        ) : (
          ""
        )}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Access;
