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
        // console.log(medias[index]);
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
                    <div className="flex-row">
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select_social_media">Social Media</label>
                                <select className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="SelectedMedia" onChange={(e) => handleInput(e, index)}>
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="add_sm_link">Link</label>
                                <input type="url" className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={data.SelectedMedia !== '' && data.SelectedMedia !== undefined ? (`https://www.${data.SelectedMedia.toLowerCase()}.com/`) : ('Add Social media Link')} name="SelectedMediaLink" onChange={(e) => handleInput(e, index)} />
                            </div>
                        </div>
                        {socialMedia.length > 1 && (
                            <div className="col-md-2">
                                <div className="mb-3 height100 d-flex align-items-end pb-3">
                                    <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition-all" onClick={(e) => removeSocial(e, index)}> Remove</button>
                                </div>
                            </div>
                        )}
                        <div className="col-md-12">
                            {socialMedia.length - 1 === index && (
                                <button className="text-white bg-violet-700 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900 transition-all" onClick={(e) => addMoreSocials(e)}>Add More</button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {socialMedia.length >= 0 && (
                <div className="wrapper social-media-metadata mt-3">
                    <div className="flex-row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fontSize_socialmedai"> Font Size</label>
                                <input type="range" className="form-range block w-full" onChange={(e)=> handleFontSize(e)} name="FontSize" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

};
export default Socialmedia;