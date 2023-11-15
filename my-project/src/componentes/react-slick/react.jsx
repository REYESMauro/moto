import React from "react";
import Slider from "react-slick";

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="flex space-x-4">
            <h2> Single Item</h2>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item}>
                        <img src={'cb160.jpg'} alt={'Image ${}'} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SimpleSlider;

 