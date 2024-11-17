import CountUp from "react-countup";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Success = () => {
    return (
        <div>
            <SectionTitle title={"Success"}></SectionTitle>
            <CountUp
                className="font-bold text-6xl"
                duration={5}
                end={100} />
        </div>
    );
};

export default Success;