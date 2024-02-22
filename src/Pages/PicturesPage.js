import React from "react";
import { PictureBox } from "../Components/PictureBox";
import { TextBox } from "../Components/TextBox";
import LikeButton from "../Components/LikeButton";
import DislikeButton from "../Components/DislikeButton";
import drinks from "../Pictures/drinks.JPG";
import cafezinho from "../Pictures/cafezinho.JPG";
import acatenango from "../Pictures/acatenango.JPG";
import cityscape from "../Pictures/cityscape.JPG";
import japanesemaple from "../Pictures/japanesemaple.JPG";
import candy from "../Pictures/candy.jpeg";
import TTower from "../Pictures/TTower.JPG";
import cityscapedobrasil from "../Pictures/cityscapedobrasil.JPG";
import steakdinner from "../Pictures/steakdinner.JPG";
import friedtapioca from "../Pictures/friedtapioca.JPG";
import catherdral from "../Pictures/cathedral.JPG";
import fuego from "../Pictures/fuego.JPG";
import lanquin from "../Pictures/lanquin.JPG";
import panajachel from "../Pictures/panajachel.JPG";
import tikkal from "../Pictures/tikkal.JPG";


export default function Pictures() {

    return (
        <>
            <h1>Pictures</h1>
                <h3>Japan</h3>
                <PictureBox 
                    num1={drinks}
                    num2={cityscape}
                    num3={TTower}
                    num4={japanesemaple}
                    num5={candy}
                />
                <TextBox 
                    loc="Japan"
                    desc="Cute drinks from a bakery in Japan!"
                />
                <LikeButton /><DislikeButton />

                <h3>Brazil</h3>
                <PictureBox 
                    num1={cafezinho}
                    num2={cityscapedobrasil}
                    num3={steakdinner}
                    num4={friedtapioca}
                    num5={catherdral}
                />
                <TextBox 
                    loc="Brazil"
                    desc="Cute coffees from a cafe in Brazil!"
                />
                <LikeButton /><DislikeButton />

                <h3>Guatemala</h3>
                <PictureBox 
                    num1={acatenango}
                    num2={fuego}
                    num3={lanquin}
                    num4={panajachel}
                    num5={tikkal}
                />
                <TextBox 
                    loc="Guatemala"
                    desc="Active volcano in Guatemala!"
                />
                <LikeButton /><DislikeButton />

        </>
    );
}