const Board = ({ title, number, descrip, position}) => {
    let style ="fixed top-2 rounded-lg p-4 bg-gray-900 text-center drop-shadow-xl"+ (position == "right"? " right-2": " left-2")
    return ( 
        <div className={style}>
            <p className="text-white font-sans font-semibold text-xs lg:text-lg md:text-base sm:text-xs">{title}</p>
            <p className="text-white font-sans font-semibold text-xs lg:text-lg md:text-base sm:text-xs">{number}</p>
            <p className="text-white font-sans text-xs md:text-xs lg:text-base">{descrip}</p> 
        </div> 
     );
}
export default Board;