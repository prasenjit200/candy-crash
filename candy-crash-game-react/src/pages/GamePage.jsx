
import CandyCrush from "../CandyCrush";

function GamePage() {
    return (
        <div 
            className="h-full flex justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/candy-crush-background.png')" }}
        >
            <CandyCrush />
        </div>
    );
}

export default GamePage;

