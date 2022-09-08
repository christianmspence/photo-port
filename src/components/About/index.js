import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
import { LoremIpsum } from 'react-lorem-ipsum';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>
                <LoremIpsum p={2} />
            </p>
        </section>
    );
}

export default About;

