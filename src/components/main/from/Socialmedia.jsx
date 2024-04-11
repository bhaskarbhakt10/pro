import React, { useState } from "react";



const Socialmedia = (props) => {

    const { onSocialChange, name: childName } = props

    const socials_options = ['Facebook', 'Instagram', 'Linkedin', 'Youtube', 'Github', 'Twitter'];

    const [socialMedia, setSocialMedia] = useState([{
        SelectedMedia: '',
        SelectedMediaLink: '',
        FontSize: ''
    }]);

    // console.log(socialMedia);

    const addMoreSocials = (e) => {
        e.preventDefault();
        const medias = [...socialMedia];
        const newmedia_row = { SelectedIcon: '', SelectedMediaLink: '',FontSize:'' };
        const updated_media = [...medias, newmedia_row]
        setSocialMedia(updated_media);
        onSocialChange(updated_media, childName);
    }

    const handleInput = (e, index) => {
        const { name, value } = e.target;
        const medias = [...socialMedia];
        medias[index][name] = value;
        setSocialMedia(medias);
        onSocialChange(medias, childName);
    }

    const removeSocial = (e, index) => {
        e.preventDefault();
        const medias = [...socialMedia];
        console.log(medias[index]);
        medias.splice(index, 1);
        setSocialMedia(medias);
        onSocialChange(medias, childName);
    }

    const handleFontSize = (e)=>{
        const { name , value} = e.target;
        const prev = [...socialMedia];
        prev[name] = value;
        setSocialMedia(prev);
        onSocialChange(prev, childName);
    }


    // const getSelectableOptions = () => {
    //     return socials_options.filter(option => {
    //         const alreadySelected = socialMedia.some(data => data.SelectedMedia === option);
    //         return !alreadySelected ;
    //     });
    // };
    // console.log(getSelectableOptions());




    return (
        <>
            {socialMedia.map((data, index) => (
                <div className="social_media_Wrapper Wrapper" key={index} >
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="select_social_media">Social Media</label>
                                <select className="form-select" name="SelectedMedia" onChange={(e) => handleInput(e, index)}>
                                    <option hidden> Select an Item </option>

                                    {socials_options.map((element, index) => {
                                        const isSelected = socialMedia.some((key) => key.SelectedMedia === element.toLocaleLowerCase())
                                        return (
                                            <option value={element.toLowerCase()} key={index} hidden={isSelected}>{element}</option>
                                        )

                                    })


                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="mb-3">
                                <label htmlFor="add_sm_link">Link</label>
                                <input type="url" className="form-control" placeholder={data.SelectedMedia !== '' && data.SelectedMedia !== undefined ? (`https://www.${data.SelectedMedia.toLowerCase()}.com/`) : ('Add Social media Link')} name="SelectedMediaLink" onChange={(e) => handleInput(e, index)} />
                            </div>
                        </div>
                        {socialMedia.length > 1 && (
                            <div className="col-md-2">
                                <div className="mb-3 height100 d-flex align-items-end pb-3">
                                    <button className="btn btn-danger" onClick={(e) => removeSocial(e, index)}> Remove</button>
                                </div>
                            </div>
                        )}
                        <div className="col-md-12">
                            {socialMedia.length - 1 === index && (
                                <button className="btn btn-primary" onClick={(e) => addMoreSocials(e)}>Add More</button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {socialMedia.length >= 0 && (
                <div className="wrapper social-media-metadata mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="fontSize_socialmedai"> Font Size</label>
                                <input type="range" className="form-range" onChange={(e)=> handleFontSize(e)} name="FontSize" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

};
export default Socialmedia;