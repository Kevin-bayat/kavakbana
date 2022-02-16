import React from "react";
import './Slider.scss'
import Text from "../Text/Text";
import image from "../../img/Branksome-Park-Architecture-by-INKSPACE-Feature.jpg";
import Button from "../Button/Button";

const Slider = () =>{
    return (
            <section className="slider">
                {/*<Text />*/}
                <img src={image} alt={""} className="image" />

                <div className="desc">
                    <h1 className="title">This is first image</h1>
                    <p>this is for KAVAK </p>
                    <Button > More Info </Button>
                </div>
            </section>
        )

}
export default Slider