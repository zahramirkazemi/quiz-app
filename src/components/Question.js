const Question = ({question}) => {
    return ( 
        <div className="inline-block bg-violet-400 rounded-xl w-5/6 mx-auto p-3 m-1 md:p-4 lg:p-5 drop-shadow-2xl">
            <p className="text-xs md:text-base lg:text-lg inline-block font-sans font-semibold">{question}</p>
        </div>
     );
}
 
export default Question;