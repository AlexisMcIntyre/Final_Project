import { PictureBox } from "../Components/PictureBox";
import { TextBox } from "../Components/TextBox";
import riodulce2 from "../Pictures/riodulce2.JPG";


export default function AboutPage() {
    return (
    <>
        <h1>About</h1>
        <PictureBox
            num={riodulce2}
        />
        <TextBox
            desc="I'm a BOSSSSSS!"
        />
    </>
    );
}