const Card = (props) => {

    return (
        <>
            <audio ref={props.mpRef} src={props.mp}></audio>
            <div className=" w-[350px] mx-auto flex flex-col p-[20px] rounded-[20px] backdrop-blur-[20px] items-center h-[550px] shadow-[0_0_70px_1px_white] ">
                <div id="circle" className={`flex justify-center items-center ${props.played && "animate-spin-slow"} w-[140px] h-[140px] rounded-[50%] bg-cover bg-center`}>
                    <div className=" w-[20px] h-[20px] bg-black rounded-[50%] "></div>
                </div>
                <h1 className=" text-[35px] text-white font-semibold mt-[20px] ">{props.title}</h1>
                <h3 className=" font-bold text-white text-[18px] mt-[20px] ">{props.author}</h3>
                <div className=" flex gap-7 mt-[60px] ">
                    <button
                        onClick={props.dec}
                        className=" btn w-[70px] h-[70px] bg-white rounded-[50%] text-[25px] active:bg-slate-200 fas fa-backward "></button>
                    {props.played ? (
                        <button
                            onClick={props.stop}
                            className=" btn w-[70px] h-[70px] bg-white rounded-[50%] text-[25px] active:bg-slate-200 fas fa-pause "></button>
                    ) : (
                        <button
                            onClick={props.start}
                            className=" btn w-[70px] h-[70px] bg-white rounded-[50%] text-[25px] active:bg-slate-200 fas fa-play "></button>
                    )}
                    <button
                        onClick={props.inc}
                        className=" btn w-[70px] h-[70px] bg-white rounded-[50%] text-[25px] active:bg-slate-200 fas fa-forward "></button>
                </div>
            </div>
        </>
    )
}

export default Card