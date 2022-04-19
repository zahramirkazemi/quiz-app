const Options = ({options , submitAnswer}) => {
    return ( 
        <div>
            {options.map(option => 
                <button onClick={() => submitAnswer(option)} key={option} className="text-xs p-3 m-2 w-5/6 md:p-4 lg:p-5 md:text-base lg:text-lg font-sans font-semibold bg-transparent lg:hover:bg-violet-400 border border-violet-400 text-violet-400 hover:text-black rounded-xl mx-auto drop-shadow-2xl">{option}</button>
            )}
        </div>
     );
}
 
export default Options;