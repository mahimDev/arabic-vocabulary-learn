import Marquee from "react-fast-marquee";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
const MarqueeSection = () => {
    return (
        <div className="mb-20">
            <div className="mb-20">
                <SectionTitle title={'Sponsors'}></SectionTitle>
            </div>
            <Marquee>
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/jJmHc1F/02d40b125971647-61243678efcf0.jpg" alt="" />
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/0FVHC5W/haa-h-letter-arabic-calligraphy-600nw-2103831773.webp" alt="" />
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/WHbNMwk/islamic-youth-organisatoris-logo-book-mosque-dome-islamic-youth-organizations-logo-book-mosque-dome.webp" alt="" />
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/59hjrmn/Customised-Arabic-Design.jpg" alt="" />
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/Bny4bSG/ebaad6b1-d84b-4366-b73f-78b8942af25f.jpg" alt="" />
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/878dhJm/original-4713ae4d60ff8dd5c36371d8d0102524.jpg" alt="" />
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/TB2VFNn/islamic-logo-symbol-dome-and-moon-vector-Graphics-5586846-1-1-580x387.jpg" alt="" />
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/5FyDdB0/d9aa1a27-e2a6-45de-9a2a-4f08d136f5cb.jpg" alt="" />
                <img className="w-80 h-64 object-cover" src="https://i.ibb.co.com/7K4YHMB/original-723fb518bb69193eb314109f5e827849.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default MarqueeSection;