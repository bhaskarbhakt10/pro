import React, { useState } from "react";
import Preview from "../preview/Preview";
import countrycodes from "../../../json/countrycode.json";
import "./form.css";
import MainBody from "./MainBody";
import Socialmedia from "./Socialmedia";
import CreateCard from "./CreateCardDB";


import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



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
    someInfo : { info:'',size:'',color:'' },
    social_media: ""

  });


  const [isCardGenrated, setIsCardGenrated] = useState(false);

  const handlelogochange = (e) => {
    const logo = e.target.files;

      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const Base64 = reader.result;
         
        setCardForm({ ...cardform, logo: Base64 });
       
      };
      reader.readAsDataURL(file);

      // console.log(Base64);

    // setCardForm({ ...cardform, logo: URL.createObjectURL(logo[0]) });
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

  const handleSomeInfo = (value)=>{
    // console.log(value);
    let previous = { ...cardform };
    previous.someInfo.info = value;
    setCardForm(previous);
  }
  const handleSomeInfosize = (value)=>{
    // console.log(value);
    let previous = { ...cardform };
    previous.someInfo.size = value;
    setCardForm(previous);
  }
  const handleSomeInfocolor = (value)=>{
    console.log(value);
    let previous = { ...cardform };
    previous.someInfo.color = value;
    setCardForm(previous);
  }

  const rand = () => {
    return Math.random().toString(36).substr(2); 
};
  const token = () => {
    return rand() + rand();
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
   
    const isCreated = await CreateCard(cardform, token());
    console.log(isCreated);
    if(isCreated === true){

        setIsCardGenrated(true);
    
    }
  };

  console.log(cardform)

  return (
    <>
      <div className="main-form">

        {isCardGenrated === false && (
        <div className="form-body">

          <form action="" method="POST" onSubmit={handlesubmit}>
            <div className="flex-row">
              <div className="col-md-12">
                <fieldset className="fieldset">
                  <legend>Global</legend>
                  <div className="flex-row">
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bg-color">Background Color</label>
                        <input
                          type="color"
                          name="bg_color"
                          id="bg-color"
                          className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                          value={cardform.bg_color}
                          onChange={handleinput}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 flex gap-x-2">
                        <input
                          type="checkbox"
                          name="bg_grad"
                          id="bg-grad"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          value={cardform.bg_grad}
                          onChange={handlecheck}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bg-grad">Background grad</label>
                      </div>
                    </div>

                    {function () {
                      if (cardform.bg_grad) {
                        return (
                          <div className="col-md-12" id="grad-flex-row">
                            <div className="flex-row">
                              <div className="col-md-2">
                                <div className="mb-3">
                                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="angle-one">Angle one</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      name="angle"
                                      id="angle"
                                      className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bg-grad-color-one">
                                    Color one
                                  </label>
                                  <input
                                    type="color"
                                    name="bg_grad_color_one"
                                    id="bg-grad-color-one"
                                    className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                    value={cardform.bg_grad_color_one}
                                    onChange={handleinput}
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="mb-3">
                                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="percet-one">Percent</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      name="percent_one"
                                      id="percent-one"
                                      className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bg-grad-color-two"></label>
                                  <input
                                    type="color"
                                    name="bg_grad_color_two"
                                    id="bg-grad-color-two"
                                    className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                    value={cardform.bg_grad_color_two}
                                    onChange={handleinput}
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="mb-3">
                                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="percet-two">Percent</label>
                                  <div className="input-group">
                                    <input
                                      type="number"
                                      name="percent_two"
                                      id="percent-two"
                                      className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      <div className="flex-row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <div className="input-group">
                              <span className="input-group-text">
                              <BsEnvelopeAtFill />
                              </span>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={cardform.email}
                                onChange={handleinput}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                            <div className="input-group">
                              <span className="input-group-text">
                              <FaPhoneFlip />
                              </span>
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={cardform.phone}
                                onChange={handleinput}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">Website</label>
                            <div className="input-group">
                              <span className="input-group-text">
                              <FaGlobe />
                              </span>
                              <input
                                type="url"
                                name="website"
                                id="website"
                                className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={cardform.website}
                                onChange={handleinput}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="business-chat">
                              Select a Business chat app
                            </label>
                            <select
                              name="bc_app"
                              id="business-chat"
                              className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                <div className="flex-row">
                                  <div className="col-md-1">
                                    <div className="bc_icon">
                                      <div className="whatsapp_icon">
                                      <FaWhatsapp/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <div className="mb-3">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp">
                                        Country Code
                                      </label>
                                      <select
                                        name="whatsapp"
                                        id="whatsapp"
                                        className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="w-number">
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
                                          className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="font-size">Icon Size</label>
                              <input
                                type="range"
                                name="font_size"
                                id="font-size"
                                className="form-range block w-full"
                                value={cardform.font_size}
                                onChange={handleinput}
                              />
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={cardform.font_size}
                                readOnly
                              />
                              <span className="input-group-text">Px</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="font-color-contact">
                              Contact Fonts Icon
                            </label>
                            <input
                              type="color"
                              name="font_color_contact"
                              id="font-color-contact"
                              className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                              value={cardform.font_color_contact}
                              onChange={handleinput}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h2 className="sub-heading">Social Media</h2>
                     
                      <Socialmedia onSocialChange={handleChild} name="social_media" />
                    </div>
                  </div>
                </fieldset>

                {/* global section  */}

                {/* logo fieldset  */}
                <fieldset className="fieldset">
                  <legend>Logo</legend>
                  <div className="col-md-12">
                    <div className="flex-row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="logo-img">Upload a Logo</label>
                          <input
                            type="file"
                            name=""
                            id="logo-img"
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2"
                            onChange={handlelogochange}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo-width">Width</label>
                          <div className="input-group">
                            <input
                              type="number"
                              name="logo_width"
                              id="logo-width"
                              className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              value={cardform.logo_width}
                              onChange={handleinput}
                            />
                            <span className="input-group-text">Px</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo-height">Height</label>
                          <div className="input-group">
                            <input
                              type="number"
                              name="logo_height"
                              id="logo-height"
                              className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              value={cardform.logo_height}
                              onChange={handleinput}
                            />
                            <span className="input-group-text">Px</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="object-fit">Object Fit </label>
                          <select
                            name="object_fit"
                            id="object-fit"
                            onChange={handleinput}
                            value={cardform.object_fit}
                            className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo-alignment">
                            Logo Alignment
                          </label>
                          <select
                            name="logo_alignment"
                            id="logo-alignment"
                            onChange={handleinput}
                            value={cardform.logo_alignment}
                            className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value="">None</option>
                            <option value="center">Center</option>
                            <option value="start">Left</option>
                            <option value="end">end</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3 flex gap-x-2">
                          <input
                            type="checkbox"
                            name="use_border"
                            id="use-border"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            defaultChecked={cardform.use_border}
                            onChange={handlecheck}
                          />
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="use-border">Use Borders</label>
                        </div>
                      </div>
                      {cardform.use_border ? (
                        <div className="flex-row">
                          <div className="col-md-3">
                            <div className="mb-3">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Border-width">
                                Border Width
                              </label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  name="border_width"
                                  id="border-width"
                                  className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  value={cardform.border_width}
                                  onChange={handleinput}
                                />
                                <span className="input-group-text">Px</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select-style">Select Style</label>
                            <select
                              name="border_style"
                              id="select-style"
                              className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="border-radius">
                                Border Radius
                              </label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  name="border_radius"
                                  id="border-radius"
                                  className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  onChange={handleinput}
                                  value={cardform.border_radius}
                                />
                                <span className="input-group-text">Px</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="border-color">Border Color</label>
                            <input
                              type="color"
                              name="border_color"
                              id="border-color"
                              className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
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
                  <div className="flex-row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                          className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                          <div className="flex-row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fl_name_color">Color</label>
                                <input type="color" name="fl_name_color" className="form-control form-color-control" onChange={handleinput} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fl_fonts">Font Size</label>
                                <input type="range" name="fl_name_fonts" className="form-range block w-full" onChange={handleinput} />
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
                          className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="desgination"
                          placeholder="designation"
                          value={cardform.desgination}
                          onChange={handleinput}
                        />
                      </div>
                      {cardform.desgination !== "" ? (
                        <div className="">
                          <div className="flex-row">
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation_color">Designation Color</label>
                                <input type="color" name="designation_color" id="designation_color" onChange={handleinput} className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation_fonts">Designation Font Size</label>
                                <input type="range" name="designation_fonts" id="designation_fonts" onChange={handleinput} className="form-range block w-full" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation_align">Alignmant</label>
                                <select className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="designation_align" onChange={handleinput} name="designation_align">
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
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="tagline"
                          placeholder="Tagline"
                          value={cardform.tagline}
                          onChange={handleinput}
                        />
                      </div>
                      {cardform.tagline !== "" ? (
                        <div className="flex-row">
                          <div className="col-md-3">
                            <div className="mb-3">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tagline_alignment">
                                Tagline Alignment
                              </label>
                              <select
                                name="tagline_alignment"
                                id="tagline_alignment"
                                className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tagline_bg">
                                Choose a Color for Bg
                              </label>
                              <input
                                type="color"
                                name="tagline_bg"
                                id="tagline_bg"
                                value={cardform.tagline_bg}
                                onChange={handleinput}
                                className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="mb-3">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tagline_fonts">Font Size</label>
                              <input
                                type="range"
                                name="tagline_fonts"
                                id="tagline_fonts"
                                onChange={handleinput}
                                className="form-range block w-full"
                                minLength={14}
                                maxLength={18}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="mb-3">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tagline_border_rad">
                                Border Radius{" "}
                              </label>
                              <input
                                type="range"
                                name="tagline_border_rad"
                                id="tagline_border_rad"
                                onChange={handleinput}
                                className="form-range block w-full"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="mb-3">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tagline_color">
                                Tagline Color{" "}
                              </label>
                              <input
                                type="color"
                                name="tagline_color"
                                id="tagline_color"
                                onChange={handleinput}
                                className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
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
             
                <MainBody onBodyChange={handleMainBodyChild} name="main_body" onMetaData={handleMetaData} someinfo={cardform.someInfo.info} someinfosize={cardform.someInfo.size} someinfocolor={cardform.someInfo.color}   
                  handleSomeInfo={handleSomeInfo}
                    handleSomeInfoSize={handleSomeInfosize}
                    handleSomeInfoColor={handleSomeInfocolor}/>

              </div>
            </div>
            <div className="mb-3">
              <button
                className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-all"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        )}

        <div className={'preview-body ' + (isCardGenrated === true ? 'mx-auto' : '')}>
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
            someInfo={cardform.someInfo}

          />
        </div>
      </div>

    </>

  );
}
export default FormBody;
