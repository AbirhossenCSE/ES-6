// import add from "../../Utils/calculate";
import { add, multiply, devideTheNumberByOtherNumber as devide } from "../../Utils/calculate";
import Watch from "../Watch/Watch";

const Sunglass = () => {
    const first = 33;
    const second = 44;
    const sum = add(first, second)
    const mult = multiply(first, second)
    const vag = devide(first, second)

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;