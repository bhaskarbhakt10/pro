import React, { useEffect, useState } from "react";

const MainBody = (props) => {
    const { onBodyChange, name,onMetaData, handleSomeInfoSize, handleSomeInfoColor, handleSomeInfo:someInfoParent } = props;
    const [sections, setSections] = useState([
        {
            ID: 0,
            Heading: '',
            IconSelected: '',
            MoreInputs: [{ moreinput_text: "" }],
        },
    ]);

    let [metadata, setMetadata] = useState({ showMeta: false, fonts:{}, color:{} });

    const [someInfo , setSomeInfo] = useState({info:'', infosize:'',infocolor:''});

    // console.log(props);
    // console.log(sections);

    const duplicateMain = (e, mainIndex) => {
        e.preventDefault();
        const newSection = {
            ID: sections.length,
            Heading: '',
            IconSelected: '',
            MoreInputs: [{ moreinput_text: "" }],
        };
        const updatedSections = [...sections, newSection];
        setSections(updatedSections);
        // onBodyChange(sections, name);
    };


    const headingChange = (e, mainIndex) => {
        const { value, name } = e.target;
        const updatedHeading = [...sections];
        updatedHeading[mainIndex][name] = value;
        setSections(updatedHeading);
        // console.log(updatedHeading);
        onBodyChange(sections, name);
    }

    const addItems = (e, mainIndex, inputIndex) => {
        e.preventDefault();
        const previousState = [...sections];
        const newInput = { moreinput_text: '', };
        previousState[mainIndex].MoreInputs = [...previousState[mainIndex].MoreInputs, newInput];
        setSections(previousState);
        // onBodyChange(sections, name);
    }

    const dynamicInput = (e, mainIndex, inputIndex) => {
        const { value, name } = e.target;
        const updatedSections = [...sections];
        updatedSections[mainIndex].MoreInputs[inputIndex].moreinput_text = name;
        updatedSections[mainIndex].MoreInputs[inputIndex][name] = value;
        setSections(updatedSections);
        onBodyChange(sections, name);

    }

    const removeItems = (e, mainIndex, inputIndex) => {
        e.preventDefault();
        const section = [...sections];
        section[mainIndex].MoreInputs.splice(inputIndex, 1);
        setSections(section);
        onBodyChange(section, name);
    }

    // useEffect(() => {

    //     onBodyChange(sections);
    //   }, [sections, onBodyChange]);

    const showMeta = (e) => {
        let prevData = { ...metadata };
        let checked = e.target.checked;
        // console.log(checked);
        prevData.showMeta = checked;
        setMetadata(prevData);
        onMetaData(prevData)
    }
    
    const metaFonstSize = (e)=>{
        const {name , value} = e.target;
        let prevState = {...metadata};
        prevState.fonts[name] =value;
        setMetadata(prevState);
        onMetaData(prevState)
    }
    
    const metaColors = (e)=>{
        const {name , value} = e.target;
        let prevState = {...metadata};
        prevState.color[name] =value;
        setMetadata(prevState);
        onMetaData(prevState)
    }

    const handleSomeInfo = (e) => {
        const { name, value } = e.target;
        // console.warn(name, value);
        const prevState = { ...someInfo };
        prevState[name] = value;
        setSomeInfo(prevState);
        someInfoParent(value);
    };
    
    const handleInfoSize = (e) => {
        const { name, value } = e.target;
        // console.warn(name, value);
        const prevState = { ...someInfo };
        prevState[name] = value;
        setSomeInfo(prevState);
        handleSomeInfoSize(value)
      
    };
    
    const handleInfoColor = (e) => {
        const { name, value } = e.target;
        // console.warn(name, value);
        const prevState = { ...someInfo };
        prevState[name] = value;
        setSomeInfo(prevState);
        handleSomeInfoColor(value)
      
    };
    

    // console.log(someInfo);
    return (
        <fieldset className="fieldset">
            <legend>Main Body</legend>
            <div className="flex-row">
                <div className="col-md-12">
                    {sections.map((data, mainIndex) => (
                        <div className="body_wrapper mb-3" key={mainIndex} >
                            <div className="mb-3">
                                <input type="text" className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="Heading" value={data.Heading} onChange={(e) => headingChange(e, mainIndex)} />
                            </div>
                            <div className="mb-3">
                                <select className=" border shadow  text-gray-700 text-sm rounded-lg block w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="IconSelected" onChange={(e) => headingChange(e, mainIndex)}>
                                    <option value="">Select an Icon</option>
                                    <option value="1">Tick mark</option>
                                    <option value="2">Trophy</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="more-inputs-wrapper">
                            {Object.entries(data.MoreInputs).map(([inputKey, inputVal], inputIndex) => (
                                <div className="wrapperMoreInputs wrapper" key={inputIndex}>
                                    <div className="flex gap-x-2 flex-row__">
                                        <div className="flex-element mb-2">
                                            <input className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name={`input_${inputIndex}`} placeholder={`Item ${inputIndex + 1}`} required onChange={(e) => dynamicInput(e, mainIndex, inputIndex)} />
                                        </div>
                                        {data.MoreInputs.length > 1 ? (
                                            <div className="">
                                                <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition-all" onClick={(e) => removeItems(e, mainIndex, inputIndex)}>Remove</button>
                                            </div>
                                        ) : ('')}
                                    </div>
                                    {data.MoreInputs.length - 1 === inputIndex ? (
                                        <div className="mt-2">
                                            <button className="text-white bg-violet-700 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900 transition-all" onClick={(e) => addItems(e, mainIndex, inputIndex)}>Add Items</button>
                                        </div>
                                    ) : ('')}
                                </div>
                            ))}
                            </div>

                            <div className="mt-2 text-end">
                                <button
                                    className="text-white bg-violet-700 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900 transition-all"
                                    onClick={(e) => duplicateMain(e, mainIndex)}
                                >
                                    Add Details
                                </button>
                            </div>
                        </div>
                    ))}

                </div>

                

                <div className="col-md-12">
                    <div className="mb-3 flex gap-x-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="showmeta" onChange={(e) => showMeta(e)} />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="showmeta">I want to change color and Sizes </label>
                    </div>
                </div>
                {metadata.showMeta === true && (
                    <>
                        <div className="col-md-4">
                            <div className="flex-row">
                                <div className="col-md-12">
                                    <h3>Heading</h3>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Font Size</label>
                                        <input type="range" className="form-range block w-full" onChange={(e)=>metaFonstSize(e)} name="headingsf" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Color</label>
                                        <input type="color" className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none" onChange={(e)=>metaColors(e)} name="headingsc"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="flex-row">
                                <div className="col-md-12">
                                    <h3>Items</h3>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Font Size</label>
                                        <input type="range" className="form-range block w-full" onChange={(e)=>metaFonstSize(e)}  name="itemsf"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Color</label>
                                        <input type="color" className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none" onChange={(e)=>metaColors(e)} name="itemsc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="flex-row">
                                <div className="col-md-12">
                                    <h3>Icon</h3>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Font Size</label>
                                        <input type="range" className="form-range block w-full" onChange={(e)=>metaFonstSize(e)} name="iconsf"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Color</label>
                                        <input type="color" className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none" onChange={(e)=>metaColors(e)} name="iconsc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}


<div className="col-md-12">
                    <div className="mb-5">
                    <label htmlFor="some-info" className="block text-gray-700 text-sm font-bold mb-2"> Add Some Info </label>
                    <textarea onChange={handleSomeInfo} value={someInfo.info} name="info" id="some-info" cols="" rows="5" className="form-control form-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="infosize">Font Size</label>
                        <input type="range" id="infosize" className="form-range block w-full" onChange={handleInfoSize} name="infosize" value={someInfo.infosize} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="infocolor">Font Color</label>
                        <input type="color" onChange={handleInfoColor} value={someInfo.infocolor} name="infocolor" id="infocolor" class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none" />
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default MainBody;
