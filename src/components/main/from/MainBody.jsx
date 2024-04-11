import React, { useEffect, useState } from "react";

const MainBody = (props) => {
    const { onBodyChange, name,onMetaData } = props;
    const [sections, setSections] = useState([
        {
            ID: 0,
            Heading: '',
            IconSelected: '',
            MoreInputs: [{ moreinput_text: "" }],
        },
    ]);

    let [metadata, setMetadata] = useState({ showMeta: false, fonts:{}, color:{} });

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
        console.log(updatedHeading);
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
        console.log(checked);
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


    // console.log(metadata);
    return (
        <fieldset className="fieldset">
            <legend>Main Body</legend>
            <div className="row">
                <div className="col-md-12">
                    {sections.map((data, mainIndex) => (
                        <div className="body_wrapper mb-3" key={mainIndex} >
                            <div className="mb-3">
                                <input type="text" className="form-control" name="Heading" value={data.Heading} onChange={(e) => headingChange(e, mainIndex)} />
                            </div>
                            <div className="mb-3">
                                <select className="form-select" name="IconSelected" onChange={(e) => headingChange(e, mainIndex)}>
                                    <option value="">Select an Icon</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            {Object.entries(data.MoreInputs).map(([inputKey, inputVal], inputIndex) => (
                                <div className="wrapperMoreInputs wrapper" key={inputIndex}>
                                    <div className="d-flex flex-row__">
                                        <div className="flex-element mb-2">
                                            <input className="form-control" name={`input_${inputIndex}`} placeholder={`Item ${inputIndex + 1}`} required onChange={(e) => dynamicInput(e, mainIndex, inputIndex)} />
                                        </div>
                                        {data.MoreInputs.length > 1 ? (
                                            <div className="flex-element">
                                                <button className="btn btn-danger" onClick={(e) => removeItems(e, mainIndex, inputIndex)}>Remove</button>
                                            </div>
                                        ) : ('')}
                                    </div>
                                    {data.MoreInputs.length - 1 === inputIndex ? (
                                        <div className="mt-2">
                                            <button className="btn btn-primary" onClick={(e) => addItems(e, mainIndex, inputIndex)}>Add Items</button>
                                        </div>
                                    ) : ('')}
                                </div>
                            ))}

                            <div className="mt-2 text-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={(e) => duplicateMain(e, mainIndex)}
                                >
                                    Add Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-md-12">
                    <div className="mb-3">
                        <input type="checkbox" className="form-check-input me-2" id="showmeta" onChange={(e) => showMeta(e)} />
                        <label htmlFor="showmeta">I want to change color and Sizes </label>
                    </div>
                </div>
                {metadata.showMeta === true && (
                    <>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Heading</h3>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Font Size</label>
                                        <input type="range" className="form-range" onChange={(e)=>metaFonstSize(e)} name="headingsf" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Color</label>
                                        <input type="color" className="form-control form-control-color" onChange={(e)=>metaColors(e)} name="headingsc"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Items</h3>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Font Size</label>
                                        <input type="range" className="form-range" onChange={(e)=>metaFonstSize(e)}  name="itemsf"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Color</label>
                                        <input type="color" className="form-control form-control-color" onChange={(e)=>metaColors(e)} name="itemsc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Icon</h3>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Font Size</label>
                                        <input type="range" className="form-range" onChange={(e)=>metaFonstSize(e)} name="iconsf"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label>Color</label>
                                        <input type="color" className="form-control form-control-color" onChange={(e)=>metaColors(e)} name="iconsc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </fieldset>
    );
};

export default MainBody;
