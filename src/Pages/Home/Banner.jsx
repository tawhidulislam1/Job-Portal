import { easeOut } from "motion";
import * as motion from "motion/react-client"
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 80, 50] }}
                        transition={{duration:7, repeat:Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-700 shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [150, 180, 150] }}
                        transition={{duration:7, repeat:Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-700 shadow-2xl" />
                </div>
                <div className="flex-1">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 1, delay: 0.5, ease: easeOut, }}
                        className="text-5xl font-bold">Box Office News!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;