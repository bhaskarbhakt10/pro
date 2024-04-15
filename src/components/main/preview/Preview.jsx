import React from "react";
import "./preview_style.css";

import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


import { BsCheck2Circle } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function Preview(props) {

  // console

  const social_icons = { facebook: <FaFacebook />, twitter: <BsTwitterX />, instagram: <BsInstagram />, linkedin: <BsLinkedin />, github: <BsGithub />, youtube: <BsYoutube /> };

  const { info, size, color } = props.someInfo;

  console.warn(info);

  let { logo, tagline, tagline_align, tagline_bg, socialMedia, mainBody, mainBodyMetaData } = props;
  console.log(socialMedia);
  // console.log(logo);
  // console.warn(mainBodyMetaData);


  //main body heading
  let mainBodyHeading = "", mainBodyItem = "", mainBodyIcon = "";
  let mainBodyHeadingColor = "", mainBodyIconColor = "", mainBodyIconItem = "";
  if (mainBodyMetaData !== '') {
    if (mainBodyMetaData.showMeta === true && mainBodyMetaData.fonts.headingsf !== undefined) {
      mainBodyHeading = mainBodyMetaData.fonts.headingsf;
    }
    if (mainBodyMetaData.showMeta === true && mainBodyMetaData.color.headingsc !== undefined) {
      mainBodyHeadingColor = mainBodyMetaData.color.headingsc;
    }


    //main body icon heading

    if (mainBodyMetaData.showMeta === true && mainBodyMetaData.fonts.iconsf !== undefined) {
      mainBodyIcon = mainBodyMetaData.fonts.iconsf;
    }
    if (mainBodyMetaData.showMeta === true && mainBodyMetaData.color.iconsc !== undefined) {
      mainBodyIconColor = mainBodyMetaData.color.iconsc;
    }

    //main body utem 
    if (mainBodyMetaData.showMeta === true && mainBodyMetaData.fonts.itemsf !== undefined) {
      mainBodyItem = mainBodyMetaData.fonts.itemsf;
    }
    if (mainBodyMetaData.showMeta === true && mainBodyMetaData.color.itemsc !== undefined) {
      mainBodyIconItem = mainBodyMetaData.color.itemsc;
    }

  }


  // console.log(mainBodyIcon, mainBodyIconColor);

  let align_tg = '';
  if (tagline_align === 'center') {
    align_tg = "text-center";
  }
  else if (tagline_align === 'left') {
    align_tg = "text-left";
  }
  else if (tagline_align === 'right') {
    align_tg = "text-right";
  }

  return (
    <div className="preview_body">

      <div
        className={
          "box-100 " + (props.bg_color.length > 0 ? "" : "preview_box")
        }

        style={props.bg_grad ? { backgroundImage: 'linear-gradient(' + props.angle + 'deg , ' + props.bg_grad_color_one + ' ' + props.percent_one + '% ,' + props.bg_grad_color_two + ' ' + props.percent_two + '% )' } : { backgroundColor: props.bg_color !== '' ? props.bg_color : '' }}
      >
        <div className="card_header">
          {logo !== '' ? (
            <div className={props.logo_alignment}>

              <div className="card_logo inline-block">
                <img
                  src={props.logo}
                  className={
                    props.logo_width.length === 0
                      ? "max-100 default-size"
                      : "max-100"
                  }
                  width={
                    props.logo_width.length > 0 ? props.logo_width + "px" : "auto"
                  }
                  height={
                    props.logo_height.length > 0 ? props.logo_height + "px" : "auto"
                  }
                  style={{
                    objectFit: props.object_fit,
                    borderWidth: props.border_width + "px",
                    borderStyle: props.border_style,
                    borderColor: props.border_color,
                    borderRadius: props.border_radius + "px",
                    height: props.logo_height + "px",
                    width: props.logo_width + "px",
                  }}
                />
              </div>
            </div>

          ) : ''}

          {socialMedia !== '' && (
            <div className="social-media-sticky">
              <ul className="social-media social-media-list">

                {socialMedia.map((data, index) => (
                  <li style={{ fontSize: socialMedia.FontSize + 'px' }} className={`social_media_item ${data.SelectedMedia}`} key={index}><a href={data.SelectedMediaLink}>{social_icons[data.SelectedMedia]}</a></li>
                ))}
              </ul>
            </div>
          )}

        </div>
        <div className="card_body">
          <div className="text-center">
            <h1 style={{ color: props.fl_name_color, fontSize: props.fl_name_fonts + "px" }}>{props.fname} {props.lname}</h1>
          </div>
          {props.desgination !== '' ? (
            <div className={"designation_wrapper"}>
              <h2 style={{ color: props.designation_color, fontSize: props.designation_fonts + "px" }} className={"text-" + props.designation_align}>{props.desgination}</h2>

            </div>
          ) : ''}
          {props.tagline !== '' ? (
            <div className={"tagline_wrap mb-3 " + align_tg} style={{ backgroundColor: props.tagline_bg, borderRadius: props.tagline_border_rad + "px", color: props.tagline_color }} >
              <p style={{ fontSize: props.tagline_fonts + "px" }}>{props.tagline}</p>
            </div>
          ) : ''}
        </div>
        {mainBody !== '' && (
          <div className="main_body__">
            {mainBody.map((data, index) => (
              <div className="inner_wrapper main_body" key={index} id={data.ID}>
                <div className="main_body_heading">
                  <h2 className="heading" style={{ fontSize: mainBodyHeading + "px", color: mainBodyHeadingColor }}>{data.Heading}</h2>
                </div>
                <div className="main_body_list">
                  <ul>
                    {data.MoreInputs.map((moreInput, inputIndex) => (



                      <li className="flex items-center gap-x-1" key={inputIndex} style={{ fontSize: mainBodyItem + "px", color: mainBodyIconItem }}><span style={{ fontSize: mainBodyIcon + "px", color: mainBodyIconColor }}>{data.IconSelected === "1" ? <BsCheck2Circle /> : data.IconSelected === "2" && <BsTrophy />}</span>{moreInput[`input_${inputIndex}`]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )

        }
        {props.someInfo.info !== '' && (
          <div className="some-info">
            <p style={{color: props.someInfo.color , fontSize:props.someInfo.size + 'px'}}>{props.someInfo.info}</p>
          </div>
        )}

        <div className="card_footer">

          <ul className="card-contact-details">
            {props.email && (
              <li className="card_footer_icon card_footer_email">
                <a href={"mailto:" + props.email}>
                  <BsEnvelopeAtFill style={{ fontSize: props.contact_font_size + "px", color: props.contact_font_color }} />
                </a>
              </li>
            )}
            {props.phone && (
              <li className="card_footer_icon card_footer_phone">
                <a href={'tel:' + props.phone}>
                  <FaPhoneFlip style={{ fontSize: props.contact_font_size + "px", color: props.contact_font_color }} />
                </a>
              </li>
            )}
            {props.website && (
              <li className="card_footer_icon card_footer_web">
                <a href={props.website}>
                  <FaGlobe style={{ fontSize: props.contact_font_size + "px", color: props.contact_font_color }} />
                </a>
              </li>
            )}
            {
              function () {
                if (props.bc_app === "whatsapp") {
                  return (
                    <li className="card_footer_icon card_footer_web">
                      <a href={"https://api.whatsapp.com/send?phone=" + props.whatsapp_country.substring() + props.whatsapp_number}>
                        <FaWhatsapp style={{ fontSize: props.contact_font_size + "px", color: props.contact_font_color }} />
                      </a>
                    </li>
                  )
                }
                else if (props.bc_app === "slack") {

                }
                else if (props.bc_app === "discord") {

                }
                else if (props.bc_app === "telegram") {

                }
                else {
                  return ('')
                }
              }.call(this)
            }

          </ul>
        </div>
      </div>
    </div>
  );
}
export default Preview;
