import React, { useState } from "react";
import Preview from "../preview/Preview";
// import countrycodes from "../../../json/countrycode.json";
import "./form.css";
import MainBody from "./MainBody";
import Socialmedia from "./Socialmedia";
import CreateCard from "./CreateCardDB";


// import { Editor } from '@tinymce/tinymce-react';

function FormBody() {
  const [cardform, setCardForm] = useState({
    bg_color: "",
    bg_grad: false,
    angle: "",
    bg_grad_color_one: "",
    percent_one: "",
    bg_grad_color_two: "",
    percent_two: "",

    email: "",
    phone: "",
    website: "",

    bc_app: "",
    whatsapp: "",
    w_number: "",

    font_size: "",
    font_color_contact: "",

    logo: "",
    logo_width: "",
    logo_height: "",
    object_fit: "",
    logo_alignment: "",
    use_border: false,
    border_width: "",
    border_style: "",
    border_color: "",
    border_radius: "",


    fname: "",
    lname: "",
    fl_name_color: "",
    fl_name_fonts: "",
    desgination: "",
    designation_color: "",
    designation_fonts: "",
    designation_align: "",
    tagline: "",
    tagline_alignment: "",
    tagline_bg: "",
    tagline_fonts: "",
    tagline_border_rad: "",
    tagline_color: "",

    main_body: "",
    mainBodyMetaData: "",
    social_media: ""

  });


  const handlelogochange = (e) => {
    const logo = e.target.files;
    // console.log(logo);
    setCardForm({ ...cardform, logo: URL.createObjectURL(logo[0]) });
  };

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setCardForm({ ...cardform, [name]: value });
  };

  const handlecheck = (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    // console.log(name, value);
    setCardForm({ ...cardform, [name]: value });
  };


  const handleChild = (value, name) => {
    let previous = { ...cardform }
    //  console.log(previous);
    previous.social_media = value;
    setCardForm(previous);
  }
  const handleMainBodyChild = (value, name) => {
    let previous = { ...cardform }
    //  console.log(previous);
    previous.main_body = value;
    setCardForm(previous);
  }

  const handleMetaData = (value) => {
    let previous = { ...cardform };
    previous.mainBodyMetaData = value;
    setCardForm(previous);
  }


  const handlesubmit = (e) => {
    const token = localStorage.getItem('token');
    CreateCard(cardform,token);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="form_body">
            <form action="server.php" method="POST">
              <div className="row">
                <div className="col-md-12">
                  <fieldset className="fieldset">
                    <legend>Global</legend>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="bg-color">Background Color</label>
                          <input
                            type="color"
                            name="bg_color"
                            id="bg-color"
                            className="form-control form-control-color"
                            value={cardform.bg_color}
                            onChange={handleinput}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="bg-color">Background grad</label>
                          <input
                            type="checkbox"
                            name="bg_grad"
                            id="bg-grad"
                            className="form-check-input"
                            value={cardform.bg_grad}
                            onChange={handlecheck}
                          />
                        </div>
                      </div>

                      {function () {
                        if (cardform.bg_grad) {
                          return (
                            <div className="col-md-12" id="grad-row">
                              <div className="row">
                                <div className="col-md-2">
                                  <div className="mb-3">
                                    <label htmlFor="angle-one">Angle one</label>
                                    <div className="input-group">
                                      <input
                                        type="number"
                                        name="angle"
                                        id="angle"
                                        className="form-control"
                                        onChange={handleinput}
                                        value={cardform.angle}
                                      />
                                      <span className="input-group-text">
                                        deg
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="mb-3">
                                    <label htmlFor="bg-grad-color-one">
                                      Color one
                                    </label>
                                    <input
                                      type="color"
                                      name="bg_grad_color_one"
                                      id="bg-grad-color-one"
                                      className="form-control form-control-color"
                                      value={cardform.bg_grad_color_one}
                                      onChange={handleinput}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="mb-3">
                                    <label htmlFor="percet-one">Percent</label>
                                    <div className="input-group">
                                      <input
                                        type="number"
                                        name="percent_one"
                                        id="percent-one"
                                        className="form-control"
                                        onChange={handleinput}
                                        value={cardform.percent_one}
                                      />
                                      <span className="input-group-text">
                                        %
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="mb-3">
                                    <label htmlFor="bg-grad-color-two"></label>
                                    <input
                                      type="color"
                                      name="bg_grad_color_two"
                                      id="bg-grad-color-two"
                                      className="form-control form-control-color"
                                      value={cardform.bg_grad_color_two}
                                      onChange={handleinput}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="mb-3">
                                    <label htmlFor="percet-two">Percent</label>
                                    <div className="input-group">
                                      <input
                                        type="number"
                                        name="percent_two"
                                        id="percent-two"
                                        className="form-control"
                                        onChange={handleinput}
                                        value={cardform.percent_two}
                                      />
                                      <span className="input-group-text">
                                        %
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      }.call(this)}
                      <div className="col-md-12">
                        <h2 className="sub-heading">Contact Details</h2>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="email">Email</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="fa fa-envelope"></i>
                                </span>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="form-control"
                                  value={cardform.email}
                                  onChange={handleinput}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="phone">Phone</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="fa fa-phone"></i>
                                </span>
                                <input
                                  type="tel"
                                  name="phone"
                                  id="phone"
                                  className="form-control"
                                  value={cardform.phone}
                                  onChange={handleinput}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="website">Website</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="fa fa-globe"></i>
                                </span>
                                <input
                                  type="url"
                                  name="website"
                                  id="website"
                                  className="form-control"
                                  value={cardform.website}
                                  onChange={handleinput}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="business-chat">
                                Select a Business chat app
                              </label>
                              <select
                                name="bc_app"
                                id="business-chat"
                                className="form-select"
                                onChange={handleinput}
                              >
                                <option value="">None</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="slack">Slack</option>
                                <option value="discord">Discord</option>
                                <option value="telegram">Telegram</option>
                              </select>
                            </div>
                          </div>
                          {function () {
                            if (cardform.bc_app === "whatsapp") {
                              return (
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-1">
                                      <div className="bc_icon">
                                        <div className="whatsapp_icon">
                                          <i className="fab fa-whatsapp"></i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-5">
                                      <div className="mb-3">
                                        <label htmlFor="whatsapp">
                                          Country Code
                                        </label>
                                        <select
                                          name="whatsapp"
                                          id="whatsapp"
                                          className="form-select"
                                          value={cardform.whatsapp}
                                          onChange={handleinput}
                                        >
                                          <option value="">None</option>
                                          {countrycodes &&
                                            countrycodes.map((w) => (
                                              <option value={w.dial_code}>
                                                {w.name}
                                              </option>
                                            ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="w-number">
                                          Whatsapp Number
                                        </label>
                                        <div className="input-group">
                                          <span className="input-group-text">
                                            {cardform.whatsapp
                                              ? cardform.whatsapp
                                              : "+91"}
                                          </span>
                                          <input
                                            type="tel"
                                            name="w_number"
                                            id="w-number"
                                            className="form-control"
                                            onChange={handleinput}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            } else if (cardform.bc_app === "slack") {
                              return <div className="col-md-12"></div>;
                            } else if (cardform.bc_app === "discord") {
                              return <div className="col-md-12"></div>;
                            } else if (cardform.bc_app === "telegram") {
                              return <div className="col-md-12"></div>;
                            } else {
                              return "";
                            }
                          }.call(this)}

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="font-size">Icon Size</label>
                              <div className="input-group">
                                <input
                                  type="range"
                                  name="font_size"
                                  id="font-size"
                                  className="form-range"
                                  value={cardform.font_size}
                                  onChange={handleinput}
                                />
                                <input
                                  type="number"
                                  className="form-control"
                                  value={cardform.font_size}
                                  readOnly
                                />
                                <span className="input-group-text">Px</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="font-color-contact">
                                Contact Fonts Icon
                              </label>
                              <input
                                type="color"
                                name="font_color_contact"
                                id="font-color-contact"
                                className="form-control form-control-color"
                                value={cardform.font_color_contact}
                                onChange={handleinput}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <h2 className="sub-heading">Social Media</h2>
                        {/* <div className="wrap-social-media">
                          <div className="row social-media-row">
                            <div className="col-md-4">
                              <div className="mb-3">
                                <select
                                  name="socialmediaoption"
                                  id=""
                                  className="form-select"
                                >
                                  <option value="">1</option>
                                  <option value="">2</option>
                                  <option value="">3</option>
                                  <option value="">4</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <input
                                  type="url"
                                  name="socialmedialink"
                                  id=""
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <button
                                  className="btn btn-primary mx-2"
                                // onClick={addSocialMedia}
                                >
                                  Add
                                </button>
                                <button
                                  className="btn btn-danger mx-2"
                                  onClick={removeSocialMedia}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <Socialmedia onSocialChange={handleChild} name="social_media" />
                      </div>
                    </div>
                  </fieldset>

                  {/* global section  */}

                  {/* logo fieldset  */}
                  <fieldset className="fieldset">
                    <legend>Logo</legend>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="logo-img">Upload a Logo</label>
                            <input
                              type="file"
                              name=""
                              id="logo-img"
                              className="form-control"
                              onChange={handlelogochange}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="logo-width">Width</label>
                            <div className="input-group">
                              <input
                                type="number"
                                name="logo_width"
                                id="logo-width"
                                className="form-control"
                                value={cardform.logo_width}
                                onChange={handleinput}
                              />
                              <span className="input-group-text">Px</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="logo-height">Height</label>
                            <div className="input-group">
                              <input
                                type="number"
                                name="logo_height"
                                id="logo-height"
                                className="form-control"
                                value={cardform.logo_height}
                                onChange={handleinput}
                              />
                              <span className="input-group-text">Px</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="object-fit">Object Fit </label>
                            <select
                              name="object_fit"
                              id="object-fit"
                              onChange={handleinput}
                              value={cardform.object_fit}
                              className="form-select"
                            >
                              <option value="">None</option>
                              <option value="cover">cover</option>
                              <option value="contain">contain</option>
                              <option value="fill">Fill</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="logo-alignment">
                              Logo Alignment
                            </label>
                            <select
                              name="logo_alignment"
                              id="logo-alignment"
                              onChange={handleinput}
                              value={cardform.logo_alignment}
                              className="form-select"
                            >
                              <option value="">None</option>
                              <option value="center">Center</option>
                              <option value="start">Left</option>
                              <option value="end">end</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="mb-3">
                            <input
                              type="checkbox"
                              name="use_border"
                              id="use-border"
                              className="form-check-input"
                              defaultChecked={cardform.use_border}
                              onChange={handlecheck}
                            />
                            <label htmlFor="use-border">Use Borders</label>
                          </div>
                        </div>
                        {cardform.use_border ? (
                          <div className="row">
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="Border-width">
                                  Border Width
                                </label>
                                <div className="input-group">
                                  <input
                                    type="number"
                                    name="border_width"
                                    id="border-width"
                                    className="form-control"
                                    value={cardform.border_width}
                                    onChange={handleinput}
                                  />
                                  <span className="input-group-text">Px</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="select-style">Select Style</label>
                              <select
                                name="border_style"
                                id="select-style"
                                className="form-select"
                                value={cardform.border_style}
                                onChange={handleinput}
                              >
                                <option value="">None</option>
                                <option value="solid">Solid</option>
                                <option value="Dashed">Dashed</option>
                                <option value="Dotted">Dotted</option>
                              </select>
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="border-radius">
                                  Border Radius
                                </label>
                                <div className="input-group">
                                  <input
                                    type="number"
                                    name="border_radius"
                                    id="border-radius"
                                    className="form-control"
                                    onChange={handleinput}
                                    value={cardform.border_radius}
                                  />
                                  <span className="input-group-text">Px</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="border-color">Border Color</label>
                              <input
                                type="color"
                                name="border_color"
                                id="border-color"
                                className="form-control form-control-color"
                                onChange={handleinput}
                                value={cardform.border_color}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </fieldset>
                  {/* logo fieldset  */}
                  {/* Profile Details */}
                  <fieldset className="fieldset">
                    <legend>Profile Details</legend>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            placeholder="First Name"
                            required
                            value={cardform.fname}
                            onChange={handleinput}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="lname"
                            placeholder="Last Name"
                            value={cardform.lname}
                            onChange={handleinput}
                          />
                        </div>
                      </div>
                      {
                        cardform.fname !== '' || cardform.lname !== '' ? (
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label htmlFor="fl_name_color">Color</label>
                                  <input type="color" name="fl_name_color" className="form-control form-color-control" onChange={handleinput} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label htmlFor="fl_fonts">Font Size</label>
                                  <input type="range" name="fl_name_fonts" className="form-range" onChange={handleinput} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                      <div className="col-md-12">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="desgination"
                            placeholder="designation"
                            value={cardform.desgination}
                            onChange={handleinput}
                          />
                        </div>
                        {cardform.desgination !== "" ? (
                          <div className="">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="mb-3">
                                  <label htmlFor="designation_color">Designation Color</label>
                                  <input type="color" name="designation_color" id="designation_color" onChange={handleinput} className="form-control form-control-color" />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="mb-3">
                                  <label htmlFor="designation_fonts">Designation Font Size</label>
                                  <input type="range" name="designation_fonts" id="designation_fonts" onChange={handleinput} className="form-range" />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="mb-3">
                                  <label htmlFor="designation_align">Alignmant</label>
                                  <select className="form-select" id="designation_align" onChange={handleinput} name="designation_align">
                                    <option value="">Select an Alignment</option>
                                    <option value="center">Center</option>
                                    <option value="left">Left</option>
                                    <option value="right">Right</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="tagline"
                            placeholder="Tagline"
                            value={cardform.tagline}
                            onChange={handleinput}
                          />
                        </div>
                        {cardform.tagline !== "" ? (
                          <div className="row">
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="tagline_alignment">
                                  Tagline Alignment
                                </label>
                                <select
                                  name="tagline_alignment"
                                  id="tagline_alignment"
                                  className="form-select"
                                  onChange={handleinput}
                                >
                                  <option value="">Select an alignment</option>
                                  <option value="center">Center</option>
                                  <option value="left">Left</option>
                                  <option value="right">Right</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="tagline_bg">
                                  Choose a Color for Bg
                                </label>
                                <input
                                  type="color"
                                  name="tagline_bg"
                                  id="tagline_bg"
                                  value={cardform.tagline_bg}
                                  onChange={handleinput}
                                  className="form-control form-control-color"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="tagline_fonts">Font Size</label>
                                <input
                                  type="range"
                                  name="tagline_fonts"
                                  id="tagline_fonts"
                                  onChange={handleinput}
                                  className="form-range"
                                  minLength={14}
                                  maxLength={18}
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="tagline_border_rad">
                                  Border Radius{" "}
                                </label>
                                <input
                                  type="range"
                                  name="tagline_border_rad"
                                  id="tagline_border_rad"
                                  onChange={handleinput}
                                  className="form-range"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="tagline_color">
                                  Tagline Color{" "}
                                </label>
                                <input
                                  type="color"
                                  name="tagline_color"
                                  id="tagline_color"
                                  onChange={handleinput}
                                  className="form-control form-control-color"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                    </div>
                  </fieldset>
                  {/* <fieldset className="fieldset">
                    <legend>Main Body</legend>
                    <div className="row">
                      <button onClick={socialMedia}>Add</button>
                      {
                        cardform.social_media.map((data, i) => {
                          return (
                            <div>
                              <input type="text" name={`dynamicInput_${i}`}
                                onChange={(event) => socialMediaInput(event, i)} value={data} />
                            </div>
                          )
                        })
                      }
                    </div>
                  </fieldset> */}
                  {/* <fieldset className="fieldset">
                    <legend>Main Body</legend>
                    <div className="row">
                      <div className="col-md-12">
                        {mainBody.map((body, i)=>(
                        <div className="wrapper_body" key={i}>
                          <div className="mb-3">
                            <label htmlFor="heading_mb">Heading</label>
                            <input type="text" className="form-control" id="heading_mb" placeholder="Specialization"/>
                          </div>
                          <div className="mb-3">
                          <select className="form-select" name="more_input_icon" onChange={handleinput}>
                                    <option value="">Choose an Icon</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                  </select>
                          </div>
                          {moreinput.map((singleinput, index) => (
                            <div className="wrapper_more_inputs" key={index}>
                              <div className="d-flex flex-row__" >
                                <div className="flex-element">
                                  <input type="text" className="form-control" name="moreinput_text" value={singleinput.moreinput_text} onChange={(e)=>HandleMoreInputs(e,index)} placeholder={`Item${index+1}`}/>
                                </div>
                                <div className="flex-element">
                                  { moreinput.length >1 ? (
                                    <button className="btn btn-danger" onClick={() => removeThisInput(index)}>Remove</button>

                                  ):('')}
                                </div>
                              </div>
                              <div className="mt-2">
                                {moreinput.length - 1 === index ? (
                                  <button className="btn btn-primary" onClick={addMoreInput}>Add More</button>
                                ) : ('')}
                              </div>
                            </div>
                          ))}


                          <div className="mt-2 text-end">
                          {mainBody.length + 1 > 1 && mainBody.length+1 <=2 ? (
                              <button className="btn btn-primary" onClick={DuplicateBody}>Add More Body</button>
                              ) : ('') }
                              {mainBody.length > 1 ? (
                              <button className="btn btn-danger" onClick={(e)=>RemoveDuplicateBody(e, i)}>Remove Body</button>
                              ):('')}
                            </div>
                        </div>
                          ))}
                      </div>
                    </div>
                  </fieldset> */}

                  <MainBody onBodyChange={handleMainBodyChild} name="main_body" onMetaData={handleMetaData} />

                </div>
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handlesubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <Preview
            bg_color={cardform.bg_color}
            //grad
            bg_grad={cardform.bg_grad}
            angle={cardform.angle}
            bg_grad_color_one={cardform.bg_grad_color_one}
            bg_grad_color_two={cardform.bg_grad_color_two}
            percent_one={cardform.percent_one}
            percent_two={cardform.percent_two}
            //grad
            // contact
            email={cardform.email}
            phone={cardform.phone}
            website={cardform.website}
            bc_app={cardform.bc_app}
            whatsapp_country={cardform.whatsapp}
            whatsapp_number={cardform.w_number}
            contact_font_size={cardform.font_size}
            contact_font_color={cardform.font_color_contact}
            // contact

            data={cardform.fname}
            logo={cardform.logo}
            logo_width={cardform.logo_width}
            logo_height={cardform.logo_height}
            object_fit={cardform.object_fit}
            logo_alignment={cardform.logo_alignment}
            border_width={cardform.border_width}
            border_style={cardform.border_style}
            border_color={cardform.border_color}
            border_radius={cardform.border_radius}


            fname={cardform.fname}
            lname={cardform.lname}
            fl_name_color={cardform.fl_name_color}
            fl_name_fonts={cardform.fl_name_fonts}

            desgination={cardform.desgination}
            designation_color={cardform.designation_color}
            designation_fonts={cardform.designation_fonts}
            designation_align={cardform.designation_align}
            tagline={cardform.tagline}
            tagline_align={cardform.tagline_alignment}
            tagline_bg={cardform.tagline_bg}
            tagline_fonts={cardform.tagline_fonts}
            tagline_border_rad={cardform.tagline_border_rad}
            tagline_color={cardform.tagline_color}

            mainBody={cardform.main_body}
            mainBodyMetaData={cardform.mainBodyMetaData}
            socialMedia={cardform.social_media}

          />
        </div>
      </div>
    </div>
  );
}
export default FormBody;
