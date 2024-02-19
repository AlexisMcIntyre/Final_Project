import React from "react";
import { PictureBox } from "../Components/PictureBox";
import { TextBox } from "../Components/TextBox";
import LikeButton from "../Components/LikeButton";
import DislikeButton from "../Components/DislikeButton";
import drinks from "../Pictures/drinks.JPG";
import cafezinho from "../Pictures/cafezinho.JPG";
import acatenango from "../Pictures/acatenango.JPG";

export default function Pictures() {

    return (
        <>
            <h1>Pictures</h1>
                <h3>Japan</h3>
                <PictureBox 
                    num={drinks}
                />
                <TextBox 
                    loc="Japan"
                    desc="Cute drinks from a bakery in Japan!"
                />
                <LikeButton /><DislikeButton />

                <h3>Brazil</h3>
                <PictureBox
                    num={cafezinho}
                />
                <TextBox 
                    loc="Brazil"
                    desc="Cute coffees from a cafe in Brazil!"
                />
                <LikeButton /><DislikeButton />

                <h3>Guatemala</h3>
                <PictureBox
                    num={acatenango}
                />
                <TextBox 
                    loc="Guatemala"
                    desc="Active volcano in Guatemala!"
                />
                <LikeButton /><DislikeButton />

        </>
    );
}