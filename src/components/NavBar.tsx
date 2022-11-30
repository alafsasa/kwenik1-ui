import kwenikLogo from '../logo1000.png';

export const NavBar = () => {
    return(
        <nav className='navbar navbar-expand-sm fixed-top'>
            <div className='container-fluid'>
                <div className='navbar-brand'>
                    <img src={kwenikLogo} alt="kwenikLogo" width={44}/>
                        <span className='m-2' style={{fontWeight: 'bold'}}>KWENIK</span>
                </div>
            </div>
        </nav>
    );
}