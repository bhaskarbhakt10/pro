import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import ReadCardDB from "../../components/main/from/ReadCardDB";
import Preview from "../../components/main/preview/Preview";

const CardView = () => {

    const { phonenumber } = useParams();


    console.warn(phonenumber);

    const [viewCard, setViewCard] = useState(null);

    const [imageUrl, setimageUrl] = useState(null)

   

    const fetchData = async () => {
        const data = await ReadCardDB(phonenumber);

       
        console.log(data);

        if (data !== false) {
            setimageUrl(data[1]);
            setViewCard(data[0]);
        }
        else {
           
            setViewCard(null);
        }
    }

    useEffect(() => {
        fetchData();
    }, [phonenumber]);

    console.log(viewCard);

    return (
        <>
            <div className="max-w-md mx-auto">
                
                {viewCard !== null && <Preview
                    bg_color={viewCard.bg_color}
                    //grad
                    bg_grad={viewCard.bg_grad}
                    angle={viewCard.angle}
                    bg_grad_color_one={viewCard.bg_grad_color_one}
                    bg_grad_color_two={viewCard.bg_grad_color_two}
                    percent_one={viewCard.percent_one}
                    percent_two={viewCard.percent_two}
                    //grad
                    // contact
                    email={viewCard.email}
                    phone={viewCard.phone}
                    website={viewCard.website}
                    bc_app={viewCard.bc_app}
                    whatsapp_country={viewCard.whatsapp}
                    whatsapp_number={viewCard.w_number}
                    contact_font_size={viewCard.font_size}
                    contact_font_color={viewCard.font_color_contact}
                    // contact

                    data={viewCard.fname}
                    logo={imageUrl+viewCard.logo}
                    logo_width={viewCard.logo_width}
                    logo_height={viewCard.logo_height}
                    object_fit={viewCard.object_fit}
                    logo_alignment={viewCard.logo_alignment}
                    border_width={viewCard.border_width}
                    border_style={viewCard.border_style}
                    border_color={viewCard.border_color}
                    border_radius={viewCard.border_radius}


                    fname={viewCard.fname}
                    lname={viewCard.lname}
                    fl_name_color={viewCard.fl_name_color}
                    fl_name_fonts={viewCard.fl_name_fonts}

                    desgination={viewCard.desgination}
                    designation_color={viewCard.designation_color}
                    designation_fonts={viewCard.designation_fonts}
                    designation_align={viewCard.designation_align}
                    tagline={viewCard.tagline}
                    tagline_align={viewCard.tagline_alignment}
                    tagline_bg={viewCard.tagline_bg}
                    tagline_fonts={viewCard.tagline_fonts}
                    tagline_border_rad={viewCard.tagline_border_rad}
                    tagline_color={viewCard.tagline_color}

                    mainBody={viewCard.main_body}
                    mainBodyMetaData={viewCard.mainBodyMetaData}
                    socialMedia={viewCard.social_media}

                />}
            </div>

        </>
    )
}

export default CardView;