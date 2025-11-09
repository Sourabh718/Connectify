const Spinner = () => {
    return ( 
           
        <div className="text-center">
            <div className="mt-5"></div>
             <h2>Welcome to Connectify!</h2>
            <div className="spinner-border mt-4" style={{width:"90px", height:"90px"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
export default Spinner;