import kwenikLogo from '../logo1000.png';

export const NavBar = () => {
    return(
        <div className='navbar navbar-expand-sm'>
            <div className='container-fluid'>
                <div className='navbar-brand'>
                    <img src={kwenikLogo} alt="kwenikLogo"  height={50} width={50}/>
                </div>
            </div>
        </div>
    );
}